import db from '../config/configDb.js';
import { Boletas } from './boleta.model.js';
import { Ventas } from './ventas.model.js';

export const Carritos = {
  getAll: async () => {
    const [rows] =
      await db.query(`SELECT * FROM Carritos, Usuarios, Materiales,Categorias
                                  where Carritos.rut=Usuarios.rut
                                  && Carritos.id_material=Materiales.id_material
                                  && Materiales.id_categoria=Categorias.id_categoria`);
    return rows;
  },

  getByRut: async (rut) => {
    const [rows] = await db.query(
      `SELECT * FROM Carritos, Usuarios, Materiales,Categorias
                                  where Carritos.rut=Usuarios.rut
                                  && Carritos.id_material=Materiales.id_material
                                  && Materiales.id_categoria=Categorias.id_categoria
                                  && Carritos.rut = ?`,
      [rut],
    );
    return rows;
  },

  create: async (carrito) => {
    const { id_material, rut, cantidad, precio } = carrito;
    const [result] = await db.query(
      'INSERT INTO Carritos (id_material, rut, cantidad, precio) VALUES (?, ?, ?, ?)',
      [id_material, rut, cantidad, precio],
    );
    return result.insertId;
  },

  update: async (id_ca, rut, carrito) => {
    const { cantidad, precio } = carrito;
    await db.query(
      'UPDATE Carritos SET cantidad = ?, precio = ? WHERE id_ca = ? && rut = ?',
      [cantidad, precio, id_ca, rut],
    );
  },

  delete: async (id_ca, rut) => {
    await db.query('DELETE FROM Carritos WHERE id_ca = ? && rut = ?', [
      id_ca,
      rut,
    ]);
  },

  buy: async (rut) => {
    let total = 0;
    const aux = new Date(),
      fecha = `${aux.getFullYear()}/${aux.getMonth()}/${aux.getDate()}`,
      hora = `${aux.getHours()}:${aux.getMinutes()}:${aux.getSeconds}`;

    const [comprado] = await Carritos.getByRut(rut);
    comprado.forEach((producto) => {
      db.query(
        `UPDATE materiales 
                SET inventario=inventario - ? 
                WHERE id_material=?`,
        [producto.cantidad, producto.id_material],
      );
      let boleta = {
        rut: rut,
        id_material: producto.id_material,
        cantidad: producto.cantidad,
        precio: producto.precio,
        fecha: fecha,
        hora: hora,
      };
      Boletas.create(boleta);
      total += producto.precio * producto.cantidad;
    });
    const nueva_venta = {
      rut: rut,
      total: total,
      fecha: fecha,
      hora: hora,
    };
    Ventas.create(nueva_venta);
    db.query('DELETE FROM Carritos WHERE rut = ?')[rut];
  },
};
