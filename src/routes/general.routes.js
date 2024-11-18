import { Router } from "express";

import { login } from "../controllers/login.controller.js";
import logedRouter from "./loged.routes.js";

const generalRouter = Router();


//Rutas despues de ingresar
generalRouter.use('/loged', logedRouter)

//Rutas de verificacion y renderizado
generalRouter.get('/login',login.get)
generalRouter.post('/login/verif',login.verif)



export default generalRouter;