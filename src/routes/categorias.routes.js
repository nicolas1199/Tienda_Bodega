import { Router } from 'express';

import { createCategoria } from '../controllers/categorias.controller.js';

const categoriaRouter = Router();

categoriaRouter.get('/', createCategoria.getAll);

export default categoriaRouter;
