import Notification from "../Model/NotiModel.js";
import response from "../Utils/ResponseHandler/ResponseHandler.js";
import ResTypes from "../Utils/Constants/ResTypes.js";
import SmsRegisterTemp from "../Helpers/Brokers/Sms/SmsRegisterTemp.js";
import registerEmailTemplate from "../Helpers/Brokers/Email/RegisterTemplate.js";
import EmailSender from "../Helpers/Brokers/Email/EmailSender.js";
import SmsSender from "../Helpers/Brokers/Sms/SmsSender.js";
import RabbitRes from "../Utils/Constants/RabbitRes.js";
import SmsPasswordTemp from "../Helpers/Brokers/Sms/SmsPasswordTemp.js";
import passwordReset from "../Helpers/Brokers/Email/PasswordTemplate.js";

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

            const emailRes = await EmailSender.sendEmail(email, registerEmailTemplate(token), 'Register Email', () => {
            })
            const smsRes = await SmsSender.sendSms(telephone, SmsRegisterTemp(token))//sent_statusshows success or not

            const sendRegisterNotification = new Notification({
                user: user,
                recipient: recipientDetails,
                body: bodyDetails,
                noti_for: 'Register Confiramtion',
                sms_status: smsRes.sent_status,
                email_status: emailRes.sent_status
            })
            const savedNoti = await sendRegisterNotification.save()
            if (!savedNoti) {
                return RabbitRes('error', 403, { message: "Failed to save notification" })
            }

            return RabbitRes('success', 200, { message: 'notification sent successfully' })
        } catch (error) {
            console.log(error)
            return RabbitRes('error', 500, { message: error })
        }
    }
    sendResetPassNotification = async (user, token, email, telephone) => {
        try {
            const recipientDetails = {
                recipientSms: telephone,
                recipientEmail: email
            }
            const bodyDetails = {
                notiSms: SmsPasswordTemp(token),
                notiEmail: passwordReset(token)
            };
            const emailRes = await EmailSender.sendEmail(email, passwordReset(token), 'Reset Password', () => {
            })
            const smsRes = await SmsSender.sendSms(telephone, SmsPasswordTemp(token))

            const sendRegisterNotification = new Notification({
                user: user,
                recipient: recipientDetails,
                body: bodyDetails,
                noti_for: 'Reset Password',
                sms_status: smsRes.sent_status,
                email_status: emailRes.sent_status
            })
            const savedNoti = await sendRegisterNotification.save()
            if (!savedNoti) {
                return RabbitRes('error', 403, { message: "Failed to save notification" })
            }

            return RabbitRes('success', 200, { message: 'notification sent successfully' })
        } catch (error) {
            console.log(error)
            return RabbitRes('error', 500, { message: error })
        }
    }
}
export default NotiController = new NotiController