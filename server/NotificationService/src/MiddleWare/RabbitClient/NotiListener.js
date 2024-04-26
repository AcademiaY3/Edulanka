import RabbitCon from '../../Config/Connections/RabbitCon.js'
import NotiController from '../../Controller/NotiController.js'
import { notiType } from '../../Utils/Constants/NotificationType.js'

const NotiListener = async () => {
    var response = {}
    try {
        const { channel } = await RabbitCon.connect()
        const queue = process.env.NOTI_QUEUE
        await channel.assertQueue(queue, { durable: false })

        console.log(`Notification Service is waiting for messages. To exit, press CTRL+C`);

        channel.consume(queue, async (msg) => {
            const notiMsg = JSON.parse(msg.content.toString())

            // console.log(`Received notification request: ${JSON.stringify(notiMsg.notiType)}`);
            console.log(`Received notification request`);

            if (notiMsg.notiType === notiType.register) {
                response = await NotiController.sendRegisterNotification(
                    notiMsg.data.user,
                    notiMsg.data.token,
                    notiMsg.data.email,
                    notiMsg.data.telephone,
                )
            } else if (notiMsg.notiType === notiType.resetPassword) {
                response = await NotiController.sendResetPassNotification(
                    notiMsg.data.user,
                    notiMsg.data.token,
                    notiMsg.data.email,
                    notiMsg.data.telephone,
                )
            }
            channel.sendToQueue(msg.properties.replyTo, Buffer.from(JSON.stringify(response)), {
                correlationId: msg.properties.correlationId
            })
            channel.ack(msg);
        })

    } catch (error) {
        console.error('Error consuming messages in Notificatiopn Service:', error);
        throw error;
    }
}
export default NotiListener
