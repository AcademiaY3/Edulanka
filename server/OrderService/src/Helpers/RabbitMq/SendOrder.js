import { v4 as uuid } from 'uuid'
import RabbitCon from '../../Config/Connections/RabbitCon.js'

const SendOrder = async (course_id, price,course_name) => {
    var message = {
        orderType: type,
        data: {
            course_id: course_id,
            price: price,
            course_name:course_name
        }
    }
    try {
        const { channel } = await RabbitCon.connect()
        const queue = process.env.ORDER_QUEUE
        const correlationId = uuid()
        const replyQueue = await channel.assertQueue(
            '',
            { exclusive: true }
        )

        const validatePromise = new Promise((resolve, reject) => {
            const timeOut = setTimeout(() => {
                reject({ 'message': 'Payment Service UnderMaintenance' })
            }, 10000)
            channel.consume(replyQueue.queue, (msg) => {
                if (msg.properties.correlationId === correlationId) {
                    const orderMsg = JSON.parse(msg.content.toString())
                    // console.log(`Received Payment response: ${JSON.stringify(orderMsg)}`);
                    console.log(`Received Payment response`);
                    clearTimeout(timeOut)
                    channel.ack(msg); // Manually acknowledge the message
                    resolve(orderMsg)
                } else {
                    reject({ 'message': 'Response Data 404' })
                }
            }, { noAck: false })
        })

        channel.sendToQueue(queue, Buffer.from(JSON.stringify(message)), {
            persistent: true,
            correlationId: correlationId,
            replyTo: replyQueue.queue
        })
        // console.log(`Message sent to Payment Queue: ${JSON.stringify(message)}`);
        console.log(`Message sent to Payment Queue`);
        return validatePromise;
    } catch (error) {
        console.error(error)
    }
}

export default SendOrder