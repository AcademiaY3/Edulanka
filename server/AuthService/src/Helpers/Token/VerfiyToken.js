import Jwt from "jsonwebtoken";
import Auth from "../../Model/Auth/Auth.js";


const VerifyToken = (token) => {
    if (!token) {
        return Promise.reject("error: token missing");
    }
    return new Promise(async (resolve, reject) => {
        try {
            const decode = Jwt.verify(token, process.env.SECRET);
            const userId = await Auth.findOne({ _id: decode.id });

            if (!userId) {
                reject('no user found' );
            }
            resolve(userId._id.toString());
        } catch (err) {
            reject(err.message);
        }
    });
};

export default VerifyToken;