import { roles } from '../../Utils/Constants/Roles.js'
import ResTypes from '../../Utils/ResponseHandler/ResponseHandler.js'
import response from '../../Utils/ResponseHandler/ResponseHandler.js'
import AuthHeaderYup from '../../Utils/Validation/AuthHeaderYup.js'

const checkHeaders = async (req, res, next) => {

    try {
        const authHeader = req.headers.authorization
        const authRole = req.headers.role
        const token = authHeader.split(" ")[1]
        
        if (!authHeader) {
            return response(res, 404, {message:'missing_auth_header'})
        }
        if (!authRole) {
            return response(res, 404, {message:'missing_role_header'})
        }
        if (!token) {
            return response(res, 404, {message:'missing_token'})
        }
        if (!roles.includes(authRole.toLowerCase())) {
            return response(res, 403, {message:'not_found_role'})
        }
        next()
    } catch (error) {
        // Format the error message
        let errorMessage = error.message || 'An unexpected error in gateway/checkHeaders';

        console.error(error)
        return response(res, 403, { error: errorMessage });
    }
}

export default checkHeaders