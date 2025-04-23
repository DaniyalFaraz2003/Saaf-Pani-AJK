const express = require('express');
const router = express.Router();
const { loginAdmin } = require('../controllers/authController');

// Public route
router.post('/login', loginAdmin);


module.exports = router;