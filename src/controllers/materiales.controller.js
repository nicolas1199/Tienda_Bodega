import { Materiales } from '../models/materiales.model.js';
import {
  crearMaterialValidation,
  updateMaterialValidation,
} from '../validations/materiales.validation.js';

export const productos = {
  create: (req, res) => {
    const {
      precio_compra,
      precio_venta,
      inventario,
      nombre_material,
      id_categoria,
    } = req.body;

    const { error } = crearMaterialValidation.validate(req.body);
    if (error) {
      return res.status(400).json({ error: error.details[0].message });
    }

    const nuevoMaterial = {
      precio_venta: precio_venta,
      precio_compra: precio_compra,
      inventario: inventario,
      nombre_material: nombre_material,
      id_categoria: id_categoria,
    };
    Materiales.create(nuevoMaterial);
    res.render(`/api/loged/${req.params.rut}/${req.params.mail}/materiales`);
  },
  update: (req, res) => {
    const {
      precio_venta,
      precio_compra,
      inventario,
      nombre_material,
      id_categoria,
    } = req.body;

    const { error } = updateMaterialValidation.validate(req.body);

    if (error) {
      return res.status(400).json({ error: error.details[0].message });
    }

    const updateMaterial = {
      precio_venta: precio_venta,
      precio_compra: precio_compra,
      inventario: inventario,
      nombre_material: nombre_material,
      id_categoria: id_categoria,
    };

    Materiales.update(req.params.id, updateMaterial);
    res.render(`/api/loged/${req.params.rut}/${req.params.mail}/materiales`);
  },
  delete: (req, res) => {
    Materiales.delete(req.params.id);
    res.render(`/api/loged/${req.params.rut}/${req.params.mail}/materiales`);
  },
};
