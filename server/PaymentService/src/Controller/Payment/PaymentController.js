import Payment from "../../Model/Payment/Payment.js";
import response from "../../Utils/ResponseHandler/ResponseHandler.js";
import SendPayStatus from "../../Helper/RabbitMq/SendPayStatus.js";

class PaymentController {
    // Method to add a new payment
    addPayment = async (req, res) => {
        try {
            // Extract data from request body
            const { order_id, pay_status_message, pay_status_code } = req.body;

            var pay_status_boolean = false
            if (pay_status_code == 2) {
                pay_status_boolean = true
            }

            //send to course for verify course
            const payStatusByOrder = await SendPayStatus(order_id, pay_status_boolean)
            if (payStatusByOrder && payStatusByOrder.sent_status === 'success') {
                // Create a new payment instance
                const newPayment = new Payment({
                    course_id: payStatusByOrder.data.order.course_id,
                    order_id: payStatusByOrder.data.order._id,
                    instructor_id: payStatusByOrder.data.order.instructor_id,
                    learner_id: payStatusByOrder.data.order.learner_id,
                    amount: payStatusByOrder.data.order.price,
                    course_name: payStatusByOrder.data.order.course_name,
                    pay_status_message,
                    pay_status_code,
                });

                // Save the payment to the database
                const savedPayment = await newPayment.save();
                if (savedPayment)
                    return response(res, 200, { message: 'Payment added' });
                else
                    return response(res, 403, { message: 'Payment adding failed' });
            } else {
                return response(res, 403, { message: 'not a valid order' });
            }
        } catch (error) {
            console.log(error);
            return response(res, 500, { error: error.message });
        }
    }

    // Method to get all payments
    getAllPayments = async (req, res) => {
        try {
            const payments = await Payment.find({});
            if (!payments)
                return response(res, 404, { message: 'Payments not found' });

            const allPayments = await Payment.countDocuments({});
            const approvedPayments = await Payment.countDocuments({ approved: true });
            const pendingPayments = await Payment.countDocuments({ approved: false });

            let totalAmount = 0;
            payments.forEach(payment => {
                totalAmount += payment.amount;
            });

            return response(res, 200, { payments, allPayments, approvedPayments, pendingPayments, totalAmount });
        } catch (error) {
            console.log(error);
            return response(res, 500, { error: error.message });
        }
    }

    // Method to get a payment by ID
    getPayment = async (req, res) => {
        const { paymentId } = req.params;
        try {
            const payment = await Payment.findById(paymentId);
            if (!payment)
                return response(res, 404, { message: 'Payment not found' });
            return response(res, 200, payment);
        } catch (error) {
            console.log(error);
            return response(res, 500, { error: error.message });
        }
    }

    // Method to get payments by instructor ID
    getInstructorPays = async (req, res) => {
        const { instructor_id } = req.body;
        console.log(instructor_id)
        try {
            const payments = await Payment.find({ instructor_id });
            if (payments.length === 0)
                return response(res, 404, { message: 'Payments not found' });

            // Calculate total pay amount, payment approved, and rejected counts
            const total = payments.length;
            const total_amount = payments.reduce((acc, payment) => acc + payment.amount, 0);
            const approved_payments = payments.filter(payment => payment.approved).length;
            const pending_payments = payments.filter(payment => !payment.approved).length;

            return response(res, 200, { total, payments,total_amount,approved_payments,pending_payments });
        } catch (error) {
            console.log(error);
            return response(res, 500, { error: error.message });
        }
    }

    // Method to update a payment by ID
    approvePayment = async (req, res) => {
        const { pay_id, admin_id } = req.body;
        try {
            const payment = await Payment.findById({ _id: pay_id });
            if (!payment)
                return response(res, 404, { message: 'Payment not found' });
            const updatedPayment = await Payment.updateOne(
                { _id: pay_id },
                { $set: { approved: true, approved_by: admin_id } }
            )
            if (updatedPayment.modifiedCount !== 0)
                return response(res, 200, { message: 'Payment approved successfully' });
            else
                return response(res, 403, { message: 'Payment approval failed' });
        } catch (error) {
            console.log(error);
            return response(res, 500, { error: error.message });
        }
    }
}

export default PaymentController = new PaymentController();
