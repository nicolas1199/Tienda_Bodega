import { Usuarios } from '../models/usuarios.model.js';
import {
  crearUsuarioValidation,
  updateUsuarioValidation,
} from '../validations/usuarios.validation.js';

export const createUsuario = {
  create: (req, res) => {
    const { rut, str_nombre, mail, clave, rol, str_dir, id_co } = req.body;
    const { error } = crearUsuarioValidation(req.body);

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

    res.redirect(`/api/loged/${req.params.rut}/${req.params.mail}/usuarios`);
  },
  update: (req, res) => {
    const { rut } = req.params;
    const { str_nombre, mail, clave, rol, str_dir, id_co } = req.body;

    const { error } = updateUsuarioValidation(req.body);

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

    res.redirect(`/api/loged/${req.params.rut}/${req.params.mail}/usuarios`);
  },
  delete: (req, res) => {
    Usuarios.delete(req.params.vic);

    res.redirect(`/api/loged/${req.params.rut}/${req.params.mail}/usuarios`);
  },
};
