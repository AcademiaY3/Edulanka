import axios from 'axios';
import RabbitRes from '../../../Utils/Constants/RabbitRes.js';

class SmsSender {
    constructor() {
        // Initialize any configurations if needed
    }

    sendSms(number, content) {
        return new Promise(async (resolve, reject) => {
            const mobile = number;
            const message = content;

            try {
                const url = process.env.SMS_URL;
                const data = {
                    recipient: `${mobile}`,
                    sender_id: process.env.SMS_ID,
                    message: message
                };
                const config = {
                    headers: {
                        'Authorization': process.env.SMS_KEY,
                        'Content-Type': 'application/json'
                    }
                };
                const response = await axios.post(url, data, config);
                console.log("SMS Sent Successfully to :"+mobile)
                // resolve(RabbitRes('success', 200, { message: "SMS Sent Successfully" }));
            } catch (error) {
                console.error(error);
                // reject(RabbitRes('error', 403, { message: "SMS sending failed: " + error }));
            }
        });
    }
}

export default SmsSender = new SmsSender();
