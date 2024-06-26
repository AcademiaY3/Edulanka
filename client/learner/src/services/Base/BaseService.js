import axios from "axios";
import LocalStore from "../../store/LocalStore";

class BaseService{
    constructor() {
        axios.defaults.baseURL = "http://localhost:8500/api/v1/"
    }
    getHeader() {
        return {
            headers: {
                Authorization: `Bearer ${LocalStore.getToken().token}`,
                role:'learner'
            }
        }
    }
    getBaseURL() {
        return this.baseURL;
    }
}
export default BaseService = new BaseService()