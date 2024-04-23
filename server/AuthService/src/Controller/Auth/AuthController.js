import Auth from "../../Model/Auth/Auth.js";
import response from "../../Utils/ResponseHandler/ResponseHandler.js";
import ResTypes from "../../Utils/Constants/ResTypes.js";
import bcrypt from 'bcryptjs'
import SendNoti from "../../Helpers/RabbitMq/SendNoti.js";
import RabbitRes from "../../Utils/Constants/RabbitRes.js";

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
                RabbitRes('error', 404, { authenticated: false, message: "no user found" })
            } else {
                RabbitRes('success', 404, { authenticated: true, user })
            }
            return RabbitRes
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
            if (existing) return response(res, 403,{message:"user exists"})

            const hashedPassword = await bcrypt.hash(password, 10);

            const token = Math.random().toString(36).slice(-8)
            const verifyRegisterToken = token
            const registerExpire = Date.now() + 360000

            const user = new Auth({ name, email, password: hashedPassword, role, telephone, verifyRegisterToken, registerExpire })
            //send the mail , when sending also sent the whole user object
            const savedUser = await user.save()
            if (!savedUser)
                return response(res, 403, { message: 'error creating user' })
            else if (savedUser) {
                // Send notification
                const notiResponse = await SendNoti(savedUser._id, token,savedUser.email,savedUser.telephone);
                // Handle notification response
                if (notiResponse && notiResponse.sent_status === 'success') {
                    return response(res, 200, { message: 'User created successfully' });
                } else {
                    return response(res, 403, { message: 'Failed to send notification',user });
                }
            }
        } catch (error) {
            console.log(error)
            return response(res, 500, error)
        }
    }
    //email verify endpoint
    // verifyEmail = async (req, res) => {

    //     const { token } = req.params
    //     let user = await Auth.findOne({ verifyRegisterToken: token })
    //     if (!user) return response(res, 403, ResTypes.errors.invalid_token);
    //     if (new Date(user.registerExpire) < new Date()) return response(res, 403, ResTypes.errors.cancelled_token)

    //     const result = await Auth.updateOne(
    //         { verifyRegisterToken: token },
    //         { $set: { isVerfied: true, verifyRegisterToken: "verified", registerExpire: "" } }
    //     )
    //     if (result) {
    //         return res.status(201).send(successEmailTemplate())
    //     } else {
    //         return response(res, 403, ResTypes.errors.unverified_user)
    //     }
    // }
    //create SignIn
    // signIn = async (req, res) => {
    //     const { email, password, role } = req.body;

    //     try {
    //         const user = await Auth.findOne({ email, role })
    //         if (!user) {
    //             return response(res, 404, ResTypes.errors.no_user);
    //         }
    //         const isVerified = user.isVerfied
    //         if (!isVerified) return response(res, 403, ResTypes.errors.not_verified)
    //         const isMatch = await bcrypt.compare(password, user.password);
    //         if (!isMatch) {
    //             return response(res, 403, ResTypes.errors.invalid_password)
    //         }
    //         const token = generateToken(user)
    //         return response(res, 200, { token, role, ...ResTypes.successMessages.login_successful })
    //     } catch (error) {
    //         return response(res, 500, error)
    //     }
    // }
    // create reset-password
    // resetPassword = async (req, res) => {
    //     const { email } = req.body;
    //     try {
    //         const user = await Auth.findOne({ email })
    //         if (!user) {
    //             return response(res, 403, ResTypes.errors.user_exists)
    //         }
    //         const token = Math.random().toString(36).slice(-8)
    //         const expireDate = Date.now() + 360000
    //         EmailSender.sendVerificationEmail(user, token, passwordReset(token), "Password Reset", async () => {
    //             const result = await Auth.updateOne(
    //                 { email },
    //                 { $set: { resetPasswordToken: token, resetPasswordExpire: expireDate } }
    //             )
    //             if (!result) {
    //                 return response(res, 500, ResTypes.errors.failed_operation)
    //             }
    //         }, res)
    //     } catch (error) {
    //         console.log(error)
    //         return response(res, 500, { message: error })
    //     }
    // }
    // verify reset-password with token
    // verifyResetPassword = async (req, res) => {
    //     const { token } = req.params
    //     const { password } = req.body
    //     try {
    //         if (!token) return response(res, 404, ResTypes.errors.missing_token)

    //         const user = await Auth.findOne({ resetPasswordToken: token })
    //         if (!user) return response(res, 404, ResTypes.errors.invalid_token)

    //         const tokenExpire = await Auth.findOne({ resetPasswordExpire: { $gt: Date.now() } })
    //         if (!tokenExpire) return response(res, 404, ResTypes.errors.token_expired)

    //         const hashedPasswod = await bcrypt.hash(password, 10)
    //         const result = await Auth.updateOne(
    //             { resetPasswordToken: token },
    //             { $set: { resetPasswordToken: "", resetPasswordExpire: "", password: hashedPasswod } }
    //         )
    //         if (result.modifiedCount === 0) {
    //             return response(res, 500, ResTypes.errors.failed_operation)
    //         }
    //         return response(res, 201, ResTypes.successMessages.password_reseted)
    //     } catch (error) {
    //         return response(res, 500, { message: error })
    //     }
    // }
}

export default AuthController = new AuthController