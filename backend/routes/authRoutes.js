const express = require('express');
const router = express.Router();
const { login, logout, register } = require('../controllers/authController'); // Import auth controller methods
const authMiddleware = require('../middleware/authMiddleware'); // Middleware for protected routes

// Route: POST /api/auth/login
// Description: User login
router.post('/login', login);

// Route: POST /api/auth/register
// Description: User registration
router.post('/register', register);

// Route: POST /api/auth/logout
// Description: User logout
router.post('/logout', authMiddleware, logout);

module.exports = router;
