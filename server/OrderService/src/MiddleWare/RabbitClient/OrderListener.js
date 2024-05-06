import RabbitCon from '../../Config/Connections/RabbitCon.js'
import NotiController from '../../Controller/NotiController.js'
// import { notiType } from '../../Utils/Constants/NotificationType.js'

const OrderListener = async () => {
    var response = {}
    try {
        const { channel } = await RabbitCon.connect()
        const queue = process.env.ORDER_QUEUE
        await channel.assertQueue(queue, { durable: false })

        console.log(`Order Service is waiting for messages. To exit, press CTRL+C`);

        channel.consume(queue, async (msg) => {
            const orderMsg = JSON.parse(msg.content.toString())

            // console.log(`Received order request: ${JSON.stringify(orderMsg.notiType)}`);
            console.log(`Received order request`);

            if (orderMsg.notiType === notiType.register) {
                response = await NotiController.sendRegisterNotification(
                    orderMsg.data.user,
                    orderMsg.data.token,
                    orderMsg.data.email,
                    orderMsg.data.telephone,
                )
            } else if (orderMsg.notiType === notiType.resetPassword) {
                response = await NotiController.sendResetPassNotification(
                    orderMsg.data.user,
                    orderMsg.data.token,
                    orderMsg.data.email,
                    orderMsg.data.telephone,
                )
            }
            channel.sendToQueue(msg.properties.replyTo, Buffer.from(JSON.stringify(response)), {
                correlationId: msg.properties.correlationId
            })
            channel.ack(msg);
        })

    } catch (error) {
        console.error('Error consuming messages in Order Service:', error);
        throw error;
    }
}
export default OrderListener
