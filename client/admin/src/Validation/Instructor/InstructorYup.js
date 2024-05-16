import * as yup from 'yup';

class InstructorYup {
    instructorSchema = yup.object({

        name: yup.string().required('Name is required'),
        email: yup.string().email('Invalid email address').required('Email is required'),
        telephone: yup.string().required('Telephone is required'),
        gender: yup.string().oneOf(gender, 'Invalid gender').required('Gender is required'),
        experience: yup.string(),
        skill: yup.string(),
        degree: yup.string(),
        about_me: yup.string(),
        password: yup.string().min(8, 'Password must be at least 8 characters').required('Password is required'),

    });
}

export default new InstructorYup();