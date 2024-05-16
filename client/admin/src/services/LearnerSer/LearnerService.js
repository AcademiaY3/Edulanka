import axios from "axios";
import BaseService from "../Base/BaseService";
import LocalStore from "../../Store/LocalStore";

class LearnerService {
    constructor() {
        this.baseURL = BaseService.getBaseURL();
        this.ADD_LEARNER = "service/addLearner";
        this.UPDATE_LEARNER = "service/updateLearner";
        this.GET_ALL_LEARNERS = "service/getAllLearners";
        this.DELETE_LEARNER = "service/deleteLearner";
        this.GET_LEARNER = "service/getLearner";
   
    }

    addLearner(input) {
        let data = {
            oid: input,
            approvedBy: LocalStore.getToken().email,
        };
        return axios.post(this.ADD_LEARNER, data, BaseService.getHeader());
    }
    getAllLearners() {
        return axios.get(this.GET_ALL_LEARNERS, BaseService.getHeader())
    }

    updateLearner(id) {
        let data = {
            learnerId: id,
            field: "shipped",
            value:true
        };
        return axios.put(this.UPDATE_LEARNER, data, BaseService.getHeader());
    }

    deleteLearner(id) {
        return axios.delete(`${this.baseURL}/${this.DELETE_LEARNER}/${id}`, BaseService.getHeader());
    }

    getLearner(input) {
        let data = {
            pid : input
        }
        return axios.post(this.GET_LEARNER,data)
    }

}

export default LearnerService = new LearnerService();
