import yup from 'yup'
import role from '../Constants/Role.js'

class AuthYup {
    registerSchema = yup.object({
        role: yup.string().oneOf(role).required(),
        name: yup.string().required(),
        password: yup.string().min(8).required(),
        email: yup.string().email().required(),
        telephone: yup.string().required(),
    })
    loginSchema = yup.object({
        password: yup.string().required(),
        email: yup.string().required(),
        role: yup.string().oneOf(role).required(),
    })
    passwordReset = yup.object({
        email:yup.string().email().required()
    })
    verifyPasswordReset = yup.object({
        password:yup.string().min(8).required()
    })
}

export default AuthYup = new AuthYup();