import GetCourse from "../../Helpers/Course/GetCourse.js";
import Order from "../../Model/Order/Order.js";
import response from "../../Utils/ResponseHandler/ResponseHandler.js";
import RabbitRes from "../../Utils/Constants/RabbitRes.js";

class OrderController {
    //update the pay_status_by res
    updatePayStatusByRabbit = async (oid, pay_status) => {
        try {
            const order = await Order.findOne({ _id: oid })
            if (!order) {
                return RabbitRes('error', 404, { isPayRes: false, message: "no order found" })
            }
            if (pay_status != true && pay_status != false) {
                return RabbitRes('error', 403, { isPayRes: false, message: "not a valid pay status"  })
            }
            const updatedOrder = await Order.updateOne(
                { _id: order._id },
                { $set: { pay_status: pay_status } }
            )
            if (updatedOrder.modifiedCount === 0)
                return RabbitRes('error', 403, { isPayRes: false, message: "status updation failed" })
            
            return RabbitRes('success', 200, { isPayRes: true, message: "status updated",order })
        } catch (error) {
            console.log(error)
            return RabbitRes('error', 500, { isPayRes: false, message: error })
        }
    }

    // Method to add a new order
    addOrder = async (req, res) => {
        try {
            // Extract data from request body
            const { course_id, instructor_id, learner_id, delivery_address, delivery_city, delivery_country, zip_code } = req.body;

            //send to course for verify course
            const courseByService = await GetCourse(course_id)
            if (courseByService && courseByService.sent_status === 'success') {
                //save the order
                // Create a new order instance
                const newOrder = new Order({
                    orderId:id,
                    delivery_address,
                    delivery_city,
                    delivery_country,
                    zip_code
                });

                // Save the order to the database
                const savedOrder = await newOrder.save();
                if (savedOrder)
                    return response(res, 200, { message: 'Order added' });
                else
                    return response(res, 403, { message: 'Order adding failed' });
            } else {
                return response(res, 403, { message: 'not a valid course' });
            }
        } catch (error) {
            console.log(error);
            return response(res, 500, { error: error.message });
        }
    }

    // Method to get an order by ID
    getOrder = async (req, res) => {
        const { orderId } = req.params;
        try {
            const order = await Order.findById(orderId);
            if (!order) return response(res, 404, { message: 'Order not found' });
            return response(res, 200, order);
        } catch (error) {
            console.log(error);
            return response(res, 500, { error: error.message });
        }
    }

    // Method to get all orders
    getAllOrders = async (req, res) => {
        try {
            const orders = await Order.find({});
            if (!orders)
                return response(res, 404, { message: 'Orders not found' });

            const allOrders = await Order.countDocuments({});
            const deletedOrders = await Order.countDocuments({ deleted: true });
            const notDeleted = await Order.countDocuments({ deleted: false });
            // Calculate the total price amount of all orders
            let totalAmount = 0;
            orders.forEach(order => {
                totalAmount += order.price;
            });

            return response(res, 200, {
                orders,
                allOrders,
                deletedOrders,
                notDeleted,
                totalAmount
            });
        } catch (error) {
            console.log(error);
            return response(res, 500, { error: error.message });
        }
    }

    // Method to delete an order by ID
    deleteOrder = async (req, res) => {
        const { orderId, admin_id } = req.body;
        try {
            // Delete the order
            const order = await Order.findById(orderId);
            if (!order)
                return response(res, 404, { message: 'Order deletion error not found' });

            const deletedOrder = await Order.updateOne(
                { _id: orderId },
                { $set: { deleted: true, deleted_by: admin_id } }
            )
            if (!deletedOrder.modifiedCount !== 0)
                return response(res, 200, { message: 'Order deleted successfully' });
            else
                return response(res, 403, { message: 'Order deletion error' });
        } catch (error) {
            console.log(error);
            return response(res, 500, { error: error.message });
        }
    }

    // Method to update an order by ID
    updateOrder = async (req, res) => {
        const { orderId } = req.params;
        const updateData = req.body;
        try {
            const updatedOrder = await Order.findByIdAndUpdate(orderId, updateData, { new: true });
            if (!updatedOrder) return response(res, 404, { message: 'Order not found' });
            return response(res, 200, updatedOrder);
        } catch (error) {
            console.log(error);
            return response(res, 500, { error: error.message });
        }
    }
}

export default OrderController = new OrderController();
