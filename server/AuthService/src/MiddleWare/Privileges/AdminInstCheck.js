import response from "../../Utils/ResponseHandler/ResponseHandler.js"
import Role from '../../Utils/Constants/Role.js'

const AdminInstCheck = (req, res, next) => {
    const authRole = req.headers.role

    if (!authRole) {
        return response(res, 404, {message:'missing role'})
    }
    if (authRole!==Role[0] && authRole!==Role[2]) {
        return response(res, 403, { message:'no access'})
    }
    next()
}

export default AdminInstCheck