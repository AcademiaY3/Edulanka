import nodemailer from 'nodemailer';
import RabbitRes from '../../../Utils/Constants/RabbitRes.js';

class EmailSender {
    constructor() {
        this.transporter = nodemailer.createTransport({
            service: process.env.MAIL_SERVER,
            auth: {
                user: process.env.MAIL_USERNAME,
                pass: process.env.MAIL_PASSWORD,
            },
            tls: {
                rejectUnauthorized: false
            }
        });
    }

    sendEmail(email, emailTemplateFunction, subject, saveOrUpdate) {
        return new Promise((resolve, reject) => {
            const message = {
                from: "qwwerrrty11@gmail.com",
                to: email,
                subject: subject,
                html: emailTemplateFunction,
            };

            this.transporter.sendMail(message, (err, info) => {
                if (err) {
                    reject(this.handleEmailError(err));
                } else {
                    resolve(this.handleEmailSuccess(email, saveOrUpdate));
                }
            });
        });
    }

    async handleEmailSuccess(email, saveOrUpdate) {
        console.log('Email sent successfully to:', email);
        saveOrUpdate();
        return RabbitRes('success', 200, { message: "Email Sent to " + email });
    }

    handleEmailError(err) {
        console.log(err);
        return RabbitRes('error', 403, { message: "Email sending error: " + err });
    }
}

export default EmailSender = new EmailSender();
