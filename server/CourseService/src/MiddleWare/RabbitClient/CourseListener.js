// import RabbitCon from '../../Config/Connections/RabbitCon.js'
// import CourseController from '../../Controller/Course/CourseController.js'


// const CourseListener = async () => {
//     var response = {}
//     try {
//         const { channel } = await RabbitCon.connect()
//         const queue = process.env.ORDER_COURSE_QUEUE
//         await channel.assertQueue(queue, { durable: false })

//         console.log(`Course Service is waiting for messages. To exit, press CTRL+C`);

//         channel.consume(queue, async (msg) => {
//             const courseMsg = JSON.parse(msg.content.toString())

          
//             console.log(`Received course request`);

//                 response = await CourseController(  //**********need to implement a method for order details************
//                     courseMsg.data.course_id,
    
//                 )
//             channel.sendToQueue(msg.properties.replyTo, Buffer.from(JSON.stringify(response)), {
//                 correlationId: msg.properties.correlationId
//             })
//             channel.ack(msg);
//         })

//     } catch (error) {
//         console.error('Error consuming messages in Course Service:', error);
//         throw error;
//     }
// }
// export default CourseListener



// import rabbitCon from '../../Config/Connections/RabbitCon.js';
// import CourseController from '../../Controller/Course/CourseController.js';

// const CourseListener = async () => {
//     try {
//         const { channel } = await rabbitCon.connect();
//         const queue = process.env.ORDER_COURSE_QUEUE;
//         await channel.assertQueue(queue, { durable: false });

//         console.log('Course Service is waiting for messages. To exit, press CTRL+C');

//         channel.consume(queue, async (msg) => {
//             try {
//                 const courseMsg = JSON.parse(msg.content.toString());
//                 console.log('Received course request');

//                 const response = await CourseController(courseMsg.data.course_id);
//                 channel.sendToQueue(msg.properties.replyTo, Buffer.from(JSON.stringify(response)), {
//                     correlationId: msg.properties.correlationId
//                 });
//                 channel.ack(msg);
//             } catch (error) {
//                 console.error('Error processing course request:', error);
//                 throw error;
//             }
//         });
//     } catch (error) {
//         console.error('Error consuming messages in Course Service:', error);
//         throw error;
//     }
// };

// export default CourseListener;




import rabbitCon from '../../Config/Connections/RabbitCon.js';
import CourseController from '../../Controller/Course/CourseController.js';

const CourseListener = async () => {
    try {
        const { channel } = await rabbitCon.connect();
        const queue = process.env.ORDER_COURSE_QUEUE;
        await channel.assertQueue(queue, { durable: false });

        console.log('Course Service is waiting for messages. To exit, press CTRL+C');

        channel.consume(queue, async (msg) => {
            try {
                const courseMsg = JSON.parse(msg.content.toString());
                console.log('Received course request');

                // Check if the message is an availability check request
                if (courseMsg.courseType === 'availabilityCheck') {
                    // Retrieve course availability based on course ID or other criteria
                    const availability = await CourseController.checkAvailability(courseMsg.data.course_id);
                    
                    // Send availability response back to OrderService
                    channel.sendToQueue(msg.properties.replyTo, Buffer.from(JSON.stringify(availability)), {
                        correlationId: msg.properties.correlationId
                    });
                } else {
                    // Process other types of requests
                    const response = await CourseController(courseMsg.data.course_id);
                    channel.sendToQueue(msg.properties.replyTo, Buffer.from(JSON.stringify(response)), {
                        correlationId: msg.properties.correlationId
                    });
                }
                channel.ack(msg);
            } catch (error) {
                console.error('Error processing course request:', error);
                throw error;
            }
        });
    } catch (error) {
        console.error('Error consuming messages in Course Service:', error);
        throw error;
    }
};

export default CourseListener;
