import { Router } from 'express';


import generalRouter from './general.routes.js';

const router = Router();

router.get('/', (req, res) => {
  res.json({ message: 'Bienvenido a mi aplicación' });
});


router.use('/', generalRouter);

export default router;
