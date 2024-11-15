import { Categorias } from '../models/categorias.model.js';

export const createCategoria = async (req, res) => {
  try {
    const { nombre } = req.body;

    const newCategoria = {
      nombre_categoria: nombre,
    };
    const id = await Categorias.create(newCategoria);
    res.status(201).json({ id });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getCategorias = async (req, res) => {
  try {
    const categorias = await Categorias.getAll();
    res.status(200).json(categorias);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getCategoriaById = async (req, res) => {
  try {
    const categoria = await Categorias.getById(req.params.id);
    res.status(200).json(categoria);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
