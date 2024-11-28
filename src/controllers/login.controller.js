import { Ingresado } from '../models/Ingresado.model.js';
import { loginValidation } from '../validations/usuarios.validation.js';

export const login = {
  get: (req, res) => {
    Ingresado.LogOut();
    console.log('Sin usuario ingresado');
  },
  verif: (req, res) => {
    try {
      const { mail, clave } = req.body;

      const { error } = loginValidation.validate(req.body);

      if (error) {
        return res.status(400).send(error.details[0].message);
      }
      Ingresado.LogOut();
      const rows = Ingresado.verif(mail,clave);

      rows.then((msg)=>{
        
        Ingresado.login(msg[0]);
        console.log('Ingresado');
        return res.redirect('/api/loged/materiales')
      })
      
    } catch (error) {
      console.error('Error al verificar el usuario:', error);
      res.status(500).send('Hubo un problema al verificar el usuario.');
    }
  },
};
