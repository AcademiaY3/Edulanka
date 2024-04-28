import Order from "../../Model/Order/Order.js";
import response from "../../Utils/ResponseHandler/ResponseHandler.js";

class OrderController {
    // Method to add a new order
    addOrder = async (req, res) => {
        try {
            // Extract data from request body
            const { course_id, instructor_id, learner_id, price, course_name, delivery_address, delivery_city, delivery_country, zip_code } = req.body;

            // Create a new order instance
            const newOrder = new Order({
                course_id,
                instructor_id,
                learner_id,
                price,
                course_name,
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
