import response from "../../Utils/ResponseHandler/ResponseHandler.js"
import SendToken from "./SendToken.js"
import { getUserIdFromToken } from "../../Helpers/Token/getUserIdFromToken.js"

const TokenWare = async (req, res, next) => {
    try {
        const authHeader = req.headers.authorization
        const token = authHeader.split(" ")[1]

        try {
            const userId = await getUserIdFromToken(token)
            const validateResponse = await SendToken(userId)
            if (validateResponse.data.authenticated) {
                next()
            }
            else if (!validateResponse.data.authenticated) {
                return response(res, 403, { error: validateResponse.data.message })
            }
        } catch (error) {
            console.log(error)
            return response(res, 500, { error: error })
        }
    } catch (error) {
        return response(res, 403, { error })
    }
}
export default TokenWare