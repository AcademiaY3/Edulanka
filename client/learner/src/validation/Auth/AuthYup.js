import * as yup from 'yup'

class AuthYup {
    registerSchema = yup.object({
        name: yup.string().required(),
        password: yup.string().min(8).required(),
        telephone: yup.string().min(10).max(10).required(),
        email: yup.string().email().required(),
    })
    loginSchema = yup.object({
        password: yup.string().required(),
        email: yup.string().email().required(),
        role: yup.string().required()
    })
    passwordReset = yup.object({
        email:yup.string().email().required()
    })
    verifyPasswordReset = yup.object({
        password:yup.string().min(8).required()
    })
}


export default AuthYup = new AuthYup();