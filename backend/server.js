const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./config/db');
const errorHandler = require('./utils/errorHandler');

// Load environment variables
dotenv.config();

// Initialize Express app
const app = express();

// Connect to MongoDB
connectDB();

// Middleware
app.use(cors()); // Enable CORS
app.use(express.json()); // Parse JSON request bodies

// Routes
app.use('/api/auth', require('./routes/auth')); // Authentication routes
app.use('/api/projects', require('./routes/project')); // Project routes
app.use('/api/tasks', require('./routes/task')); // Task routes

// Default route
app.get('/', (req, res) => {
  res.send('Welcome to the Project Management App API');
});

// Error handler middleware (must be the last middleware)
app.use(errorHandler);

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
