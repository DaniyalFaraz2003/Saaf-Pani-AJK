const mongoose = require('mongoose');

const sourceTypeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
    unique: true
  }
});

const SourceType = mongoose.model('SourceType', sourceTypeSchema);

module.exports = SourceType;