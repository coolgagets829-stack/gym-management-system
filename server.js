const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const userRoutes = require('./routes/users');
const workoutRoutes = require('./routes/workouts');
const logRoutes = require('./routes/logs');
const nutritionRoutes = require('./routes/nutrition');
const statsRoutes = require('./routes/stats');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(bodyParser.json());

// MongoDB Connection
mongoose.connect('mongodb://localhost:27017/gymManagement', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

// Routes
app.use('/api/users', userRoutes);
app.use('/api/workouts', workoutRoutes);
app.use('/api/logs', logRoutes);
app.use('/api/nutrition', nutritionRoutes);
app.use('/api/stats', statsRoutes);

// Server Listening
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
