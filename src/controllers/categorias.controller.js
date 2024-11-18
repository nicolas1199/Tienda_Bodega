
import { Categorias } from "../models/categorias.model.js";

export const createCategoria = {
    create: (req, res) => {
        const categoria = {
            nombre_categoria: req.body.nombre_categoria
        }
        const rows = Categorias.create(categoria);

        res.redirect('../');
    },
    update: (req, res) => {
        Categorias.update(req.params.id, req.body.nombre_categoria)

        res.redirect('../../');
    },
    delete: (req, res) => {
        Categorias.delete(req.params.id);
        res.redirect('../../');
    }
}

