const mongoose = require('mongoose');
const Course = require('../models/courseModel.js');

exports.getAllCourses = async (req, res) => {
    try {
        const courses = await Course.find();
    
        if (courses.length === 0) {
          return res.status(200).json({ message: "number of courses is 0" });
        }
    
        res.status(200).json(courses);
      } catch (error) {
        res.status(500).json({ message: error.message });
      }
    
    }

    exports.getCourseById = async (req, res) => {
        try {
            const course = await Course.findById(req.params.id);
            if (!course) {
                return res.status(404).json({ message: 'Course not found' });
            }
           else if (courses.length === 0) {
                return res.status(200).json({ message: "number of courses is 0" });
              }
            res.status(200).json(course);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }
    exports.createCourse = async (req, res) => {
        const { title, description, Image, startDate, endDate, price } = req.body;
        const course = new Course({
            title,
            description,
            Image,
            startDate,
            endDate,
            price
        });
        try {
            const savedCourse = await course.save();
            res.status(201).json(savedCourse);
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    }

exports.updateCourse = async (req, res) => {
    try {
        const course = await Course.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!course) {
            return res.status(404).json({ message: 'Course not found' });
        }   
        res.status(200).json(course);
    }
    catch (error) {
        res.status(400).json({ message: error.message });
    }
}
exports.deleteCourse = async (req, res) => {
    try {
        const course = await Course.findByIdAndDelete(req.params.id);
        if (!course) {
            return res.status(404).json({ message: 'Course not found' });
        }
        res.status(200).json({ message: 'Course deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}


