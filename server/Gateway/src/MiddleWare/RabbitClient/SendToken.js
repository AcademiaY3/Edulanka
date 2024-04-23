import { v4 as uuid } from 'uuid'
import RabbitCon from '../../Config/Connections/RabbitCon.js'

const SendToken = async (token) => {
    try {
        const { channel } = await RabbitCon.connect()
        const queue = process.env.TOKEN_QUEUE
        const correlationId = uuid()
        const replyQue = await channel.assertQueue(
            '',
            { exclusive: true }
        )

        const validatePromise = new Promise((resolve, reject) => {
            const timeout = setTimeout(() => {
                reject({ 'message': 'API couldnt Full Fill Request' })
            }, 8000)
            channel.consume(replyQue.queue, (message) => {
                if (message.properties.correlationId === correlationId) {
                    const userValidated = JSON.parse(message.content.toString())
                    // console.log(`Received validation response: ${JSON.stringify(userValidated)}`);
                    console.log(`Received validation response`);
                    clearTimeout(timeout)
                    resolve(userValidated)
                } else {
                    reject({ 'message': 'Response Data 404' })
                }
            }, { noAck: true })
        })

        channel.sendToQueue(queue, Buffer.from(JSON.stringify(token)), {
            persistent: true,
            correlationId: correlationId,
            replyTo: replyQue.queue
        })
        // console.log(`Message sent to Auth Queue: ${JSON.stringify(token)}`);
        console.log(`Message sent to Auth Queue`);
        return validatePromise;
    } catch (error) {
        console.error(error)
    }
}
export default SendToken