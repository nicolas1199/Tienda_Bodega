import { Categorias } from '../models/categorias.model.js';

export const createCategoria = {
  create: (req, res) => {
    const categoria = {
      nombre_categoria: req.body.nombre_categoria,
    };
    Categorias.create(categoria);

    res.redirect(`api/loger/${req.params.rut}/${req.params.mail}/categorias`);
  },
  update: (req, res) => {
    Categorias.update(req.params.id, req.body.nombre_categoria);

    res.redirect(`api/loger/${req.params.rut}/${req.params.mail}/categorias`);
  },
  delete: (req, res) => {
    Categorias.delete(req.params.id);

    res.redirect(`api/loger/${req.params.rut}/${req.params.mail}/categorias`);
  },
};
