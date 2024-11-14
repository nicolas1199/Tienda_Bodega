import { Router } from 'express';

import { createCategoria } from '../controllers/categorias.controller.js';

const categoriaRouter = Router();

categoriaRouter.post('/categorias', createCategoria);

export default categoriaRouter;
