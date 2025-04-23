const express = require('express');
const router = express.Router();
const Course = require('../models/courseModel.js');
const courseController = require('../controllers/courseControllers.js');

router.get('/', courseController.getAllCourses);
router.get('/:id',courseController.getCourseById);
router.post('/', courseController.createCourse);
router.put('/:id', courseController.updateCourse);
router.delete('/:id', courseController.deleteCourse);

module.exports = router;