import axios from "axios";
import BaseService from "../Base/BaseService";

class AuthService {
  constructor() {
    BaseService.getBaseURL()
    this.REGISTER_URL = "auth/service/register"
    this.LOGIN_URL = "auth/service/login"
  }
  authRegister(input) {
    let data = {
      email: input.email,
      password: input.password,
      role: 'instructor',
      name: input.username
    }
    return axios.post(this.REGISTER_URL, data)
  }
  authLogin(input) {
    let data = {
      email: input.email,
      password: input.password,
      role: input.role
    }
    return axios.post(this.LOGIN_URL, data)
  }
}
export default AuthService = new AuthService();