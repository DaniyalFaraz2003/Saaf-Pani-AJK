const City = require('../models/city.model');

// Get all cities with their locations
const getAllCitiesWithLocations = async (req, res) => {
  try {
    const cities = await City.find({}, 'name locations.name')
      .sort({ name: 1 })
      .lean();

    const formattedData = cities.map(city => ({
      city: city.name,
      locations: city.locations.map(loc => loc.name)
    }));

    res.json({
      success: true,
      count: cities.length,
      data: formattedData
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

// Get all locations for a specific city
const getLocationsByCity = async (req, res) => {
  try {
    const city = await City.findOne(
      { name: req.params.city },
      'locations.name'
    ).lean();

    if (!city) {
      return res.status(404).json({
        success: false,
        message: `City '${req.params.city}' not found`
      });
    }

    const locations = city.locations.map(loc => loc.name);

    res.json({
      success: true,
      city: req.params.city,
      count: locations.length,
      data: locations
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

module.exports = {
  getAllCitiesWithLocations,
  getLocationsByCity
};