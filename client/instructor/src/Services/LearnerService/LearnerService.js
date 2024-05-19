import axios from "axios";
import BaseService from "../Base/BaseService";
import LocalStore from "../../Config/LocalStore/LocalStore";

class LearnerService {
    constructor() {
        BaseService.getBaseURL();
        this.GET_ALL_INSTRUCTORS_LEARNERS = "course/service/getAllInstructorsLearners";
        this.GET_LEARNER = "auth/service/get_learners";
    }
    getAllInstructorsLearners() {
        let data = {
            instructor:LocalStore.getToken().user._id
        }
        return axios.post(this.GET_ALL_INSTRUCTORS_LEARNERS,data, BaseService.getHeader())
    }
    getLearnerListById(id) {
        let data = {
            learner_id: id,
            role: 'learner'
        }
        return axios.post(this.GET_LEARNER,data, BaseService.getHeader())
    }
}

export default LearnerService = new LearnerService();