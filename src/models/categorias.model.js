import db from '../config/configDb.js';

export const Categorias = {
  getAll: async () => {
    const [rows] = await db.query('SELECT * FROM Categorias');
    return rows;
  },

  getById: async (id) => {
    const [rows] = await db.query(
      'SELECT * FROM Categorias WHERE id_categoria = ?',
      [id],
    );
    return rows[0];
  },

  create: async (categoria) => {
    const { nombre_categoria } = categoria;
    const [result] = await db.query(
      'INSERT INTO Categorias (nombre_categoria) VALUES (?)',
      [nombre_categoria],
    );
    return result.insertId;
  },

  update: async (id, categoria) => {
    const { nombre_categoria } = categoria;
    await db.query(
      'UPDATE Categorias SET nombre_categoria = ? WHERE id_categoria = ?',
      [nombre_categoria, id],
    );
  },

  delete: async (id) => {
    await db.query('DELETE FROM Categorias WHERE id_categoria = ?', [id]);
  },
};
