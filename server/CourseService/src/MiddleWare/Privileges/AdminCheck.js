import response from "../../Utils/ResponseHandler/ResponseHandler.js"
const AdminCheck = (req, res, next) => {
    const authRole = req.headers.role

    if (!authRole) {
        return response(res, 404, {message:'missing role'})
    }
    if (authRole!=="admin") {
        return response(res, 403, { message:'no access'})
    }
    next()
}

export default AdminCheck