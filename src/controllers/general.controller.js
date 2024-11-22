import db from '../config/configDb.js';
import { Boletas } from '../models/boleta.model.js';
import { Carritos } from '../models/carritos.model.js';
import { Categorias } from '../models/categorias.model.js';
import { Comunas } from '../models/comunas.model.js';
import { Materiales } from '../models/materiales.model.js';
import { Usuarios } from '../models/usuarios.model.js';
import { Ventas } from '../models/ventas.model.js';

export const general = {
  getAll: async (req, res) => {
    const [rows] = await db.query(
      `select * from Usuarios where rut = ? && mail = ?`,
      [req.params.rut, req.params.mail]
    );
    console.log(rows);

    if (rows != '') {
      res.render(req.params.tabla, {
        persona: rows,
        usuarios: await Usuarios.getAll(),
        materiales: await Materiales.getAll(),
        categorias: await Categorias.getAll(),
        carrito: await Carritos.getByRut(req.params.rut),
        boletas: await Boletas.getAll(),
        ventas: await Ventas.getAll(),
        comunas: await Comunas.getAll(),
      });
    } else {
      res.redirect('/api/login');
    }
  },
};
