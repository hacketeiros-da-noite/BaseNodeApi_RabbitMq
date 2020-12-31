import Infinity from '../models/Infinity';

class KnowsInfinityService {
    async save(kInfinity) {
        try {
            const infinityExists = await Infinity.findOne({
                where: {
                    value: kInfinity.value,
                },
            });

            if (infinityExists) {
                return null;
            }

            const infinity = await Infinity.create(kInfinity);

            return infinity;
        } catch (e) {
            throw Error('Can not save data');
        }
    }
}

export default new KnowsInfinityService();
