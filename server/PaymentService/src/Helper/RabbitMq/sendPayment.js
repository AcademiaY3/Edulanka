import { v4 as uuid } from 'uuid';
import RabbitCon from '../../Config/Connections/RabbitCon.js';

const SendPayment = async (type, pay_status) => {
    var message = {
        paymentType: type,
        data: {
            pay_status: pay_status
        }
    };
    try {
        const { channel } = await RabbitCon.connect();
        const queue = process.env.PAY_QUEUE;
        const correlationId = uuid();
        const replyQueue = await channel.assertQueue('', { exclusive: true });

        const validatePromise = new Promise((resolve, reject) => {
            const timeOut = setTimeout(() => {
                reject({ message: 'Payment Service UnderMaintenance' });
            }, 10000);
            channel.consume(replyQueue.queue, (msg) => {
                if (msg.properties.correlationId === correlationId) {
                    const payMsg = JSON.parse(msg.content.toString());
                    console.log('Received payment response');
                    clearTimeout(timeOut);
                    channel.ack(msg); // Manually acknowledge the message
                    resolve(payMsg);
                } else {
                    reject({ message: 'Response Data 404' });
                }
            }, { noAck: false });
        });

        channel.sendToQueue(queue, Buffer.from(JSON.stringify(message)), {
            persistent: true,
            correlationId: correlationId,
            replyTo: replyQueue.queue
        });
        console.log('Message sent to payment Queue');
        return validatePromise;
    } catch (error) {
        console.error(error);
    }
};

export default SendPayment;
