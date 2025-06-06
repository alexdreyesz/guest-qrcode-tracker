const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/users', require('./routes/userRoutes'));

// Connect to MongoDB and start server
mongoose.connect(process.env.MONGO_URI)
.then(() => {
console.log('MongoDB connected');
app.listen(process.env.PORT || 5000, () =>
    console.log(`Server running on port ${process.env.PORT || 5000}`)
);
})
.catch(err => console.error(err));