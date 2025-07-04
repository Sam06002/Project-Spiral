/**
 * Attendance routes
 * @module routes/attendance
 */
const express = require('express');
const router = express.Router();
const attendanceController = require('../controllers/attendanceController');

/**
 * @route GET /api/attendance/today
 * @desc Get today's attendance (student)
 */
router.get('/today', attendanceController.today);

/**
 * @route GET /api/attendance/history
 * @desc Get attendance history (student)
 */
router.get('/history', attendanceController.history);

/**
 * @route POST /api/attendance/punch
 * @desc Biometric punch-in event
 */
router.post('/punch', attendanceController.punch);

/**
 * @route POST /api/attendance/manual
 * @desc Manual override (teacher)
 */
router.post('/manual', attendanceController.manual);

module.exports = router; 