import { Carritos } from '../models/carritos.model.js';
import {
  crearCarritoValidation,
  updateCarritoValidation,
} from '../validations/carritos.validation.js';

export const Carro = {
  create: (req, res) => {
    const { id_material, rut, cantidad, precio } = req.body;

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

    Carritos.create(nuevoCarro);

    res.redirect(`/api/loged/${req.params.rut}/${req.params.mail}/materiales`);
  },
  update: (req, res) => {
    const { cantidad, precio } = req.body;
    const { id, rut } = req.params;

    const { error } = updateCarritoValidation.validate(req.body);

    if (error) {
      return res.status(400).send(error.details[0].message);
    }

    const updateCarrito = {
      cantidad: cantidad,
      precio: precio,
    };
    Carritos.update(id, rut, updateCarrito);

    res.redirect(`/api/loged/${req.params.rut}/${req.params.mail}/carrito`);
  },
  delete: (req, res) => {
    Carritos.delete(req.params.id, req.params.rut);

    res.redirect(`/api/loged/${req.params.rut}/${req.params.mail}/carrito`);
  },
  buy: (req, res) => {
    Carritos.buy(req.params.rut);

    res.redirect(`/api/loged/${req.params.rut}/${req.params.mail}/carrito`);
  },
};
