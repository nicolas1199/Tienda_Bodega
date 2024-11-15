import { Router } from 'express';

import categoriaRouter from './categorias.routes.js';
import usuarioRouter from './usuarios.routes.js';
import generalRouter from './general.routes.js';

const router = Router();

router.get('/', (req, res) => {
  res.json({ message: 'Bienvenido a mi aplicación' });
});


router.use('/', generalRouter);

export default router;
