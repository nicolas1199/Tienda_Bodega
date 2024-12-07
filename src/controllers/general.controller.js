import db from '../config/configDb.js';
import { Boletas } from '../models/boleta.model.js';
import { Carritos } from '../models/carritos.model.js';
import { Categorias } from '../models/categorias.model.js';
import { Comunas } from '../models/comunas.model.js';
import { Ingresado } from '../models/Ingresado.model.js';
import { Materiales } from '../models/materiales.model.js';
import { Usuarios } from '../models/usuarios.model.js';
import { Ventas } from '../models/ventas.model.js';

export const general = {
  getAll: async (req, res) => {
    
    const rows = await Ingresado.getUser()
    if (rows) {
    res.json({
      persona: rows,
      usuarios: await Usuarios.getAll(),
      materiales: await Materiales.getAll(),
      categorias: await Categorias.getAll(),
      carrito: await Carritos.getByRut(rows.rut),
      boletas: await Boletas.getAll(),
      ventas: await Ventas.getAll(),
      comunas: await Comunas.getAll(),
    });
    } else {
      res.redirect('/api/login');
    }
  },
};
