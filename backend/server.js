/**
 * Attendance Backend Server
 * @module server
 */
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// Import routes
const authRoutes = require('./routes/auth');
const attendanceRoutes = require('./routes/attendance');
const teacherRoutes = require('./routes/teacher');

/**
 * @name /api/auth
 * @description Auth endpoints
 */
app.use('/api/auth', authRoutes);

/**
 * @name /api/attendance
 * @description Attendance endpoints
 */
app.use('/api/attendance', attendanceRoutes);

/**
 * @name /api/teacher
 * @description Teacher endpoints
 */
app.use('/api/teacher', teacherRoutes);

/**
 * @name /api/reports
 * @description Reports endpoints
 */
app.use('/api/reports', teacherRoutes);

/**
 * Root route
 * @name GET /
 * @function
 * @returns {string} Welcome message
 */
app.get('/', (req, res) => {
  res.send('Attendance Backend API');
});

const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error('MongoDB connection error:', err);
  }); 