const express = require('express');
const router = express.Router();
const {
  createReport,
  getAllReports,
  updateReportStatus,
  deleteReport
} = require('../controllers/reportController');

// Public routes
router.post('/', createReport);

// Protected routes (require admin authentication)
router.get('/', getAllReports);
router.patch('/:id/status', updateReportStatus);
router.delete('/:id', deleteReport);

module.exports = router;