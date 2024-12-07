import { Usuarios } from '../models/usuarios.model.js';
import {
  crearUsuarioValidation,
  updateUsuarioValidation,
} from '../validations/usuarios.validation.js';

export const createUsuario = {

  create: (req, res) => {
    try {
      const { rut, str_nombre, mail, clave, rol, str_dir, id_co } = req.body;
      const { error } = crearUsuarioValidation.validate(req.body);

      if (error) {
        return res.status(400).send(error.details[0].message);
      }

      const nuevoUsuario = {
        rut: rut,
        str_nombre: str_nombre,
        mail: mail,
        clave: clave,
        rol: rol,
        str_dir: str_dir,
        id_co: id_co,
      };
      Usuarios.create(nuevoUsuario);

      res.json({ message: 'Usuario creado correctamente.' });
    } catch (error) {
      console.error('Error al crear el usuario:', error);
      res.status(500).send('Hubo un problema al crear el usuario.');
    }
  },
  getAll: async (req, res) => {
    console.log('Solicitud GET a /usuarios recibida');
    try {
        const usuarios = await Usuarios.getAll();
        console.log('Usuarios obtenidos:', usuarios);
        res.status(200).json(usuarios);
    } catch (error) {
        console.error('Error al obtener usuarios:', error);
        res.status(500).send('Hubo un problema al obtener los usuarios.');
    }
  },
  update: (req, res) => {
    try {
      const { rut } = req.params;
      const { str_nombre, mail, clave, rol, str_dir, id_co } = req.body;

      const { error } = updateUsuarioValidation.validate(req.body);

      if (error) {
        return res.status(400).send(error.details[0].message);
      }

      const updateUsuario = {
        str_nombre: str_nombre,
        mail: mail,
        clave: clave,
        rol: rol,
        str_dir: str_dir,
        id_co: id_co,
      };
      Usuarios.update(rut, updateUsuario);

      res.redirect('/api/loged/usuarios');
    } catch (error) {
      console.error('Error al actualizar el usuario:', error);
      res.status(500).send('Hubo un problema al actualizar el usuario.');
    }
  },
  delete: (req, res) => {
    try {
      const { rut } = req.params;
      Usuarios.delete(rut);

      res.redirect('/api/loged/usuarios');
    } catch (error) {
      console.error('Error al eliminar el usuario:', error);
      res.status(500).send('Hubo un problema al eliminar el usuario.');
    }
  },
};
