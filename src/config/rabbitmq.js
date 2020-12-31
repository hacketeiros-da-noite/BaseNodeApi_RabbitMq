const queuesList = require('./RabbitmqQueues');

module.exports = {
    config: {
        url: process.env.rbt_url || '',
        queues: queuesList,
    },
};
