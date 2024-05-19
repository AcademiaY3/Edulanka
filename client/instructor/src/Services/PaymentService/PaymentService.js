import axios from "axios";
import BaseService from "../Base/BaseService";
import LocalStore from "../../Config/LocalStore/LocalStore";

class PaymentService {
    constructor() {
        BaseService.getBaseURL();
        this.GET_ALL_INSTRUCTORS_PAYS = "payment/service/getInstructorPays";
    }
    getAllInstructorsPays() {
        let data = {
            instructor_id:LocalStore.getToken().user._id
        }
        return axios.post(this.GET_ALL_INSTRUCTORS_PAYS,data, BaseService.getHeader())
    }
}

export default PaymentService = new PaymentService();