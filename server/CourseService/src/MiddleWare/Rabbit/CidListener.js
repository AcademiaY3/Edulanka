import RabbitCon from '../../Config/Connections/RabbitCon.js'
import CourseController from '../../Controller/Course/CourseController.js'
import RabbitRes from '../../Utils/Constants/RabbitRes.js'

const CidListener = async () => {
    var response = {}
    try {
        const { channel } = await RabbitCon.connect()
        const queue = process.env.CID_QUEUE
        await channel.assertQueue(queue, { durable: false })

        console.log(`Course Service is waiting for messages. To exit, press CTRL+C`);

        channel.consume(queue, async (msg) => {
            const cid = JSON.parse(msg.content.toString())
            // console.log(`Received course request: ${JSON.stringify(cid.data.cid)}`);
            console.log(`Received course Id request`);

            response = await CourseController.getCourseByRabbit(cid.data.cid)
            channel.sendToQueue(msg.properties.replyTo, Buffer.from(JSON.stringify(response)), {
                correlationId: msg.properties.correlationId
            })
            channel.ack(msg);
        })

    } catch (error) {
        console.error('Error consuming messages in course Service:', error);
        // throw error;
        return RabbitRes('error', 500, { isCourse: false, message: error.message })
    }
}
export default CidListener