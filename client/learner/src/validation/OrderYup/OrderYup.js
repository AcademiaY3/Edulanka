import * as yup from 'yup';

class OrderYup {
    orderSchema = yup.object({
        price: yup.number().required(),
        course_name: yup.string().required(),
        pay_status: yup.string(),
        delivery_address: yup.string().required(),
        delivery_country: yup.string().oneOf(['Sri Lanka', 'India', 'USA', 'Canada', 'Paris', 'Australia', 'Japan', 'Brazil']).required(),
        delivery_city: yup.string().required(),
        zip_code: yup.string().required(),
    });
}

export default new OrderYup();