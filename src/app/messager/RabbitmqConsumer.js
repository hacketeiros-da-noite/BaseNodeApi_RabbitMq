const amqp = require('amqplib');
const rabbitConfig = require('../../config/rabbitmq');

class RabbitmqConsumer {
    consume() {
        console.log('Starting connection');
        console.log(rabbitConfig.config.url);

        amqp.connect(rabbitConfig.config.url).then((conn) => {
            console.log('Connected Sucefull');

            rabbitConfig.config.queues.forEach((queue) => {
                console.log('Creating channel: %s', queue.name);

                conn.createChannel().then((ch) => {
                    console.log(' Start: %s', queue.name);

                    ch.assertQueue(queue.name, {
                        durable: queue.durable,
                    });

                    ch.prefetch(queue.prefetch);

                    ch.consume(
                        queue.name,
                        (msg) => {
                            console.log(
                                ' [x] Received %s',
                                msg.content.toString()
                            );
                            setTimeout(() => {
                                console.log(' [x] Done');
                                ch.ack(msg);
                            }, queue.timeout);
                        },
                        {
                            noAck: queue.noAck,
                        }
                    );
                });
            });
        });
    }
}

module.exports = new RabbitmqConsumer();
