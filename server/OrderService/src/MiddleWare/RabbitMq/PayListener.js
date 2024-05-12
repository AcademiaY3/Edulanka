import RabbitCon from '../../Config/Connection/RabbitCon.js'
import OrderController from '../../Controller/Order/OrderController.js'
import RabbitRes from '../../Utils/Constants/RabbitRes.js'

const PayListener = async () => {
    var response = {}
    try {
        const { channel } = await RabbitCon.connect()
        const queue = process.env.PAY_QUEUE
        await channel.assertQueue(queue, { durable: false })

        console.log(`Order Service is waiting for messages. To exit, press CTRL+C`);

        channel.consume(queue, async (msg) => {
            const cid = JSON.parse(msg.content.toString())
            console.log(`Received course request: ${JSON.stringify(cid)}`);
            console.log(`Received order Id request`);

            response = await OrderController.updatePayStatusByRabbit(cid.data.oid,cid.data.pay_status)
            channel.sendToQueue(msg.properties.replyTo, Buffer.from(JSON.stringify(response)), {
                correlationId: msg.properties.correlationId
            })
            channel.ack(msg);
        })

    } catch (error) {
        console.error('Error consuming messages in course Service:', error);
        // throw error;
        return RabbitRes('error', 500, { isPayRes: false, message: error.message })
    }
}
export default PayListener