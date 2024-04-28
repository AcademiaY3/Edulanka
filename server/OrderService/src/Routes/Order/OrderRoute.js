import express from "express";
const router = express.Router();
import OrderController from "../../Controller/Order/OrderController.js";
import ValidateSchema from "../../Middleware/Schema/ValidateSchema.js";
import OrderYup from "../../Utils/Validation/Order/OrderYup.js";
import AdminInstructorCheck from "../../MiddleWare/Privileges/AdminInstructor.js";

// Route to add a new order
router.post("/addOrder", AdminInstructorCheck, ValidateSchema(OrderYup.addOrder), OrderController.addOrder);

// Route to get all orders
router.get("/getAllOrders", AdminInstructorCheck, OrderController.getAllOrders);

// Route to get an order by ID
router.get("/getOrder/:orderId", AdminInstructorCheck, OrderController.getOrder);

// Route to delete an order by ID
router.post("/deleteOrder", AdminInstructorCheck, ValidateSchema(OrderYup.deleteOrder), OrderController.deleteOrder);

// Route to update an order by ID
router.put("/updateOrder/:orderId", AdminInstructorCheck, ValidateSchema(OrderYup.updateOrder), OrderController.updateOrder);

export default router;
