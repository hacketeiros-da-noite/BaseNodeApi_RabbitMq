import KnowsInfinityService from '../services/KnowsInfinityService';

class KnowsInfinityController {
    async store(req, res) {
        try {
            const saved = await KnowsInfinityService.save(req.body);

            if (!saved) {
                return res
                    .status(400)
                    .json({ error: 'Infinity already exists' });
            }

            return res.status(200).json(saved);
        } catch {
            return res.status(400).json({ error: 'Error to save data' });
        }
    }
}

export default new KnowsInfinityController();
