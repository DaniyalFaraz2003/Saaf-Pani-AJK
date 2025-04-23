const express = require('express');
const router = express.Router();
const { getDashboardStats } = require('../controllers/dashboardController');

// Protected route (requires admin authentication)
router.get('/', getDashboardStats);

module.exports = router;