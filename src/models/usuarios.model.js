import db from '../config/configDb.js';

export const Usuarios = {
  getAll: async () => {
    const [rows] = await db.query('SELECT * FROM Usuarios');
    return rows;
  },

  getById: async (rut) => {
    const [rows] = await db.query('SELECT * FROM Usuarios WHERE rut = ?', [
      rut,
    ]);
    return rows[0];
  },

  create: async (usuario) => {
    const { rut, str_nombre, mail, clave, rol, str_dir, id_co } = usuario;
    const [result] = await db.query(
      'INSERT INTO Usuarios (rut, str_nombre, mail, clave, rol, str_dir, id_co) VALUES (?, ?, ?, ?, ?, ?, ?)',
      [rut, str_nombre, mail, clave, rol, str_dir, id_co],
    );
    return result.insertId;
  },

  update: async (rut, usuario) => {
    const { str_nombre, mail, clave, rol, str_dir, id_co } = usuario;
    await db.query(
      'UPDATE Usuarios SET str_nombre = ?, mail = ?, clave = ?, rol = ?, str_dir = ?, id_co = ? WHERE rut = ?',
      [str_nombre, mail, clave, rol, str_dir, id_co, rut],
    );
  },

  delete: async (rut) => {
    await db.query('DELETE FROM Usuarios WHERE rut = ?', [rut]);
  },
};
