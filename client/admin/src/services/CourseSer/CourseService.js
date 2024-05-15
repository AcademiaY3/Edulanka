import axios from "axios";
import BaseService from "../Base/BaseService";
import LocalStore from "../../Store/LocalStore";

class CourseService {
    constructor() {
        
        this.baseURL = BaseService.getBaseURL();
        this.ADD_COURSE = "service/addCourse";
        this.UPDATE_COURSE = "service/updateCourse";
        this.GET_ALL_COURSES = "service/getAllCourses";
        this.DELETE_COURSE = "service/deleteCourse";
   
    }

    addCourse(input) {
        let data = {
            oid: input,
            approvedBy: LocalStore.getToken().email,
        };
        return axios.post(this.ADD_COURSE, data, BaseService.getHeader());
    }
    getAllCourses() {
        return axios.get(this.GET_ALL_COURSES, BaseService.getHeader())
    }

    updateCourse(id) {
        let data = {
            courseId: id,
            field: "shipped",
            value:true
        };
        return axios.put(this.UPDATE_COURSE, data, BaseService.getHeader());
    }

  deleteCourse(id) {
        return axios.delete(`${this.baseURL}/${this.DELETE_COURSE}/${id}`, BaseService.getHeader());
    }


    

}

export default CourseService = new CourseService();
