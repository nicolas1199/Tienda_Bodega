import { Router } from 'express';

import { loginUser } from '../controllers/login.controller.js';
import logedRouter from './loged.routes.js';
import { Comunas } from '../models/comunas.model.js';

const generalRouter = Router();

//Rutas despues de ingresar
generalRouter.use('/loged', logedRouter);

//Rutas de verificacion y renderizado

generalRouter.post('/login/verif', loginUser.login);
generalRouter.post('/logout', loginUser.logout);
generalRouter.get('/comunas', async (req, res) => {
    try {
        const comunas = await Comunas.getAll()
        
        res.send(comunas)
    } catch (error) {
        console.error(error);
        res.status(500).send("Hubo un problema al obtener las comunas")
    }

});

export default generalRouter;
