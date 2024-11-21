import { Categorias } from '../models/categorias.model.js';
import {
  crearCategoriaValidation,
  updateCategoriaValidation,
} from '../validations/categorias.validation.js';

export const createCategoria = {
  create: (req, res) => {
    try {
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
    } catch (error) {
      console.error('Error al crear la categoria:', error);
      res.status(500).send('Hubo un problema al crear la categoria.');
    }
  },
  update: (req, res) => {
    try {
      const { nombre_categoria } = req.body;

      const { error } = updateCategoriaValidation(req.body);

      if (error) {
        return res.status(400).send(error.details[0].message);
      }

      Categorias.update(req.params.id, nombre_categoria);

      res.redirect(`api/loger/${req.params.rut}/${req.params.mail}/categorias`);
    } catch (error) {
      console.error('Error al actualizar la categoria:', error);
      res.status(500).send('Hubo un problema al actualizar la categoria.');
    }
  },
  delete: (req, res) => {
    try {
      const { id, rut, mail } = req.params;

      Categorias.delete(id);

      res.redirect(`api/loger/${rut}/${mail}/categorias`);
    } catch (error) {
      console.error('Error al eliminar la categoria:', error);
      res.status(500).send('Hubo un problema al eliminar la categoria.');
    }
  },
};
