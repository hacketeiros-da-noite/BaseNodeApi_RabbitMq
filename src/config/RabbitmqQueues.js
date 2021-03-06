import KnowsInfinityService from '../app/services/KnowsInfinityService';

module.exports = [
    {
        name: 'knows_infinity',
        durable: false,
        prefetch: 10,
        timeout: 7000,
        noAck: false,
        func() {
            return KnowsInfinityService.save;
        },
    },
];
