import { Carritos } from '../models/carritos.model.js';
import {
  crearCarritoValidation,
  updateCarritoValidation,
} from '../validations/carritos.validation.js';

export const Carro = {
  create: async (req, res) => {
    try {
      const { id_material, rut, cantidad, precio } = req.body;
      const { mail } = req.params;

      const { error } = crearCarritoValidation.validate(req.body);

      if (error) {
        return res.status(400).send(error.details[0].message);
      }

      const nuevoCarro = {
        id_material: id_material,
        rut: rut,
        cantidad: cantidad,
        precio: precio,
      };

      await Carritos.create(nuevoCarro);

      res.redirect(`/api/loged/${req.params.rut}/${mail}/materiales`);
    } catch (error) {
      console.error('Error al crear:', error);
      res.status(500).send('Hubo un problema al crear.');
    }
  },
  update: async (req, res) => {
    try {
      const { cantidad, precio } = req.body;
      const { id, rut, mail } = req.params;

      const { error } = updateCarritoValidation.validate(req.body);

      if (error) {
        return res.status(400).send(error.details[0].message);
      }

      const updateCarrito = {
        cantidad: cantidad,
        precio: precio,
      };

      await Carritos.update(id, rut, updateCarrito);

      res.redirect(`/api/loged/${rut}/${mail}/carrito`);
    } catch (error) {
      console.error('Error al actualizar:', error);
      res.status(500).send('Hubo un problema al actualizar.');
    }
  },
  delete: async (req, res) => {
    try {
      const { id, rut, mail } = req.params;

      await Carritos.delete(id, rut);

      res.redirect(`/api/loged/${rut}/${mail}/carrito`);
    } catch (error) {
      console.error('Error al eliminar:', error);
      res.status(500).send('Hubo un problema al eliminar.');
    }
  },
  buy: async (req, res) => {
    try {
      const { rut, mail } = req.params;
      await Carritos.buy(rut);

      res.redirect(`/api/loged/${rut}/${mail}/carrito`);
    } catch (error) {
      console.error('Error al comprar:', error);
      res.status(500).send('Hubo un problema al comprar.');
    }
  },
};
