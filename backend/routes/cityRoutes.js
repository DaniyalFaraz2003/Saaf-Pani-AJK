const express = require('express');
const router = express.Router();
const {
  getAllCitiesWithLocations,
  getLocationsByCity
} = require('../controllers/cityController');

// Public routes
router.get('/', getAllCitiesWithLocations);
router.get('/:city/locations', getLocationsByCity);

module.exports = router;