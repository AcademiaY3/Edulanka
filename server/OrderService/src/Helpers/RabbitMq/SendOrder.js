import { v4 as uuid } from 'uuid'
import RabbitCon from '../../Config/Connections/RabbitCon.js'

const SendOrder = async (course_id) => {
    var message = {
        orderType: type,
        data: {
            course_id: course_id
        }
    }
    try {
        const { channel } = await RabbitCon.connect()
        const queue = process.env.ORDER_COURSE_QUEUE
        const correlationId = uuid()
        const replyQueue = await channel.assertQueue(
            '',
            { exclusive: true }
        )

        const validatePromise = new Promise((resolve, reject) => {
            const timeOut = setTimeout(() => {
                reject({ 'message': 'Course Service UnderMaintenance' })
            }, 10000)
            channel.consume(replyQueue.queue, (msg) => {
                if (msg.properties.correlationId === correlationId) {
                    const orderMsg = JSON.parse(msg.content.toString())
                    // console.log(`Received Course response: ${JSON.stringify(orderMsg)}`);
                    console.log(`Received Course response`);
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
        // console.log(`Message sent to Course Queue: ${JSON.stringify(message)}`);
        console.log(`Message sent to Course Queue`);
        return validatePromise;
    } catch (error) {
        console.error(error)
    }
}

export default SendOrder