import axios from "axios";
import BaseService from "../Base/BaseService";

class CourseService{
    constructor(){
        BaseService.getBaseURL()
        this.GET_COURSE = "service/getCourse"
        this.GET_ALL = "service/getAllCourses"
    }
    getAllCourses() {
        return axios.get(this.GET_ALL)
    }
    getCourse(input) {
        let data = {
            courseId : input
        }
        return axios.post(this.GET_COURSE,data)
    }
}
export default CourseService = new CourseService();