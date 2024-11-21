import { Boleta } from '../models/boleta.model.js';

export const Boletas = {
  getAll: async (req, res) => {
    const boletas = await Boleta.getAll();
    res.json(boletas);
  },

  getByRut: async (req, res) => {
    const boletas = await Boleta.getByRut(req.params.rut);
    res.json(boletas);
  },

  create: async (req, res) => {
    const { id_material, rut, cantidad, precio, fecha, hora } = req.body;
    const id = await Boleta.create({
      id_material,
      rut,
      cantidad,
      precio,
      fecha,
      hora,
    });
    res.json({ id });
  },

  update: async (req, res) => {
    const { id_material, cantidad, precio, fecha, hora } = req.body;
    await Boleta.update(req.params.rut, {
      id_material,
      cantidad,
      precio,
      fecha,
      hora,
    });
    res.json({ message: 'Boleta updated' });
  },

  delete: async (req, res) => {
    await Boleta.delete(req.params.rut);
    res.json({ message: 'Boleta deleted' });
  },
};
