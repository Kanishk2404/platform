const { PrismaClient } = require('@prisma/client');
const bcrypt = require('bcrypt');
const prisma = new PrismaClient();
const jwt = require('jsonwebtoken');
const sendEmail = require('../utils/sendemail'); // Add at the top with other imports



exports.signup = async (req, res) => {
    const { name, email, password } = req.body;
    try {
        // Basic email and password validation
        if (!email || typeof email !== 'string' || !email.includes('@') || !/^\S+@\S+\.\S+$/.test(email)) {
            return res.status(400).json({ error: 'Invalid email address' });
        }
        if (!password || typeof password !== 'string' || password.length < 6) {
            return res.status(400).json({ error: 'Password must be at least 6 characters' });
        }
        if (!name || typeof name !== 'string' || name.trim().length < 2) {
            return res.status(400).json({ error: 'Name must be at least 2 characters' });
        }
        const sanitizedEmail = email.trim().toLowerCase();
        const sanitizedName = name.trim();
        const existingUser = await prisma.user.findUnique({ where: { email: sanitizedEmail } });
        if (existingUser) {
            return res.status(400).json({ error: 'Email already registered' });
        }
        const hashedPassword = await bcrypt.hash(password, 10);
        // Generate OTP and expiry
        const otp = Math.floor(100000 + Math.random() * 900000).toString();
        const otpExpiry = new Date(Date.now() + 5 * 60 * 1000);
        // Create user as pending
        await prisma.user.create({
            data: { name: sanitizedName, email: sanitizedEmail, password: hashedPassword, status: 'pending', otp, otpExpiry },
        });
        // Send OTP email
        await sendEmail(sanitizedEmail, 'Verify your email', `Your signup OTP is: ${otp}`);
        res.status(201).json({ message: 'Signup successful! Please verify OTP sent to your email.' });
    } catch (error) {
        console.error('Error signing up user:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
}

exports.login = async (req, res) => {
    const { email, password } = req.body;
    try {
        // Basic email and password validation
        if (!email || typeof email !== 'string' || !email.includes('@') || !/^\S+@\S+\.\S+$/.test(email)) {
            return res.status(400).json({ error: 'Invalid email or password' });
        }
        if (!password || typeof password !== 'string' || password.length < 6) {
            return res.status(400).json({ error: 'Invalid email or password' });
        }
        const sanitizedEmail = email.trim().toLowerCase();
        const user = await prisma.user.findUnique({ where: { email: sanitizedEmail } });
        if (!user) {
            return res.status(400).json({ error: 'Invalid email or password' });
        }
        if (user.status !== 'active') {
            return res.status(403).json({ error: 'Please verify your email before logging in.' });
        }
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ error: 'Invalid email or password' });
        }
        const token = jwt.sign(
            { userId: user.id, email: user.email, name: user.name },
            process.env.JWT_SECRET,
            { expiresIn: '1h' }
        );
        res.json({ token, name: user.name, email: user.email });
    } catch (error) {
        console.error('Error logging in user:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};

// OTP verification endpoint
exports.verifyOtp = async (req, res) => {
    const { email, otp } = req.body;
    try {
        const user = await prisma.user.findUnique({ where: { email } });
        if (!user || user.status !== 'pending' || !user.otp || !user.otpExpiry) {
            return res.status(400).json({ error: 'Invalid request' });
        }
        if (user.otp !== otp) {
            return res.status(400).json({ error: 'Invalid OTP' });
        }
        if (user.otpExpiry < new Date()) {
            return res.status(400).json({ error: 'OTP expired' });
        }
        // Activate user
        await prisma.user.update({
            where: { email },
            data: { status: 'active', otp: null, otpExpiry: null },
        });
        // Return JWT
        const token = jwt.sign(
            { userId: user.id, email: user.email, name: user.name },
            process.env.JWT_SECRET,
            { expiresIn: '1h' }
        );
        res.json({ token, name: user.name, email: user.email });
    } catch (error) {
        console.error('Error verifying OTP:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};


exports.forgotPassword = async (req, res) => {
  const { email } = req.body;
  try {
    // 1. Find user
    const user = await prisma.user.findUnique({ where: { email } });
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    // 2. Generate OTP and expiry (5 min)
    const otp = Math.floor(100000 + Math.random() * 900000).toString();
    const otpExpiry = new Date(Date.now() + 5 * 60 * 1000);

    // 3. Save OTP and expiry to user
    await prisma.user.update({
      where: { email },
      data: { otp, otpExpiry },
    });

    // 4. Send OTP email
    await sendEmail(email, 'Your OTP Code', `Your OTP is: ${otp}`);

    res.json({ message: 'OTP sent to your email' });
  } catch (error) {
    console.error('Error in forgotPassword:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

exports.resetPassword = async (req, res) => {
  const { email, otp, newPassword } = req.body;
  try {
    // 1. Find user
    const user = await prisma.user.findUnique({ where: { email } });
    if (!user || !user.otp || !user.otpExpiry) {
      return res.status(400).json({ error: 'Invalid request' });
    }

    // 2. Check OTP and expiry
    if (user.otp !== otp) {
      return res.status(400).json({ error: 'Invalid OTP' });
    }
    if (user.otpExpiry < new Date()) {
      return res.status(400).json({ error: 'OTP expired' });
    }

    // 3. Hash new password
    const hashedPassword = await bcrypt.hash(newPassword, 10);

    // 4. Update password and clear OTP fields
    await prisma.user.update({
      where: { email },
      data: { password: hashedPassword, otp: null, otpExpiry: null },
    });

    res.json({ message: 'Password reset successful' });
  } catch (error) {
    console.error('Error in resetPassword:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};