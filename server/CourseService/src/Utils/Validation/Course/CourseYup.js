import * as yup from 'yup';

class CourseYup {
    addCourse = yup.object({
        name: yup.string().required(),
        title: yup.string().required(),
        price: yup.number().required(),
        category: yup.string().required(),
        hours: yup.number().required(),
        skills: yup.string().oneOf(['beginner', 'intermediate', 'expert']).required(),
        language: yup.string().required(),
        certificate: yup.string().oneOf(['yes', 'no']).required(),
        thumbnail: yup.string().required(),
        description: yup.string().required(),
        tag: yup.array().of(yup.string().required()).required(),
        instructor: yup.string().required(),
        lectures: yup.array().required(),
        approved: yup.boolean().required(),
        approved_by: yup.string().required(),
    });

    updateCourse = yup.object({
        name: yup.string().required(),
        title: yup.string().required(),
        price: yup.number().required(),
        category: yup.string().required(),
        hours: yup.number().required(),
        skills: yup.string().oneOf(['beginner', 'intermediate', 'expert']).required(),
        language: yup.string().required(),
        certificate: yup.string().oneOf(['yes', 'no']).required(),
        thumbnail: yup.string().required(),
        description: yup.string().required(),
        tag: yup.array().of(yup.string().required()).required(),
        instructor: yup.string().required(),
        lectures: yup.array().required(),
        approved: yup.boolean().required(),
        approved_by: yup.string().required(),
    });

    getCourseById = yup.object({
        courseId: yup.string().required(),
    });

    deleteCourse = yup.object({
        courseId: yup.string().required(),
    });
    getAllInstructorsCourses = yup.object({
        instructor: yup.string().required(),
    });
    getAllInstructorsLearners = yup.object({
        instructor: yup.string().required(),
    })
    getLearnerCourses = yup.object({
        learner: yup.string().required(),
    })
}

const courseYup = new CourseYup();
export default courseYup;
