import axios from "axios";
import BaseService from "../Base/BaseService";
import LocalStore from "../../Store/LocalStore";

class StaffService {
    constructor() {

        this.baseURL = BaseService.getBaseURL();
        this.ADD_STAFF = "service/addStaff";
        this.UPDATE_STAFF = "service/updateStaff";
        this.GET_ALL_STAFFS = "service/getAllStaffs";
        this.DELETE_STAFF = "service/deleteStaff";

    }

    addStaff(input) {
        let data = {
            oid: input,
            approvedBy: LocalStore.getToken().email,
        };
        return axios.post(this.ADD_STAFF, data, BaseService.getHeader());
    }
    getAllStaffs() {
        return axios.get(this.GET_ALL_STAFFS, BaseService.getHeader())
    }

    updateStaff(id) {
        let data = {
            staffId: id,
            field: "shipped",
            value:true
        };
        return axios.put(this.UPDATE_STAFF, data, BaseService.getHeader());
    }

    deleteStaff(id) {
        return axios.delete(`${this.baseURL}/${this.DELETE_STAFF}/${id}`, BaseService.getHeader());
    }


}

export default StaffService = new StaffService();
