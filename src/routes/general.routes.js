import { Router } from "express";
import { general } from "../controllers/general.controller.js";
import categoriaRouter from "./categorias.routes.js";
import usuarioRouter from "./usuarios.routes.js";

const generalRouter = Router();

generalRouter.get('/:tabla', general.getAll);

generalRouter.use('/categorias', categoriaRouter);
generalRouter.use('/usuarios',usuarioRouter);

export default generalRouter;