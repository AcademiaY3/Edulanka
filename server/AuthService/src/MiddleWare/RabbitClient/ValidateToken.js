import RabbitCon from '../../Config/Connections/RabbitCon.js'
import AuthController from '../../Controller/Auth/AuthController.js'
import VerfiyToken from '../../Helpers/Token/VerfiyToken.js'

const ValidateToken = async () => {
    var response = {}
    try {
        const { channel } = await RabbitCon.connect()
        const queue = process.env.TOKEN_QUEUE
        await channel.assertQueue(queue, { durable: false })

        console.log(`Authentication Service is waiting for messages. To exit, press CTRL+C`);

        channel.consume(queue, async(msg) => {
            const token = JSON.parse(msg.content.toString())
            console.log(`Received authentication request: ${JSON.stringify(token)}`);
            // get id from the token
            const userId = await VerfiyToken(token)
            //find user in auth
            response = await AuthController.getAuth(userId)
            console.log(`${userId} ${JSON.stringify(response)}`)

            channel.sendToQueue(msg.properties.replyTo, Buffer.from(JSON.stringify(response)), {
                correlationId: msg.properties.correlationId
            })
            channel.ack(msg);
        })

    } catch (error) {
        console.error('Error consuming messages in Authentication Service:', error);
        throw error;
    }
}
export default ValidateToken
