import { v4 as uuid } from 'uuid'
import RabbitCon from '../../Config/Connection/RabbitCon.js'

const GetCourse = async (cid) => {
    var message = {
        // notiType: type,
        data: {
            cid: cid
        }
    }
    try {
        const { channel } = await RabbitCon.connect()
        const queue = process.env.CID_QUEUE
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
                    const notiMsg = JSON.parse(msg.content.toString())
                    // console.log(`Received notification response: ${JSON.stringify(notiMsg)}`);
                    console.log(`Received course response`);
                    clearTimeout(timeOut)
                    channel.ack(msg); // Manually acknowledge the message
                    resolve(notiMsg)
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
        // console.log(`Message sent to Notification Queue: ${JSON.stringify(message)}`);
        console.log(`Message sent to Course Queue`);
        return validatePromise;
    } catch (error) {
        console.error(error)
    }
}

export default GetCourse