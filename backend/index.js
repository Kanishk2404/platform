const express = require('express');
const { PrismaClient } = require('@prisma/client');
const dotenv = require('dotenv');

dotenv.config();

const app = express();

const cors = require('cors');
app.use(cors({
  origin: function (origin, callback) {
    // Allow requests with no origin (like mobile apps, curl, etc.)
    if (!origin) return callback(null, true);
    // Allow localhost (http/https) on 5173 and 5174, and production domains
    const allowed = [
      'http://localhost:5173',
      'https://localhost:5173',
      'http://localhost:5174',
      'https://localhost:5174',
      'https://platform-production-1ab4.up.railway.app',
      'https://your-frontend-vercel-domain.vercel.app' // replace with your actual Vercel frontend domain
    ];
    if (allowed.includes(origin)) {
      return callback(null, true);
    }
    return callback(new Error('Not allowed by CORS'));
  },
  credentials: true
}));

const prisma = new PrismaClient();

app.use(express.json());


const authRoutes = require('./routes/auth');
const authenticateToken = require('./middleware/authMiddleware');

app.use('/api/auth', authRoutes); 


// Test route
app.get('/', (req, res) => {
  res.send('API is running!');
});

// protected route
app.get('/api/protected', authenticateToken, (req, res) => {
  res.json({ message: 'This is a protected route!', user: req.user });
});



const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});