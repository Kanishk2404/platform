const express = require('express');
const { PrismaClient } = require('@prisma/client');
const dotenv = require('dotenv');

dotenv.config();

const app = express();

const cors = require('cors');
app.use(cors({
  origin: [
    'http://localhost:5173',
    'https://platform-production-1ab4.up.railway.app',
    'https://your-frontend-vercel-domain.vercel.app' // replace with your actual Vercel frontend domain
  ],
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



const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});