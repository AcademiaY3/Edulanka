import Auth from "../../Model/Auth/Auth.js";
import response from "../../Utils/ResponseHandler/ResponseHandler.js";
import ResTypes from "../../Utils/Constants/ResTypes.js";

class UserController {
    // test api
    test = async (req, res) => {
        return response(res, 200, {message:'onlnie user route'})
    }
    // chaeck for existing users in auth
    getLearnerListById = async (req, res) => {
        const { learner_id, role } = req.body;
        try {
            // Use find method to get all learners with specific IDs
            const learners = await Auth.find({ _id: { $in: learner_id } ,role: role});
            if (!learners || learners.length === 0) {
                return response(res, 404, { message: 'No learners found with the specified IDs' });
            } else {
                const total = learners.length;
                return response(res, 200, { total,learners });
            }
        } catch (error) {
            console.log(error)
            return response(res, 403, { message: error.message });
        }
    }
}

export default UserController = new UserController