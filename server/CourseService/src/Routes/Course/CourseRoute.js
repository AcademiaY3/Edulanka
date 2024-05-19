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
router.get("/getAllCourses", CourseController.getAllCourses);

// Route to get a course by ID
router.get("/getCourse/:courseId", CourseController.getCourse);

//get courses of a instructor
router.post("/getAllInstructorsCourses",AdminInstCheck,ValidateScehma(CourseYup.getAllInstructorsCourses),(CourseController.getAllInstructorsCourses))

//get learners of a instructor
router.post("/getAllInstructorsLearners",AdminInstCheck,ValidateScehma(CourseYup.getAllInstructorsLearners),CourseController.getAllInstructorsLearners)

// get the learner enrolled courses
router.post("/getLearnerCourses",ValidateScehma(CourseYup.getLearnerCourses),CourseController.getLearnerCourses)

// Route to delete a course by ID
router.post("/deleteCourse", AdminInstCheck, ValidateScehma(CourseYup.deleteCourse),CourseController.deleteCourse);

// Route to update a course by ID
router.put("/updateCourse/:courseId", AdminInstCheck, ValidateScehma(CourseYup.updateCourse), CourseController.updateCourse);

export default router;
