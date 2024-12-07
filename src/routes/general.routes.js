import { Router } from 'express';

import { loginUser } from '../controllers/login.controller.js';
import logedRouter from './loged.routes.js';

const generalRouter = Router();

//Rutas despues de ingresar
generalRouter.use('/loged', logedRouter);

//Rutas de verificacion y renderizado

generalRouter.post('/login/verif', loginUser.login);
generalRouter.post('/logout', loginUser.logout);

export default generalRouter;
