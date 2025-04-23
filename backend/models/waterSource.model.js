const mongoose = require('mongoose');

const waterSourceSchema = new mongoose.Schema({
  city: {
    type: String,
    required: [true, 'City is required'],
    trim: true
  },
  location: {
    type: String,
    required: [true, 'Location is required'],
    trim: true
  },
  sourceType: {
    type: String,
    required: [true, 'Source type is required'],
  },
  dateOfTest: {
    type: Date,
    required: [true, 'Date of test is required'],
    default: Date.now
  },
  lastTestDate: {
    type: Date,
    required: [true, 'Last test date is required']
  },
  TDS: {
    type: Number,
    required: [true, 'TDS value is required'],
    min: [0, 'TDS cannot be negative']
  },
  phValue: {
    type: Number,
    required: [true, 'pH value is required'],
    min: [0, 'pH cannot be below 0'],
    max: [14, 'pH cannot be above 14']
  },
  additionalInfo: {
    type: String,
    trim: true
  },
  isSafeForDrinking: {
    type: Boolean,
    required: [true, 'Safety status is required']
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
});

// Update the updatedAt field before saving
waterSourceSchema.pre('save', function(next) {
  this.updatedAt = Date.now();
  next();
});

const WaterSource = mongoose.model('WaterSource', waterSourceSchema);

module.exports = WaterSource;