const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  category: {
    type: String,
    required: true,
    trim: true
  },
  department: {
    type: String,
    required: true
  },
  active: {
    type: Boolean,
    required: true,
    default: true
  }
});

module.exports = mongoose.model('ProductCategory', schema);