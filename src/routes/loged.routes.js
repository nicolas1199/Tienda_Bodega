import { Router } from 'express';

import { general } from '../controllers/general.controller.js';
import { createUsuario } from '../controllers/usuarios.controller.js';
import { createCategoria } from '../controllers/categorias.controller.js';

const logedRouter = Router();

logedRouter.get('/:rut/:mail/:tabla', general.getAll);

//rutas de Categorias
logedRouter.post('/:rut/:mail/categorias/create', createCategoria.create);
logedRouter.get('/:rut/:mail/categorias/delete/:id', createCategoria.delete);
logedRouter.get('/:rut/:mail/categorias/update/:id', createCategoria.update);

//Rutas de usuarios
logedRouter.post('/:rut/:mail/usuarios/create', createUsuario.create);
logedRouter.get('/:rut/:mail/usuarios/delete/:vic', createUsuario.delete);
logedRouter.post('/:rut/:mail/usuarios/update/:run', createUsuario.update);

export default logedRouter;
