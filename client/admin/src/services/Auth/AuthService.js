// import axios from "axios";
// import BaseService from "../Base/BaseService";

// class AuthService{
//     constructor(){
//         BaseService.getBaseURL()
//         // this.REGISTER_URL = "auth/register"
//         this.LOGIN_URL = "auth/service/login"
//     }
//     // authRegister(input) {
//     //     let data = {
//     //         email : input.email,
//     //         password:input.password,
//     //         role:'admin',
//     //         name:input.username
//     //     }
//     //     return axios.post(this.REGISTER_URL,data)
//     // }
//     authLogin(input) {
//         let data = {
//             email : input.email,
//             password: input.password, 
//             role:'admin'
//         }
//         return axios.post(this.LOGIN_URL,data)
//     }
// }
// export default AuthService = new AuthService();


import axios from "axios";
import BaseService from "../Base/BaseService";

class AuthService {
    constructor() {
        BaseService.getBaseURL()
        this.LOGIN_URL = "auth/service/login"
    }

    authLogin(input) {
        let data = {
            email: input.email,
            password: input.password,
            role: 'admin'
        }
        return axios.post(this.LOGIN_URL, data)
    }
}

// Ensure the default export is the instance of AuthService
export default AuthService = new AuthService();
