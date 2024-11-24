import { Router } from 'express';

import { general } from '../controllers/general.controller.js';
import { createUsuario } from '../controllers/usuarios.controller.js';
import { createCategoria } from '../controllers/categorias.controller.js';
import { Carro } from '../controllers/carritos.controller.js';

const logedRouter = Router();

//Mostrar la tabla indicada en la url
logedRouter.get('/:tabla', general.getAll);

//rutas del Carrito
logedRouter.get('/carrito/delete/:id', Carro.delete);
logedRouter.put('/carrito/update/:id', Carro.update);
logedRouter.delete('/carrito/buy/:rut', Carro.buy);
//desde la tabla materiales porque la accion es desde ahí
logedRouter.get(
  '/materiales/a_carrito/:rut/:id/:cantidad/:precio',
  Carro.create,
);

//rutas de Categorias
logedRouter.post('/categorias/create', createCategoria.create);
logedRouter.get('/categorias/delete/:id', createCategoria.delete);
logedRouter.get('/categorias/update/:id', createCategoria.update);

//Rutas de usuarios
logedRouter.post('/usuarios/create', createUsuario.create);
logedRouter.get('/usuarios/delete/:vic', createUsuario.delete);
logedRouter.post('/usuarios/update/:run', createUsuario.update);

export default logedRouter;
