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

    //add enrolled learners by rabbit
    addLearnerByRabbit = async (cid, lid) => {
        try {
            const course = await Course.findOne({ _id: cid });
            if (!course) {
                return RabbitRes('error', 404, { isSuccess: false, message: "No course found" });
            } else {
                // Check if the learner ID is already enrolled in the course
                const isEnrolled = course.enrolled.some(enrollment => enrollment.learner.toString() === lid);
                if (isEnrolled) {
                    return RabbitRes('error', 400, { isSuccess: false, message: "already enrolled" });
                } else {
                    // Add the learner to the course with the enrollment date
                    course.enrolled.push({ learner: lid });
                    await course.save();
                    return RabbitRes('success', 200, { isSuccess: true, course });
                }
            }
        } catch (error) {
            console.log(error);
            return RabbitRes('error', 500, { isSuccess: false, message: error });
        }
    };

    // Method to add a new course
    addCourse = async (req, res) => {
        try {

            // Extract data from request body
            const { name, title, price, category, hours, skills, language, certificate, thumbnail, description, tag, instructor, enrolled, lectures, approved, approved_by, outline, added_by } = req.body;
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
                approved_by,
                outline,
                added_by,
                enrolled
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

    getAllInstructorsCourses = async (req, res) => {
        const { instructor } = req.body;
        try {
            const course = await Course.find({ instructor });
            if (!course) return response(res, 404, { message: 'course not found' });
            return response(res, 200, course);
        } catch (error) {
            console.log(error);
            return response(res, 500, { error: error.message });
        }
    }

    getAllInstructorsLearners = async (req, res) => {
        const { instructor } = req.body;
        try {
            let courses = await Course.find({ instructor }).select('name title price thumbnail enrolled');
            // Filter out courses with no enrolled learners
            courses = courses.filter(course => course.enrolled.length > 0);

            if (courses.length === 0) return response(res, 404, { message: 'no learners found' });

            // Transform the response to the desired format
            var enrolled = [];
            var totalLearners = 0;
            courses.forEach(course => {
                // Count learners in each course
                const learnerCount = course.enrolled.length;
                totalLearners += learnerCount;

                course.enrolled.forEach(enrolledId => {
                    enrolled.push({
                        learner: enrolledId.learner,
                        enrolled: enrolledId.enrolled_at,
                        course: {
                            name: course.name,
                            title: course.title,
                            price: course.price,
                            thumbnail: course.thumbnail

                        }
                    });
                });
            });
            return response(res, 200, { learners: enrolled, totalCourses: courses.length, totalLearners });
        } catch (error) {
            console.log(error);
            return response(res, 500, { error: error.message });
        }
    }

    //get the courses enrolled by the learner
    getLearnerCourses = async (req, res) => {
        const { learner } = req.body;
        try {
            // Find all courses where the learner is enrolled
            const courses = await Course.find({ "enrolled.learner": learner }).select('_id');

            if (courses.length === 0) return response(res, 404, { message: 'no courses found' });

            // Extract course IDs
            const enrolledCourses = courses.map(course => course._id);

            return response(res, 200, { courses: enrolledCourses });
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
