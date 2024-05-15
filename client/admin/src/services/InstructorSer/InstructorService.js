import axios from "axios";
import BaseService from "../Base/BaseService";
import LocalStore from "../../Store/LocalStore";

class InstructorService {
    constructor() {
      

        this.baseURL = BaseService.getBaseURL();
        this.ADD_INSTRUCTOR = "service/addInstructor";
        this.UPDATE_INSTRUCTOR = "service/updateInstructor";
        this.GET_ALL_INSTRUCTORS = "service/getAllInstructors";
        this.DELETE_INSTRUCTOR = "service/deleteInstructor";

    }

    addInstructor(input) {
        let data = {
            oid: input,
            approvedBy: LocalStore.getToken().email,
        };
        return axios.post(this.ADD_INSTRUCTOR, data, BaseService.getHeader());
    }
    getAllInstructors() {
        return axios.get(this.GET_ALL_INSTRUCTORS, BaseService.getHeader())
    }

    updateInstructor(id) {
        let data = {
            instructorId: id,
            field: "shipped",
            value:true
        };
        return axios.put(this.UPDATE_INSTRUCTOR, data, BaseService.getHeader());
    }

    deleteInstructor(id) {
        return axios.delete(`${this.baseURL}/${this.DELETE_INSTRUCTOR}/${id}`, BaseService.getHeader());
    }


}

export default InstructorService = new InstructorService();
