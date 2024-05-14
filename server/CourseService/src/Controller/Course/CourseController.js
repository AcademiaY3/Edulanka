import mongoose from "mongoose";
import Course from "../../Model/Course/Course.js";
import response from "../../Utils/ResponseHandler/ResponseHandler.js";
import RabbitRes from "../../Utils/Constants/RabbitRes.js";

class CourseController {
    //get course from rabbit req
    getCourseByRabbit = async (id) => {
        try {
            const course = await Course.findOne({ _id: id })
            if (!course) {
                return RabbitRes('error', 404, { isCourse: false, message: "no course found" })
            } else {
                return RabbitRes('success', 200, { isCourse: true, course })
            }
        } catch (error) {
            console.log(error)
            return RabbitRes('error', 500, { isCourse: false, message: error })
        }
    }

    // Method to add a new course
    addCourse = async (req, res) => {
        try {

            // Extract data from request body
            const { name, title, price, category, hours, skills, language, certificate, thumbnail, description, tag, instructor, lectures, approved, approved_by } = req.body;
            // Create a new course instance
            const newCourse = new Course({
                name,
                title,
                price,
                category,
                hours,
                skills,
                language,
                certificate,
                thumbnail,
                description,
                tag,
                instructor,
                lectures,
                approved,
                approved_by
            });

            // Save the course to the database
            const savedCourse = await newCourse.save();
            if (savedCourse)
                return response(res, 200, { message: 'course added' });
            else
                return response(res, 403, { message: 'course adding failed' });
        } catch (error) {
            console.log(error);
            return response(res, 500, { error: error.message });
        }
    }

    // Method to get a course by ID
    getCourse = async (req, res) => {
        const { courseId } = req.params;
        try {
            const course = await Course.findById(courseId);
            if (!course) return response(res, 404, { message: 'course not found' });
            return response(res, 200, course);
        } catch (error) {
            console.log(error);
            return response(res, 500, { error: error.message });
        }
    }

    // Method to get all courses
    getAllCourses = async (req, res) => {
        try {
            const courses = await Course.find({});
            if (!courses) return response(res, 404, { message: 'course not found' });
            return response(res, 200, { courses });
        } catch (error) {
            console.log(error);
            return response(res, 500, { error: error.message });
        }
    }

    // Method to delete a course by ID
    deleteCourse = async (req, res) => {
        // const { courseId } = req.params;
        const { courseId } = req.body;
        try {
            // Delete the course
            const deletedCourse = await Course.findByIdAndDelete(courseId);
            if (!deletedCourse)
                return response(res, 404, { message: 'course deletion error not found' });

            return response(res, 200, { message: 'course deleted successfully' });
        } catch (error) {
            console.log(error);
            return response(res, 500, { error: error.message });
        }
    }

    // Method to update a course by ID
    updateCourse = async (req, res) => {
        const { courseId } = req.params;
        const updateData = req.body;
        try {
            const updatedCourse = await Course.findByIdAndUpdate(courseId, updateData, { new: true });
            if (!updatedCourse) return response(res, 404, { message: 'course not found' });
            return response(res, 200, updatedCourse);
        } catch (error) {
            console.log(error);
            return response(res, 500, { error: error.message });
        }
    }
}

export default CourseController = new CourseController();
