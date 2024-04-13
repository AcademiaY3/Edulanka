const RABBIMQ_CONFIG = {
    URL: process.env.RABBIT_URI,
    queues: {
        USER_VALIDATION_QUEUE: 'user_validation_queue'
    }
}
export default RABBIMQ_CONFIG