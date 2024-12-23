import { Usuarios } from '../models/usuarios.model.js';
import {
  crearUsuarioValidation,
  updateUsuarioValidation,
} from '../validations/usuarios.validation.js';

export const createUsuario = {
  create: (req, res) => {
    try {
      const { rut, str_nombre, mail, clave, rol, str_dir, id_co } = req.body;

      const nuevoUsuario = {
        rut: rut,
        str_nombre: str_nombre,
        mail: mail,
        clave: clave,
        rol: rol,
        str_dir: str_dir,
        id_co: id_co,
      };

      const { error } = crearUsuarioValidation.validate(nuevoUsuario);

      if (error) {
        return res.status(400).send(error.details[0].message);
      }

      Usuarios.create(nuevoUsuario);

      res.json({ message: 'Usuario creado correctamente.' });
    } catch (error) {
      console.error('Error al crear el usuario:', error);
      res.status(500).send('Hubo un problema al crear el usuario.');
    }
  },
  getAll: async (req, res) => {
    try {
      const usuarios = await Usuarios.getAll();

      res.status(200).json(usuarios);
    } catch (error) {
      console.error('Error al obtener usuarios:', error);
      res.status(500).send('Hubo un problema al obtener los usuarios.');
    }
  },
  update: (req, res) => {
    try {
      const { rut, str_nombre, mail, clave, rol, str_dir, id_co } = req.body;

      const updateUsuario = {
        rut: rut,
        str_nombre: str_nombre,
        mail: mail,
        clave: clave,
        rol: rol,
        str_dir: str_dir,
        id_co: id_co,
      };

      const { error } = updateUsuarioValidation.validate(updateUsuario);

      if (error) {
        return res.status(400).send(error.details[0].message);
      }

      Usuarios.update(rut, updateUsuario);

      res.json({message: 'Usuario modificado'})
    } catch (error) {
      console.error('Error al actualizar el usuario:', error);
      res.status(500).send('Hubo un problema al actualizar el usuario.');
    }
  },
  delete: (req, res) => {
    try {
      const { rut } = req.params;
      Usuarios.delete(rut);
      res.json({message: "Usuario eliminado"})
    } catch (error) {
      console.error('Error al eliminar el usuario:', error);
      res.status(500).send('Hubo un problema al eliminar el usuario.');
    }
  },
};
