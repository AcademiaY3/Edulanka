import Payment from "../../Model/Payment/Payment.js";
import response from "../../Utils/ResponseHandler/ResponseHandler.js";

class PaymentController {
    // Method to add a new payment
    addPayment = async (req, res) => {
        try {
            // Extract data from request body
            const { course_id, order_id, instructor_id, learner_id, amount, course_name, pay_status_message, pay_status_code } = req.body;

            // Create a new payment instance
            const newPayment = new Payment({
                course_id,
                order_id,
                instructor_id,
                learner_id,
                amount,
                course_name,
                pay_status_message,
                pay_status_code,
            });

            // Save the payment to the database
            const savedPayment = await newPayment.save();
            if (savedPayment)
                return response(res, 200, { message: 'Payment added' });
            else
                return response(res, 403, { message: 'Payment adding failed' });
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
