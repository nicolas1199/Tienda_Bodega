import { Categorias } from '../models/categorias.model.js';

export const createCategoria = async (req, res) => {
  try {
    const { nombre } = req.body;

    const newCategoria = {
      nombre_categoria: nombre,
    };

    const id = await Categorias.create(newCategoria);

    res.status(201).json({ message: 'Categoría creada', id });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getCategorias = async (req, res) => {
  try {
    const categorias = await Categorias.getAll();

    if (categorias.length === 0) {
      return res.status(404).json({ error: 'No hay categorías' });
    }

    res.status(200).json(categorias);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const updateCategoria = async (req, res) => {
  try {
    const { nombre } = req.body;
    const id = req.params.id;

    const categoria = await Categorias.getById(id);

    if (!categoria) {
      return res.status(404).json({ error: 'La categoría no existe' });
    }

    const updatedCategoria = {
      nombre_categoria: nombre,
    };

    await Categorias.update(id, updatedCategoria);
    res.status(204).end();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const deleteCategoria = async (req, res) => {
  try {
    const id = req.params.id;
    const categoria = await Categorias.getById(id);

    if (!categoria) {
      return res.status(404).json({ error: 'La categoría no existe' });
    }

    await Categorias.delete(id);

    res.status(204).end();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
