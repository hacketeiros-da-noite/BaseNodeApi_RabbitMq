import './database';

const rabbit = require('./app/messager/RabbitmqConsumer');

rabbit.consume();
