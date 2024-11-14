import db from '../config/configDb.js';

export const Carritos = {
  getAll: async () => {
    const [rows] = await db.query('SELECT * FROM Carritos');
    return rows;
  },

  getById: async (id) => {
    const [rows] = await db.query('SELECT * FROM Carritos WHERE id_ca = ?', [
      id,
    ]);
    return rows[0];
  },

  create: async (carrito) => {
    const { id_material, rut, cantidad, precio } = carrito;
    const [result] = await db.query(
      'INSERT INTO Carritos (id_material, rut, cantidad, precio) VALUES (?, ?, ?, ?)',
      [id_material, rut, cantidad, precio],
    );
    return result.insertId;
  },

  update: async (id_ca, carrito) => {
    const { id_material, rut, cantidad, precio } = carrito;
    await db.query(
      'UPDATE Carritos SET id_material = ?, rut = ?, cantidad = ?, precio = ? WHERE id_ca = ?',
      [id_material, rut, cantidad, precio, id_ca],
    );
  },

  delete: async (id_ca) => {
    await db.query('DELETE FROM Carritos WHERE id_ca = ?', [id_ca]);
  },
};
