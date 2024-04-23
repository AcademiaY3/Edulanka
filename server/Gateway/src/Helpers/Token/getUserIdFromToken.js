import JWT from 'jsonwebtoken'

export const getUserIdFromToken = (token) => {
    if (!token) {
        return Promise.reject("error: token missing");
    }

    return new Promise((resolve, reject) => {
        try {
            const decode = JWT.verify(token, process.env.SECRET);
            
            if (!decode || !decode.id) {
                reject('Invalid token');
                return;
            }
            resolve(decode.id.toString());
        } catch (err) {
            reject(err.message);
        }
    });
};