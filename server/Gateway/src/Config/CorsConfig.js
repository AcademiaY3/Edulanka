const whiteList = [
    "http://localhost:3000",
    "http://localhost:5173",
    "http://localhost:5174"
];

const corsOption = {
    origin: (origin, callback) => {
        if (whiteList.indexOf(origin) !== -1 || !origin) {
            callback(null, true);
        } else {
            callback(new Error("Not Allowed By CORS"));
        }
    },
    optionalSuccessStatus: 200,
};

export default corsOption;