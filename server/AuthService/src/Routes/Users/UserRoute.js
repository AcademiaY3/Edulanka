import Express from "express";
const router = Express.Router();
import UserController from "../../Controller/User/UserController.js";
import validateScehma from "../../MiddleWare/Schema/ValidateScehma.js";
import UserYup from "../../Utils/Validation/UserYup.js";
import AdminInstCheck from '../../MiddleWare/Privileges/AdminInstCheck.js'

router.get("/",UserController.test)
router.post("/get_learners", AdminInstCheck ,validateScehma(UserYup.getAllLearners), UserController.getLearnerListById)
router.post("/getLearnerById", AdminInstCheck ,validateScehma(UserYup.getLearnerById), UserController.getLearnerById)

export default router