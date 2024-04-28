import mongoose from "mongoose";
import Course from "../../Model/Course/Course.js";
import response from "../../Utils/ResponseHandler/ResponseHandler.js";

class CourseController {
    // Method to add a new course
    addCourse = async (req, res) => {
        let session = null;
        try {
            // Start a MongoDB session
            session = await mongoose.startSession();
            session.startTransaction();

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

            // Commit the transaction
            await session.commitTransaction();
            session.endSession();

            return response(res, 200, {message:'course added'});
        } catch (error) {
            if (session) {
                await session.abortTransaction();
                session.endSession();
            }
            console.log(error);
            return response(res, 500, error);
        }
    }

    // Method to get a course by ID
    getCourse = async (req, res) => {
        const { courseId } = req.params;
        try {
            const course = await Course.findById(courseId);
            if (!course) return response(res, 404, {message:'course not found'});
            return response(res, 200, course);
        } catch (error) {
            console.log(error);
            return response(res, 500, error);
        }
    }

    // Method to get all courses
    getAllCourses = async (req, res) => {
        try {
            const courses = await Course.find({});
            if (!courses) return response(res, 404, {message:'course not found'});
            return response(res, 200, { courses });
        } catch (error) {
            console.log(error);
            return response(res, 500, error);
        }
    }

    // Method to delete a course by ID
    deleteCourse = async (req, res) => {
        const { courseId } = req.params;
        let session = null;
        try {
            // Start a MongoDB session
            session = await mongoose.startSession();
            session.startTransaction();

            // Delete the course
            const deletedCourse = await Course.findByIdAndDelete(courseId);
            if (!deletedCourse) {
                await session.abortTransaction();
                session.endSession();
                return response(res, 404, {message:'course delete error'});
            }

            // Commit the transaction
            await session.commitTransaction();
            session.endSession();

            return response(res, 200,{message:'course deleted successfully'});
        } catch (error) {
            if (session) {
                await session.abortTransaction();
                session.endSession();
            }
            console.log(error);
            return response(res, 500, error);
        }
    }

    // Method to update a course by ID
    updateCourse = async (req, res) => {
        const { courseId } = req.params;
        const updateData = req.body;
        try {
            const updatedCourse = await Course.findByIdAndUpdate(courseId, updateData, { new: true });
            if (!updatedCourse) return response(res, 404, {message:'course not found'});
            return response(res, 200, updatedCourse);
        } catch (error) {
            console.log(error);
            return response(res, 500, error.mesage);
        }
    }
}

export default CourseController = new CourseController();
