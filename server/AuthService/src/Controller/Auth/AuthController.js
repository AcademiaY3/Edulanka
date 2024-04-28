import Auth from "../../Model/Auth/Auth.js";
import response from "../../Utils/ResponseHandler/ResponseHandler.js";
import ResTypes from "../../Utils/Constants/ResTypes.js";
import bcrypt from 'bcryptjs'
import SendNoti from "../../Helpers/RabbitMq/SendNoti.js";
import RabbitRes from "../../Utils/Constants/RabbitRes.js";
import generateToken from '../../Helpers/Token/Token.js'
import successEmailTemplate from "../../Utils/Constants/SuccessRegister.js";
import { notiType } from "../../Utils/Constants/NotificationType.js";

class AuthController {
    // test api
    test = async (req, res) => {
        return response(res, 200, ResTypes.successMessages.status)
    }
    // chaeck for existing users in auth
    getAuth = async (id) => {
        try {
            const user = await Auth.findOne({ _id: id })
            if (!user) {
                return RabbitRes('error', 404, { authenticated: false, message: "no user found" })
            } else {
                return RabbitRes('success', 200, { authenticated: true, user })
            }
        } catch (error) {
            console.log(error)
            return RabbitRes('error', 500, { authenticated: false, message: error })
        }
    }
    //create SignUp
    signUp = async (req, res) => {
        const { name, email, password, telephone, role } = req.body;
        try {
            const existing = await Auth.findOne({ email })
            if (existing) return response(res, 403, { message: "user exists" })

            const hashedPassword = await bcrypt.hash(password, 10);

            const token = Math.random().toString(36).slice(-8)
            const verifyRegisterToken = token
            const registerExpire = Date.now() + 360000

            const user = new Auth({ name, email, password: hashedPassword, role, telephone, verifyRegisterToken, registerExpire })
            // Send notification
            const notiResponse = await SendNoti(user._id, token, user.email, user.telephone, notiType.register);
            // Handle notification response
            if (notiResponse && notiResponse.sent_status === 'success') {
                // Save the user
                const savedUser = await user.save();
                if (!savedUser) {
                    return response(res, 403, { message: 'Error creating user' });
                } else {
                    return response(res, 200, { message: 'User created successfully' });
                }
            } else {
                return response(res, 403, { message: 'Failed to send notification', user });
            }
        } catch (error) {
            console.log(error)
            return response(res, 500, error)
        }
    }
    //email verify endpoint
    verifyEmail = async (req, res) => {

        const { token } = req.params
        let user = await Auth.findOne({ verifyRegisterToken: token })
        if (!user) return response(res, 403, ResTypes.errors.invalid_token);
        if (new Date(user.registerExpire) < new Date()) return response(res, 403, ResTypes.errors.cancelled_token)

        const result = await Auth.updateOne(
            { verifyRegisterToken: token },
            { $set: { isVerfied: true, verifyRegisterToken: "verified", registerExpire: "" } }
        )
        if (result.modifiedCount === 0) {
            return response(res, 403, { message: 'Not verified' })
        }
        return res.status(201).send(successEmailTemplate())
    }
    //create SignIn
    signIn = async (req, res) => {
        const { email, password, role } = req.body;

        try {
            const user = await Auth.findOne({ email, role })
            if (!user) {
                return response(res, 404, { message: 'no user found' });
            }
            const isVerified = user.isVerfied
            if (!isVerified) return response(res, 403, { message: 'user email not verified' })
            const isMatch = await bcrypt.compare(password, user.password);
            if (!isMatch) {
                return response(res, 403, { message: 'incorret password' })
            }
            const token = generateToken(user)
            return response(res, 200, { user,token, message: 'Login Successfull' })
        } catch (error) {
            return response(res, 500, error)
        }
    }
    // create reset-password
    resetPassword = async (req, res) => {
        const { email } = req.body;
        try {
            const user = await Auth.findOne({ email })
            if (!user) {
                return response(res, 403, { message: 'no user exists' })
            }
            const token = Math.random().toString(36).slice(-8)
            const expireDate = Date.now() + 360000
            // Send notification
            const notiResponse = await SendNoti(user._id, token, user.email, user.telephone, notiType.resetPassword);
            // Handle notification response
            if (notiResponse && notiResponse.sent_status === 'success') {
                const result = await Auth.updateOne(
                    { email },
                    { $set: { resetPasswordToken: token, resetPasswordExpire: expireDate } }
                )
                if (!result) {
                    return response(res, 500, { message: 'failed verification generation' })
                }
                return response(res, 200, { message: 'verification successfully sent' });
            } else {
                return response(res, 403, { message: 'Failed to send notification', user });
            }
        } catch (error) {
            console.log(error)
            return response(res, 500, { message: error })
        }
    }
    // verify reset-password with token
    verifyResetPassword = async (req, res) => {
        const { token } = req.params
        const { password } = req.body
        try {
            if (!token) return response(res, 404, ResTypes.errors.missing_token)

            const user = await Auth.findOne({ resetPasswordToken: token })
            if (!user) return response(res, 404, ResTypes.errors.invalid_token)

            const tokenExpire = await Auth.findOne({ resetPasswordExpire: { $gt: Date.now() } })
            if (!tokenExpire) return response(res, 404, ResTypes.errors.token_expired)

            const hashedPasswod = await bcrypt.hash(password, 10)
            const result = await Auth.updateOne(
                { resetPasswordToken: token },
                { $set: { resetPasswordToken: "", resetPasswordExpire: "", password: hashedPasswod } }
            )
            if (result.modifiedCount === 0) {
                return response(res, 500, {message:'failed token generation'})
            }
            return response(res, 201, {message:'password reset successfull'})
        } catch (error) {
            return response(res, 500, { message: error })
        }
    }
}

export default AuthController = new AuthController