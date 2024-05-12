import * as yup from 'yup';

class PaymentYup {
    addPayment = yup.object({
        order_id: yup.string().required(),
        pay_status_message: yup.string().required(),
        pay_status_code: yup.number().required(),
    });
    approvePayment = yup.object({
        pay_id: yup.string().required(),
        admin_id: yup.string().required(),
    });
}

const paymentYup = new PaymentYup();
export default paymentYup;