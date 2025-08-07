const express = require('express');
const {signup, login, forgotPassword, resetPassword} = require('../controllers/authController');
const rateLimit = require('express-rate-limit');


const router = express.Router();


// Limit: 5 requests per 10 minutes per IP for sensitive routes
const authLimiter = rateLimit({
  windowMs: 10 * 60 * 1000, // 10 minutes
  max: 5,
  message: { error: 'Too many requests, please try again later.' }
});
router.post('/signup', signup);
router.post('/verify-otp', require('../controllers/authController').verifyOtp);
router.post('/login', authLimiter, login);
router.post('/forgot-password', authLimiter, forgotPassword);
router.post('/reset-password', authLimiter, resetPassword);

module.exports = router;