import axios from "axios";
import BaseService from "../Base/BaseService";

class OrderService {
    constructor() {
        BaseService.getBaseURL()
        this.GET_order = "order/service/getOrder"
        this.GET_ALL = "order/service/getAllOrders"
        this.ADD_ORDER = "order/service/addOrder"
        this.DELETE_ORDER="order/service/deleteOrder"
    }
    getAllOrders() {
        return axios.get(this.GET_ALL)
    }
    getOrder(input) {
        let data = {
            orderId: input.orderId,
        }
        return axios.post(this.GET_order, data)
    }
    addOrder(input) {
        let data = {
            course_id:input.course_id,
            instructor_id:input.instructor_id,
            learner_id:input.learner_id,
            delivery_address: input.delivery_address,
            delivery_country: input.delivery_country,
            delivery_city: input.delivery_city,
            zip_code: input.zip_code,
            
        };
        return axios.post(this.ADD_ORDER, data,BaseService.getHeader())
    }
    deleteOrder(input) {
        let data = {
            orderId: input,
            admin_id: input
        };
        return axios.delete(this.DELETE_ORDER, { ...BaseService.getHeader(), data: data });
    }
}
export default OrderService = new OrderService();
