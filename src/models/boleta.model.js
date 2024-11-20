import db from '../config/configDb.js';

export const Boletas = {
  getAll: async () => {
    const [rows] = await db.query(`SELECT * FROM Boletas, Usuarios, Materiales
                                  WHERE Boletas.id_material=Materiales.id_material
                                  && Boletas.rut = Usuarios.rut`);
    return rows;
  },

  getByRut: async (rut) => {
    const [rows] = await db.query(`SELECT * FROM Boletas, Usuarios, Materiales
                                  WHERE Boletas.id_material=Materiales.id_material
                                  && Boletas.rut = Usuarios.rut
                                  && rut = '${rut}'`);
    return rows;
  },

  create: async (boleta) => {
    const { id_material,
      rut,
      cantidad,
      precio,
      fecha,
      hora
    } = boleta;
    const [result] = await db.query(
      'INSERT INTO Boletas (id_material, rut, cantidad, precio, fecha, hora) VALUES (?, ?, ?, ?, ?, ?)',
      [id_material, rut, cantidad, precio, fecha, hora],
    );
    return result.insertId;
  },

  update: async (rut, boleta) => {
    const { id_material, cantidad, precio, fecha, hora } = boleta;
    await db.query(
      'UPDATE Boletas SET id_material = ?, cantidad = ?, precio = ?, fecha = ?, hora = ? WHERE rut = ?',
      [id_material, cantidad, precio, fecha, hora, rut],
    );
  },

  delete: async (rut) => {
    await db.query('DELETE FROM Boletas WHERE rut = ?', [rut]);
  },
};
