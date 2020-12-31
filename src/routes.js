import { Router } from 'express';

import KnowsInfinityController from './app/controllers/KnowsInfinityController';

import kiverify from './app/middlewares/KnowsInfinityValidation';

const routes = new Router();

routes.get('/', (req, res) => res.json({ message: 'Is Alive' }));

routes.post('/kinfinity', kiverify, KnowsInfinityController.store);

export default routes;
