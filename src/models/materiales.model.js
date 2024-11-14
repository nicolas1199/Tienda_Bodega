import db from '../config/configDb.js';

export const Materiales = {
  getAll: async () => {
    const [rows] = await db.query('SELECT * FROM Materiales');
    return rows;
  },

  getById: async (id) => {
    const [rows] = await db.query(
      'SELECT * FROM Materiales WHERE id_material = ?',
      [id],
    );
    return rows[0];
  },

  create: async (material) => {
    const {
      precio_venta,
      precio_compra,
      inventario,
      nombre_material,
      id_categoria,
    } = material;
    const [result] = await db.query(
      'INSERT INTO Materiales (precio_venta, precio_compra, inventario, nombre_material, id_categoria) VALUES (?, ?, ?, ?, ?)',
      [precio_venta, precio_compra, inventario, nombre_material, id_categoria],
    );
    return result.insertId;
  },

  update: async (id, material) => {
    const {
      precio_venta,
      precio_compra,
      inventario,
      nombre_material,
      id_categoria,
    } = material;
    await db.query(
      'UPDATE Materiales SET precio_venta = ?, precio_compra = ?, inventario = ?, nombre_material = ?, id_categoria = ? WHERE id_material = ?',
      [
        precio_venta,
        precio_compra,
        inventario,
        nombre_material,
        id_categoria,
        id,
      ],
    );
  },

  delete: async (id) => {
    await db.query('DELETE FROM Materiales WHERE id_material = ?', [id]);
  },
};
