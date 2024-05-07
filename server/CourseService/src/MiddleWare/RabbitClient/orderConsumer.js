import RabbitCon from '../../Config/Connections/RabbitCon.js'
import CourseController from '../../Controller/Course/CourseController.js'
import RabbitRes from '../../Utils/Constants/RabbitRes.js'

const fetchorderData = async () => {
    var response = {}
    try {
        const { channel } = await RabbitCon.connect()
        const queue = process.env.ORDER_QUEUE
        await channel.assertQueue(queue, { durable: false })

        console.log(`Course Service is waiting for messages. To exit, press CTRL+C`);

        channel.consume(queue, async (msg) => {
            const courseID = JSON.parse(msg.content.toString())
            // console.log(`Received authentication request: ${JSON.stringify(courseID)}`);
            console.log(`Received Order request`);

            const cID = courseID
            response = await CourseController.getCourse(cID)
            channel.sendToQueue(msg.properties.replyTo, Buffer.from(JSON.stringify(response)), {
                correlationId: msg.properties.correlationId
            })
            channel.ack(msg);

            console.log("obj---> "+response);
        })

    } catch (error) {
        console.error('Error consuming messages in Order Service:', error);
        // throw error;
        return RabbitRes('error', 500, { authenticated: false, message: error.message })
    }
}
export default fetchorderData
