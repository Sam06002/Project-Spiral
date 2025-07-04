/**
 * Teacher routes
 * @module routes/teacher
 */
const express = require('express');
const router = express.Router();
const teacherController = require('../controllers/teacherController');

/**
 * @route GET /api/teacher/class/:id/attendance
 * @desc Get class attendance (teacher)
 */
router.get('/class/:id/attendance', teacherController.classAttendance);

/**
 * @route GET /api/reports/export
 * @desc Export attendance report (CSV)
 */
router.get('/reports/export', teacherController.exportReport);

module.exports = router; 