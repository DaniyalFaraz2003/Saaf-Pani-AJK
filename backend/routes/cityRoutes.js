const express = require('express');
const router = express.Router();
const {
  getAllCitiesWithLocations,
  getLocationsByCity,
  getAllWaterSourceTypes
} = require('../controllers/cityController');

// Public routes
router.get('/', getAllCitiesWithLocations);
router.get('/:city/locations', getLocationsByCity);
router.get('/source-types', getAllWaterSourceTypes);

module.exports = router;