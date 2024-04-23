import { v4 as uuid } from 'uuid'
import RabbitCon from '../../Config/Connections/RabbitCon.js'
import { notiType } from '../../Utils/Constants/NotificationType.js'

const SendNoti = async (user, sectoken,email,telephone) => {
    var message = {
        notiType: notiType.register,
        data: {
            user: user,
            token: sectoken,
            email:email,
            telephone: telephone
        }
    }
    try {
        const { channel } = await RabbitCon.connect()
        const queue = process.env.NOTI_QUEUE
        const correlationId = uuid()
        const replyQueue = await channel.assertQueue(
            '',
            { exclusive: true }
        )

        const validatePromise = new Promise((resolve, reject) => {
            const timeOut = setTimeout(() => {
                reject({ 'message': 'API couldnt Full Fill Request' })
            }, 8000)
            channel.consume(replyQueue.queue, (msg) => {
                if (msg.properties.correlationId === correlationId) {
                    const notiMsg = JSON.parse(msg.content.toString())
                    // console.log(`Received notification response: ${JSON.stringify(notiMsg)}`);
                    console.log(`Received notification response`);
                    clearTimeout(timeOut)
                    resolve(notiMsg)
                } else {
                    reject({ 'message': 'Response Data 404' })
                }
            }, { noAck: true })
        })

        channel.sendToQueue(queue, Buffer.from(JSON.stringify(message)), {
            persistent: true,
            correlationId: correlationId,
            replyTo: replyQueue.queue
        })
        // console.log(`Message sent to Notification Queue: ${JSON.stringify(message)}`);
        console.log(`Message sent to Notification Queue`);
        return validatePromise;
    } catch (error) {
        console.error(error)
    }
}

export default SendNoti