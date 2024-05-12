// import { v4 as uuid } from 'uuid'
// import RabbitCon from '../../Config/Connections/RabbitCon.js'

// const CourseNoti = async (name, title, price, language) => {
//     var message = {
//         courseType: 'course',
//         data: {
//             name: name,
//             title: title,
//             price: price,
//             language: language
//         }
//     }
//     try {
//         const { channel } = await RabbitCon.connect()
//         const queue = process.env.ORDER_COURSE_QUEUE
//         const correlationId = uuid()
//         const replyQueue = await channel.assertQueue(
//             '',
//             { exclusive: true }
//         )

//         const validatePromise = new Promise((resolve, reject) => {
//             const timeOut = setTimeout(() => {
//                 reject({ 'message': 'Course Service UnderMaintenance' })
//             }, 10000)
//             channel.consume(replyQueue.queue, (msg) => {
//                 if (msg.properties.correlationId === correlationId) {
//                     const courseMsg = JSON.parse(msg.content.toString())
//                     // console.log(`Received notification response: ${JSON.stringify(courseMsg)}`);
//                     console.log(`Received course response`);
//                     clearTimeout(timeOut)
//                     channel.ack(msg); // Manually acknowledge the message
//                     resolve(courseMsg)
//                 } else {
//                     reject({ 'message': 'Response Data 404' })
//                 }
//             }, { noAck: false })
//         })

//         channel.sendToQueue(queue, Buffer.from(JSON.stringify(message)), {
//             persistent: true,
//             correlationId: correlationId,
//             replyTo: replyQueue.queue
//         })
//         // console.log(`Message sent to Course Queue: ${JSON.stringify(message)}`);
//         console.log(`Message sent to Course Queue`);
//         return validatePromise;
//     } catch (error) {
//         console.error(error)
//     }
// }

// export default CourseNoti

// import { v4 as uuid } from 'uuid';
// import rabbitCon from '../../Config/Connections/RabbitCon.js';

// const CourseNoti = async (name, title, price, language) => {
//     var message = {
//         courseType: 'course',
//         data: {
//             name: name,
//             title: title,
//             price: price,
//             language: language
//         }
//     };

//     try {
//         const { channel } = await rabbitCon.connect();
//         const queue = process.env.ORDER_COURSE_QUEUE;
//         const correlationId = uuid();
//         const replyQueue = await channel.assertQueue('', { exclusive: true });

//         const validatePromise = new Promise((resolve, reject) => {
//             const timeOut = setTimeout(() => {
//                 reject({ 'message': 'Course Service Under Maintenance' });
//             }, 10000);

//             channel.consume(replyQueue.queue, (msg) => {
//                 if (msg.properties.correlationId === correlationId) {
//                     const courseMsg = JSON.parse(msg.content.toString());
//                     console.log('Received course response');
//                     clearTimeout(timeOut);
//                     channel.ack(msg);
//                     resolve(courseMsg);
//                 } else {
//                     reject({ 'message': 'Response Data 404' });
//                 }
//             }, { noAck: false });
//         });

//         channel.sendToQueue(queue, Buffer.from(JSON.stringify(message)), {
//             persistent: true,
//             correlationId: correlationId,
//             replyTo: replyQueue.queue
//         });

//         console.log('Message sent to Course Queue');
//         return validatePromise;
//     } catch (error) {
//         console.error(error);
//         throw error;
//     }
// };

// export default CourseNoti;



import { v4 as uuid } from 'uuid';
import rabbitCon from '../../Config/Connections/RabbitCon.js';

const CourseNoti = async (name, title, price, language, eventType) => {
    var message = {
        courseType: eventType, // Indicate the type of event (e.g., 'courseUpdate')
        data: {
            name: name,
            title: title,
            price: price,
            language: language
        }
    };

    try {
        const { channel } = await rabbitCon.connect();
        const queue = process.env.ORDER_COURSE_QUEUE;
        const correlationId = uuid();
        const replyQueue = await channel.assertQueue('', { exclusive: true });

        const validatePromise = new Promise((resolve, reject) => {
            const timeOut = setTimeout(() => {
                reject({ 'message': 'Course Service Under Maintenance' });
            }, 10000);

            channel.consume(replyQueue.queue, (msg) => {
                if (msg.properties.correlationId === correlationId) {
                    const courseMsg = JSON.parse(msg.content.toString());
                    console.log('Received course response');
                    clearTimeout(timeOut);
                    channel.ack(msg);
                    resolve(courseMsg);
                } else {
                    reject({ 'message': 'Response Data 404' });
                }
            }, { noAck: false });
        });

        channel.sendToQueue(queue, Buffer.from(JSON.stringify(message)), {
            persistent: true,
            correlationId: correlationId,
            replyTo: replyQueue.queue
        });

        console.log('Message sent to Course Queue');
        return validatePromise;
    } catch (error) {
        console.error(error);
        throw error;
    }
};

export default CourseNoti;
