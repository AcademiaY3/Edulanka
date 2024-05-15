import * as yup from 'yup';

class CourseYup {
    addCourse = yup.object({
        name: yup.string().required(),
        title: yup.string().required(),
        price: yup.number().required().positive(),
        category: yup.string().required(),
        hours: yup.number().required().positive(),
        skills: yup.string().required(),
        language: yup.string().required(),
        tags: yup.string().required(),
        certificate: yup.string().oneOf(['yes','no']).required(),
    });
}

export default CourseYup = new CourseYup;
