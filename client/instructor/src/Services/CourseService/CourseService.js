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
        console.log(input.lectures.video)
        let data = {
            approvedBy: LocalStore.getToken().email,
            name: input.name,
            title: input.title,
            price: input.price,
            certificate: input.certificate,
            category: input.category,
            hours: input.hours,
            skills: input.skills,
            language: input.language,
            tag: input.tag,
            outline: input.outline,
            thumbnail: input.thumbnail,
            added_by: LocalStore.getToken().user._id,
            instructor: LocalStore.getToken().user._id,
            description: input.description,
            lectures: input.lectures
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