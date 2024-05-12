import amqp from 'amqplib';

class RabbitCon {
    constructor() {
        this.connection = null;
        this.channel = null;
    }

    async connect() {
        try {
            if (!this.connection) {
                this.connection = await amqp.connect(process.env.RABBIT_URI);
                this.channel = await this.connection.createChannel();
                console.log('Connected To RabbitMQ');
            }
            return {
                connection: this.connection,
                channel: this.channel
            };
        } catch (error) {
            console.error('Error establishing RabbitMQ connection:', error);
            throw error;
        }
    }
}

const rabbitCon = new RabbitCon();
export default rabbitCon;
