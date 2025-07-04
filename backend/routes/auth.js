/**
 * Auth routes
 * @module routes/auth
 */
const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');

/**
 * @route POST /api/auth/login
 * @desc Login (student/teacher)
 */
router.post('/login', authController.login);

module.exports = router; 