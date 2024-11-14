import db from '../config/configDb.js';

export const Ventas = {
  getAll: async () => {
    const [rows] = await db.query('SELECT * FROM Ventas');
    return rows;
  },

  getById: async (id) => {
    const [rows] = await db.query('SELECT * FROM Ventas WHERE id_venta = ?', [
      id,
    ]);
    return rows[0];
  },

  create: async (venta) => {
    const { rut, total, fecha, hora } = venta;
    const [result] = await db.query(
      'INSERT INTO Ventas (rut, total, fecha, hora) VALUES (?, ?, ?, ?)',
      [rut, total, fecha, hora],
    );
    return result.insertId;
  },

  update: async (id, venta) => {
    const { rut, total, fecha, hora } = venta;
    await db.query(
      'UPDATE Ventas SET rut = ?, total = ?, fecha = ?, hora = ? WHERE id_venta = ?',
      [rut, total, fecha, hora, id],
    );
  },

  delete: async (id) => {
    await db.query('DELETE FROM Ventas WHERE id_venta = ?', [id]);
  },
};
