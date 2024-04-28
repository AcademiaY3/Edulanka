import HttpType from "./HttpTypes.js";

const RabbitRes = (status,code, data) => {
    const httpStatus = HttpType.getStatus(code)
    const payLoad = {
        sent_status:status,
        code,
        httpStatus,
        data
    }
    return payLoad;
}
export default RabbitRes