import { Materiales } from '../models/materiales.model';

export const productos = {
  create: (req, res) => {
    const nuevo = {
      precio_venta: req.body.precio_venta,
      precio_compra: req.body.precio_compra,
      inventario: req.body.inventario,
      nombre_material: req.body.nombre_material,
      id_categoria: req.body.id_categoria,
    };
    Materiales.create(nuevo);
    res.render(`/api/loged/${req.params.rut}/${req.params.mail}/materiales`);
  },
  update: (req, res) => {
    const alterado = {
      precio_venta: req.body.precio_venta,
      precio_compra: req.body.precio_compra,
      inventario: req.body.inventario,
      nombre_material: req.body.nombre_material,
      id_categoria: req.body.id_categoria,
    };
    Materiales.update(req.params.id, alterado);
    res.render(`/api/loged/${req.params.rut}/${req.params.mail}/materiales`);
  },
  delete: (req, res) => {
    Materiales.delete(req.params.id);
    res.render(`/api/loged/${req.params.rut}/${req.params.mail}/materiales`);
  },
};
