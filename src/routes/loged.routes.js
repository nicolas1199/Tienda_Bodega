import { Router } from 'express';

import { createUsuario } from '../controllers/usuarios.controller.js';
import { createCategoria } from '../controllers/categorias.controller.js';
import { Carro } from '../controllers/carritos.controller.js';
import { productos } from '../controllers/materiales.controller.js';
import { sessionController } from '../controllers/session.controller.js';

const logedRouter = Router();

//rutas del Carrito
logedRouter.get('/carrito/delete/:id', Carro.delete);
logedRouter.put('/carrito/update/:id', Carro.update);
logedRouter.delete('/carrito/buy/:rut', Carro.buy);
//desde la tabla materiales porque la accion es desde ahí
logedRouter.get(
  '/materiales/a_carrito/:rut/:id/:cantidad/:precio',
  Carro.create,
);

//rutas de los materiales
logedRouter.post('/materiales/create', productos.create);
logedRouter.get('/materiales', productos.getAll);
logedRouter.put('/materiales/update/:id', productos.update);
logedRouter.delete('/materiales/delete/:id', productos.delete);

//rutas de Categorias
logedRouter.post('/categorias/create', createCategoria.create);
logedRouter.get('/categorias', createCategoria.getAll);
logedRouter.delete('/categorias/delete/:id', createCategoria.delete);
logedRouter.put('/categorias/update/:id', createCategoria.update);

//Rutas de usuarios
logedRouter.get('/usuarios', createUsuario.getAll);
logedRouter.post('/usuarios/create', createUsuario.create);
logedRouter.delete('/usuarios/delete/:rut', createUsuario.delete);
logedRouter.put('/usuarios/update/', createUsuario.update);

//Rutas de sesion
logedRouter.post('/session', sessionController.getSession);

export default logedRouter;
