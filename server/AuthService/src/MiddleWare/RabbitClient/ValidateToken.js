import RabbitCon from '../../Config/Connections/RabbitCon.js'

const ValidateToken = async () => {
    try {
        const { channel } = await RabbitCon.connect()
        const queue = process.env.TOKEN_QUEUE
        await channel.assertQueue(queue, { durable: false })
        
        console.log(`Authentication Service is waiting for messages. To exit, press CTRL+C`);

        channel.consume(queue, (msg) => {
            const userDetails = JSON.parse(msg.content.toString())
            console.log(`Received authentication request: ${JSON.stringify(userDetails)}`);

            channel.sendToQueue(msg.properties.replyTo, Buffer.from(JSON.stringify({ authenticated: true })), {
                correlationId:msg.properties.correlationId
            })

            channel.ack(msg);
        })

    } catch (error) {
        console.error('Error consuming messages in Authentication Service:', error);
        throw error;
    }
}
export default ValidateToken
