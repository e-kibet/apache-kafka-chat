const kafka = require('../index');

module.exports = {
    async sendMessageToUser(req, res, next) {
        const producer = kafka.producer()
        await producer.connect()
        await producer.send({
            topic: 'test-topic',
            messages: [
                { value: 'Hello KafkaJS user!' },
            ],
        })

        producer.disconnect()
    }
}
