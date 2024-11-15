import { Router } from "express";

import { createUsuario } from "../controllers/usuarios.controller.js";

const usuarioRouter = Router();

usuarioRouter.get('/', createUsuario.getAll);
usuarioRouter.post('/create', createUsuario.create);
usuarioRouter.put('/update', createUsuario.update);
usuarioRouter.get('/delete/:rut', createUsuario.delete);

export default usuarioRouter;