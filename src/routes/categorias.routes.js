import { Router } from 'express';

import {
  createCategoria,
  deleteCategoria,
  getCategorias,
  updateCategoria,
} from '../controllers/categorias.controller.js';

const categoriaRouter = Router();

categoriaRouter.post('/', createCategoria);

categoriaRouter.get('/', getCategorias);

categoriaRouter.put('/update/:id', updateCategoria);

categoriaRouter.delete('/delete/:id', deleteCategoria);

export default categoriaRouter;
