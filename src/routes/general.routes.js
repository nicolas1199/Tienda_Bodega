import { Router } from 'express';

import { loginUser } from '../controllers/login.controller.js';
import logedRouter from './loged.routes.js';

const generalRouter = Router();

//Rutas despues de ingresar
generalRouter.use('/loged', logedRouter);

//Rutas de verificacion y renderizado

generalRouter.post('/login', loginUser.login);

export default generalRouter;
