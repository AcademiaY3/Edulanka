import yup from 'yup'
import { roles } from '../Constants/Roles.js';

class AuthHeaderYup {
    authHeaderSchema = yup.object({
        role: yup.string().oneOf(roles).required(),
        authorization:yup.string().required()
    })
}

export default AuthHeaderYup = new AuthHeaderYup();