import { Router } from 'express';

import categoriaRouter from './categorias.routes.js';
import usuarioRouter from './usuarios.routes.js';

const router = Router();

router.get('/', (req, res) => {
  res.json({ message: 'Bienvenido a mi aplicación' });
});

router.use('/categorias', categoriaRouter);
router.use('/usuarios',usuarioRouter);

export default router;
