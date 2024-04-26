import Express from "express";
const router = Express.Router();
import AuthController from "../../Controller/Auth/AuthController.js";
import validateScehma from "../../MiddleWare/Schema/ValidateScehma.js";
import AuthYup from '../../Utils/Validation/AuthYup.js'

router.get("/",AuthController.test)
router.post("/register", validateScehma(AuthYup.registerSchema) ,AuthController.signUp)
router.get("/verifyEmail/:token",AuthController.verifyEmail)
router.post("/login", validateScehma(AuthYup.loginSchema), AuthController.signIn)
router.post("/reset-password",validateScehma(AuthYup.passwordReset),AuthController.resetPassword)
// router.post("/verify-reset-password/:token",validateScehma(AuthYup.verifyPasswordReset),AuthController.verifyResetPassword)

export default router