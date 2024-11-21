import db from '../config/configDb.js';
import { loginValidation } from '../validations/usuarios.validation.js';

export const login = {
  get: (req, res) => {
    res.render('login');
  },
  verif: (req, res) => {
    const { mail, clave } = req.body;

    const { error } = loginValidation(req.body);

    if (error) {
      return res.status(400).send(error.details[0].message);
    }

    const rows = db.query(
      `select * from Usuarios
                            where clave = ?
                            && mail = ?`,
      [clave, mail],
    );
    rows.then((msg) => {
      res.redirect(
        msg[0] ? `../loged/${msg[0][0].rut}/${msg[0][0].mail}/usuarios` : './',
      );
    });
  },
};
