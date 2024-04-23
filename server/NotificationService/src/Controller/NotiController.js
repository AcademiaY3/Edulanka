import Notification from "../Model/NotiModel.js";
import response from "../Utils/ResponseHandler/ResponseHandler.js";
import ResTypes from "../Utils/Constants/ResTypes.js";
import SmsRegisterTemp from "../Utils/Brokers/Sms/SmsRegisterTemp.js";
import registerEmailTemplate from "../Utils/Brokers/Email/RegisterTemplate.js";
import EmailSender from "../Utils/Brokers/Email/EmailSender.js";
import SmsSender from "../Utils/Brokers/Sms/SmsSender.js";
import RabbitRes from "../Utils/Constants/RabbitRes.js";

class NotiController {
    // test api
    test = async (req, res) => {
        return response(res, 200, ResTypes.successMessages.status)
    }
    sendRegisterNotification = async (user, token, email, telephone) => {
        try {
            const recipientDetails = {
                recipientSms: telephone,
                recipientEmail: email
            }
            const bodyDetails = {
                notiSms: SmsRegisterTemp(token),
                notiEmail: registerEmailTemplate(token)
            };

            const sendRegisterNotification = new Notification({
                user: user,
                recipient: recipientDetails,
                body: bodyDetails,
                noti_for: 'Register Confiramtion'
            })
            const savedNoti = await sendRegisterNotification.save()
            if (!savedNoti) {
                return RabbitRes('error', 403, { message: "Failed to save notification" })
            }
            
            await EmailSender.sendEmail(email, registerEmailTemplate(token), 'Register Email', () => {
            })
            await SmsSender.sendSms(telephone, SmsRegisterTemp(token))
            return RabbitRes('success', 200, { message: 'notification sent successfully' })
        } catch (error) {
            console.log(error)
            return RabbitRes('error', 500, { message: error })
        }
    }
}
export default NotiController = new NotiController