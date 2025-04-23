const WaterSource = require('../models/waterSource.model');

// Create a new water source
const createWaterSource = async (req, res) => {
  try {
    const waterSource = new WaterSource(req.body);
    await waterSource.save();
    res.status(201).json({
      success: true,
      data: waterSource
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message
    });
  }
};

// Get all water sources
const getAllWaterSources = async (req, res) => {
  try {
    const waterSources = await WaterSource.find().sort({ createdAt: -1 });
    res.json({
      success: true,
      count: waterSources.length,
      data: waterSources
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

// Get water sources by city
const getWaterSourcesByCity = async (req, res) => {
  try {
    const waterSources = await WaterSource.find({ city: req.params.city });
    if (!waterSources.length) {
      return res.status(404).json({
        success: false,
        message: `No water sources found for city ${req.params.city}`
      });
    }
    res.json({
      success: true,
      count: waterSources.length,
      data: waterSources
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

// Get single water source
const getWaterSource = async (req, res) => {
  try {
    const waterSource = await WaterSource.findById(req.params.id);
    if (!waterSource) {
      return res.status(404).json({
        success: false,
        message: 'Water source not found'
      });
    }
    res.json({
      success: true,
      data: waterSource
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

// Update water source
const updateWaterSource = async (req, res) => {
  try {
    const waterSource = await WaterSource.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );
    if (!waterSource) {
      return res.status(404).json({
        success: false,
        message: 'Water source not found'
      });
    }
    res.json({
      success: true,
      data: waterSource
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message
    });
  }
};

// Delete water source
const deleteWaterSource = async (req, res) => {
  try {
    const waterSource = await WaterSource.findByIdAndDelete(req.params.id);
    if (!waterSource) {
      return res.status(404).json({
        success: false,
        message: 'Water source not found'
      });
    }
    res.json({
      success: true,
      data: {}
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

module.exports = {
  createWaterSource,
  getAllWaterSources,
  getWaterSourcesByCity,
  getWaterSource,
  updateWaterSource,
  deleteWaterSource
};