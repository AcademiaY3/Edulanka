import Jwt from "jsonwebtoken";
import Auth from "../../Model/Auth.js";
import response from "../../Utils/Response/ResponseHandler.js";
import ResTypes from "../../Utils/Response/ResTypes.js";

const validateToken = (token) => {
    const authHeader = req.headers.authorization;
    // console.log(authHeader)
    if (!authHeader) {
        return response(res, 401, ResTypes.errors.missing_token)
    }
    const token = authHeader.split(" ")[1];
    Jwt.verify(token, process.env.SECRET, async (err, decode) => {
        if (err) {
            return response(res, 401, err)
        }
        const user = await Auth.findOne({ _id: decode.id })
        if (!user) {
            return response(res, 401, ResTypes.errors.no_user)
        }
        req.user = user
        next();
    })
}
export default validateToken