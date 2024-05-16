import express from "express";
const router = express.Router();
import PaymentController from "../../Controller/Payment/PaymentController.js";
import ValidateSchema from "../../Middleware/Schema/ValidateSchema.js";
import PaymentYup from "../../Utils/Validation/Payment/PaymentYup.js";
import AdminCheck from "../../Middleware/Privileges/AdminCheck.js";
import AdminInstCheck from "../../MiddleWare/Privileges/AdminInstCheck.js";

// Route to add a new payment
router.post("/addPayment", AdminCheck, ValidateSchema(PaymentYup.addPayment), PaymentController.addPayment);

// Route to get all payments
router.get("/getAllPayments", PaymentController.getAllPayments);

// Route to get a payment by ID
router.get("/getPayment/:paymentId", PaymentController.getPayment);

// Route to get a payment by instructor ID
router.post("/getInstructorPays", AdminInstCheck ,ValidateSchema(PaymentYup.getInstructorPays),PaymentController.getInstructorPays);

// Route to approve a payment
router.post("/approvePayment", AdminCheck, ValidateSchema(PaymentYup.approvePayment), PaymentController.approvePayment);

export default router;
