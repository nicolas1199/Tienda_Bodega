import { Router } from 'express';

import generalRouter from './general.routes.js';

const router = Router();

router.use('/', generalRouter);

export default router;
