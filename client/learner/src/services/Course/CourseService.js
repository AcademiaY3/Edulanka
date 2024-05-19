import axios from "axios";
import BaseService from "../Base/BaseService";

class CourseService{
    constructor(){
        BaseService.getBaseURL()
        this.GET_COURSE = "course/service/getCourse"
        this.GET_ALL = "course/service/getAllCourses"
    }
    getAllCourses() {
        return axios.get(this.GET_ALL,BaseService.getHeader())
    }
    getCourse(input) {
        let data = {
            courseId : input
        }
        return axios.post(this.GET_COURSE,data)
    }
    getCourseyById(courseId) {
        return axios.get(`${this.GET_COURSE}/${courseId}`, BaseService.getHeader());
    }
}
export default CourseService = new CourseService();