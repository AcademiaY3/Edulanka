import express from "express";
const router = express.Router();
import CourseController from "../../Controller/Course/CourseController.js";
import ValidateScehma from "../../MiddleWare/Schema/ValidateSchema.js";
import CourseYup from "../../Utils/Validation/Course/CourseYup.js";
import AdminCheck from "../../MiddleWare/Privileges/AdminCheck.js";

// Route to add a new course
router.post("/addCourse", AdminCheck, ValidateScehma(CourseYup.addCourse), CourseController.addCourse);

// Route to get all courses
router.get("/getAllCourses", CourseController.getAllCourses);

// Route to get a course by ID
router.get("/getCourse/:courseId", AdminCheck,CourseController.getCourse);

// Route to delete a course by ID
router.post("/deleteCourse", AdminCheck, ValidateScehma(CourseYup.deleteCourse),CourseController.deleteCourse);

// Route to update a course by ID
router.put("/updateCourse/:courseId", AdminCheck, ValidateScehma(CourseYup.updateCourse), CourseController.updateCourse);

export default router;
