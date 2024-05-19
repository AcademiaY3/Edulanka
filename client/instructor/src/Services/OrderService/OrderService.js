import axios from "axios";
import BaseService from "../Base/BaseService";
import LocalStore from "../../Config/LocalStore/LocalStore";

class OrderService {
    constructor() {
        BaseService.getBaseURL();
        this.GET_ALL_INSTRUCTORS_Orders = "order/service/getInstructorOrders";
    }

    getAllInstructorsOrders() {
        let data = {
            instructor_id:LocalStore.getToken().user._id
        }
        return axios.post(this.GET_ALL_INSTRUCTORS_Orders,data, BaseService.getHeader())
    }

    
}

export default OrderService = new OrderService();