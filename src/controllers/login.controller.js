import db from '../config/configDb.js';
import { Ingresado } from '../models/Ingresado.model.js';
import { Usuarios } from '../models/usuarios.model.js';
import { loginValidation } from '../validations/usuarios.validation.js';

export const login = {
  get: (req, res) => {
    Ingresado.LogOut();
    res.render('login');

  },
  verif: (req, res) => {
    try {
      const { mail, clave } = req.body;

      const { error } = loginValidation.validate(req.body);

      if (error) {
        return res.status(400).send(error.details[0].message);
      }

      const rows = Ingresado.verif(mail,clave);

      rows.then((msg)=>{
        console.log(msg[0]);
        
        Ingresado.login(msg[0]);
      })
      res.redirect('../loged/usuarios')
      
    } catch (error) {
      console.error('Error al verificar el usuario:', error);
      res.status(500).send('Hubo un problema al verificar el usuario.');
    }
  },
};
