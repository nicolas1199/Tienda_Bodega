import { Categorias } from '../models/categorias.model.js';
import {
  crearCategoriaValidation,
  updateCategoriaValidation,
} from '../validations/categorias.validation.js';

export const createCategoria = {
  create: (req, res) => {
    const { nombre_categoria } = req.body;

    const { error } = crearCategoriaValidation(req.body);

    if (error) {
      return res.status(400).send(error.details[0].message);
    }

    const nuevaCategoria = {
      nombre_categoria: nombre_categoria,
    };

    Categorias.create(nuevaCategoria);

    res.redirect(`api/loger/${req.params.rut}/${req.params.mail}/categorias`);
  },
  update: (req, res) => {
    const { nombre_categoria } = req.body;

    const { error } = updateCategoriaValidation(req.body);

    if (error) {
      return res.status(400).send(error.details[0].message);
    }

    Categorias.update(req.params.id, nombre_categoria);

    res.redirect(`api/loger/${req.params.rut}/${req.params.mail}/categorias`);
  },
  delete: (req, res) => {
    Categorias.delete(req.params.id);

    res.redirect(`api/loger/${req.params.rut}/${req.params.mail}/categorias`);
  },
};
