import amqp from 'amqplib'


class RabbitCon{
    constructor() {
        this.connection = null
        this.channel=null
    }
    async connect() {
        if (!this.connection) {
            try {
                this.connection = await amqp.connect(process.env.RABBIT_URI)
                this.channel = await this.connection.createChannel()
                if (this.connection)
                    console.log('Connected To RabbitMQ')
            } catch (error) {
                console.error('Error establishing RabbitMQ connection:', error);
                throw error;
            }
        }
        return {
            connection: this.connection,

            channel:this.channel

        }
    }
}
export default RabbitCon = new RabbitCon()