import * as yup from 'yup';

class OrderYup {
    orderSchema = yup.object({
        delivery_address: yup.string().required(),
        delivery_country: yup.string().oneOf(['Sri Lanka', 'India', 'USA', 'Canada', 'Paris', 'Australia', 'Japan', 'Brazil']).required(),
        delivery_city: yup.string().required(),
        zip_code: yup.string().required(),
    });
}

export default new OrderYup();