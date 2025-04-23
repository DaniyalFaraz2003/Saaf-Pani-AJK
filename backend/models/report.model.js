const mongoose = require('mongoose');

const reportSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Report writer name is required'],
    trim: true
  },
  area: {
    type: String,
    required: [true, 'Area is required'],
    trim: true
  },
  location: {
    type: String,
    required: [true, 'Location is required'],
    trim: true
  },
  complaint: {
    type: String,
    required: [true, 'Complaint description is required'],
    trim: true
  },
  status: {
    type: String,
    required: true,
    enum: ['pending', 'resolved'],
    default: 'pending'
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
reportSchema.pre('save', function(next) {
  this.updatedAt = Date.now();
  next();
});

const Report = mongoose.model('Report', reportSchema);

module.exports = Report;