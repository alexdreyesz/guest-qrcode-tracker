const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();

// Middlewares
app.use(cors({
    origin: ['http://localhost:5173', 'https://hondurasoft.xyz'],
    credentials: true
}));
app.use(express.json());

// Routes
app.use('/api/users', require('./routes/userRoutes'));

// Connect to MongoDB and start server
mongoose.connect(process.env.MONGO_URI)
.then(() => {
console.log('MongoDB connected');

const PORT = process.env.PORT || 5000;

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server running on port ${PORT}`);
});

})
.catch(err => console.error(err));