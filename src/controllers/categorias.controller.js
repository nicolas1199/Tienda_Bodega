import { Categorias } from '../models/categorias.model.js';
import {
  crearCategoriaValidation,
  updateCategoriaValidation,
} from '../validations/categorias.validation.js';

export const createCategoria = {
  create: (req, res) => {
    try {
      const { nombre_categoria } = req.body;

      const { error } = crearCategoriaValidation.validate(nombre_categoria);

      if (error) {
        return res.status(400).send(error.details[0].message);
      }

      const nuevaCategoria = {
        nombre_categoria: nombre_categoria,
      };

      Categorias.create(nuevaCategoria);

      res.redirect('api/loged/categorias');
    } catch (error) {
      console.error('Error al crear la categoria:', error);
      res.status(500).send('Hubo un problema al crear la categoria.');
    }
  },
  getAll: async (req, res) => {
    try {
      const categorias = await Categorias.getAll();

      res.send(categorias);
    } catch (error) {
      console.error('Error al obtener las categorias:', error);
      res.status(500).send('Hubo un problema al obtener las categorias.');
    }
  },
  update: (req, res) => {
    try {
      const { nombre_categoria } = req.body;

      const { error } = updateCategoriaValidation.validate(req.body);

      if (error) {
        return res.status(400).send(error.details[0].message);
      }

      Categorias.update(req.params.id, nombre_categoria);

      res.redirect('api/loged/categorias');
    } catch (error) {
      console.error('Error al actualizar la categoria:', error);
      res.status(500).send('Hubo un problema al actualizar la categoria.');
    }
  },
  delete: (req, res) => {
    try {
      const { id, rut, mail } = req.params;

      Categorias.delete(id);

      res.redirect('api/loged/categorias');
    } catch (error) {
      console.error('Error al eliminar la categoria:', error);
      res.status(500).send('Hubo un problema al eliminar la categoria.');
    }
  },
};
