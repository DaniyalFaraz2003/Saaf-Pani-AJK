const express = require('express');
const router = express.Router();
const {
  createWaterSource,
  getAllWaterSources,
  getWaterSourcesByCity,
  getWaterSource,
  updateWaterSource,
  deleteWaterSource,
  getFirstSourceByCityAndLocation
} = require('../controllers/waterSourceController');

// Public routes
router.get('/', getAllWaterSources);
router.get('/city/:city', getWaterSourcesByCity);
router.get('/:id', getWaterSource);
router.get('/city/:city/location/:location', getFirstSourceByCityAndLocation);

// Protected routes (require admin authentication)
router.post('/', createWaterSource);
router.put('/:id', updateWaterSource);
router.delete('/:id', deleteWaterSource);

module.exports = router;