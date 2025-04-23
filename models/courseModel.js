const mongoose = require('mongoose');
const courseSchema = new mongoose.Schema({
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    image: {
      type: String
    },
    startDate: {
      type: Date
    },
    endDate: {
      type: Date
    },
    price: {
      type: Number,
      required: true
    }
  }, {
    timestamps: true
  });
const Course = mongoose.model('Course', courseSchema); 
module.exports = Course;
