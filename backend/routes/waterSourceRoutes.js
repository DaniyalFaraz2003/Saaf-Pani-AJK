const express = require('express');
const router = express.Router();
const {
  createWaterSource,
  getAllWaterSources,
  getWaterSourcesByCity,
  getWaterSource,
  updateWaterSource,
  deleteWaterSource
} = require('../controllers/waterSourceController');

// Public routes
router.get('/', getAllWaterSources);
router.get('/city/:city', getWaterSourcesByCity);
router.get('/:id', getWaterSource);

// Protected routes (require admin authentication)
router.post('/', createWaterSource);
router.put('/:id', updateWaterSource);
router.delete('/:id', deleteWaterSource);

module.exports = router;