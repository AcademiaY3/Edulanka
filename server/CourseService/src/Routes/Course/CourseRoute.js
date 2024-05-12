import express from "express";
const router = express.Router();
import CourseController from "../../Controller/Course/CourseController.js";
import ValidateScehma from "../../MiddleWare/Schema/ValidateSchema.js";
import CourseYup from "../../Utils/Validation/Course/CourseYup.js";
import AdminCheck from "../../MiddleWare/Privileges/AdminCheck.js";
import AdminInstCheck from "../../MiddleWare/Privileges/AdminInstCheck.js";

// Route to add a new course
router.post("/addCourse", AdminInstCheck, ValidateScehma(CourseYup.addCourse), CourseController.addCourse);

// Route to get all courses
router.get("/getAllCourses", AdminInstCheck,CourseController.getAllCourses);

// Route to get a course by ID
router.get("/getCourse/:courseId", AdminInstCheck,CourseController.getCourse);

// Route to delete a course by ID
router.post("/deleteCourse", AdminInstCheck, ValidateScehma(CourseYup.deleteCourse),CourseController.deleteCourse);

// Route to update a course by ID
router.put("/updateCourse/:courseId", AdminInstCheck, ValidateScehma(CourseYup.updateCourse), CourseController.updateCourse);

export default router;
