import response from "../../Utils/ResponseHandler/ResponseHandler.js"
const InstructorCheck = (req, res, next) => {
    const authRole = req.headers.role

    if (!authRole) {
        return response(res, 404, {message:'missing role'})
    }
    if (authRole!=="instructor") {
        return response(res, 403, { message:'no access'})
    }
    next()
}

export default InstructorCheck