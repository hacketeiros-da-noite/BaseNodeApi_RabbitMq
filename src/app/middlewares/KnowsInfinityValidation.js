import Infinity from '../models/Infinity';

export default (req, res, next) => {
    Infinity.create(req.body).then((x) => {
        if (!x.value) {
            return res.status(400).json({ error: 'court not provided' });
        }

        return next();
    });
};
