import response from "../../Utils/ResponseHandler/ResponseHandler.js"
import SendToken from "./SendToken.js"
import ResTypes from '../../Utils/Constants/ResTypes.js'
const TokenWare = async (req, res, next) => {
    try {
        const authHeader = req.headers.authorization
        const token = authHeader.split(" ")[1]

        const validateResponse = await SendToken(token)
        if (validateResponse.data.authenticated) {
            next()
        }
        else if (!validateResponse.data.authenticated) {
            return response(res, 403, { error: validateResponse.data.message })
        }
    } catch (error) {
        return response(res, 403, {error})
    }
}
export default TokenWare