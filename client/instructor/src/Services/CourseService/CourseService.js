import axios from "axios";
import BaseService from "../Base/BaseService";
import LocalStore from "../../Config/LocalStore/LocalStore";

class GarbageService {
    constructor() {
        BaseService.getBaseURL();
        this.ADD_COURSE = "course/service/addCourse";
        this.GET_ALL = "course/service/getAllCourses";
    }
    addCourse(input) {
        let data = {
            oid: input,
            approvedBy: LocalStore.getToken().email,
        };
        return axios.post(this.ADD_COURSE, data, BaseService.getHeader());
    }
    getAllCourse() {
        return axios.get(this.GET_ALL, BaseService.getHeader())
    }

    // updateCourse(id) {
    //     let data = {
    //         deliveryId: id,
    //         field: "shipped",
    //         value:true
    //     };
    //     return axios.put(this.UPDATE_COURSE, data, BaseService.getHeader());
    // }
}

export default GarbageService = new GarbageService();