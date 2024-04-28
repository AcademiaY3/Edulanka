import * as yup from 'yup';

class OrderYup {
    addOrder = yup.object({
        course_id: yup.string().required(),
        instructor_id: yup.string().required(),
        learner_id: yup.string().required(),
        price: yup.number().required(),
        course_name: yup.string().required(),
        // pay_status: yup.boolean().required(),
        delivery_address: yup.string().required(),
        delivery_city: yup.string().required(),
        delivery_country: yup.string().required(),
        zip_code: yup.string().required(),
    });

    updateOrder = yup.object({
        course_id: yup.string().required(),
        instructor_id: yup.string().required(),
        learner_id: yup.string().required(),
        price: yup.number().required(),
        course_name: yup.string().required(),
        pay_status: yup.boolean().required(),
        delivery_address: yup.string().required(),
        delivery_city: yup.string().required(),
        delivery_country: yup.string().required(),
        zip_code: yup.string().required(),
        approved: yup.boolean().required(),
        approved_by: yup.string().required(),
    });

    getOrderById = yup.object({
        orderId: yup.string().required(),
        admin_id: yup.string().required(),
    });

    deleteOrder = yup.object({
        orderId: yup.string().required(),
    });
}

const orderYup = new OrderYup();
export default orderYup;
