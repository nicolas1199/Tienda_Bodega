import { Router } from 'express';

import { general } from '../controllers/general.controller.js';
import { createUsuario } from '../controllers/usuarios.controller.js';
import { createCategoria } from '../controllers/categorias.controller.js';
import { Carro } from '../controllers/carritos.controller.js';

const logedRouter = Router();

//Mostrar la tabla indicada en la url
logedRouter.get('/:rut/:mail/:tabla', general.getAll);

//rutas del Carrito
logedRouter.get('/:rut/:mail/carrito/delete/:id', Carro.delete);
logedRouter.put('/:rut/:mail/carrito/update/:id', Carro.update);
logedRouter.delete('/:rut/:mail/:carrito/buy', Carro.buy);
//desde la tabla materiales porque la accion es desde ahí
logedRouter.get(
  '/:rut/:mail/materiales/a_carrito/:id/:cantidad/:precio',
  Carro.create,
);

//rutas de Categorias
logedRouter.post('/:rut/:mail/categorias/create', createCategoria.create);
logedRouter.get('/:rut/:mail/categorias/delete/:id', createCategoria.delete);
logedRouter.get('/:rut/:mail/categorias/update/:id', createCategoria.update);

//Rutas de usuarios
logedRouter.post('/:rut/:mail/usuarios/create', createUsuario.create);
logedRouter.get('/:rut/:mail/usuarios/delete/:vic', createUsuario.delete);
logedRouter.post('/:rut/:mail/usuarios/update/:run', createUsuario.update);

export default logedRouter;
