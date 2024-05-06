import RabbitCon from '../../Config/Connection/RabbitCon.js'
import OrderController from '../../Controller/Order/OrderController.js'
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

                response = await OrderController(
                    orderMsg.data.pay_status
                )
            
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
