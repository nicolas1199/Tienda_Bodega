import { sessionStore } from '../index.js';
import { Usuarios } from '../models/usuarios.model.js';
import { loginValidation } from '../validations/usuarios.validation.js';

export const loginUser = {
  login: async (req, res) => {
    try {
      const { mail, clave } = req.body;

      const { error } = loginValidation.validate(req.body);

      if (error) {
        return res.status(400).send(error.details[0].message);
      }

      const user = await Usuarios.login(mail, clave);

      if (!user) {
        return res.status(400).send('Usuario o contraseña incorrectos.');
      }

      req.session.user = {
        mail: user.mail,
        rol: user.rol,
      };
      console.log(req.session);

      return res.send('Sesión iniciada.');
    } catch (error) {
      console.error('Error al iniciar sesión:', error);
      res.status(500).send('Hubo un problema al iniciar sesión.');
    }
  },
  logout: (req, res) => {
    console.log('Cerrando sesión:', req.session);
    req.session.destroy();
    sessionStore.close().then(() => console.log('Sesión cerrada.'));
    res.clearCookie('user').send('Sesión cerrada.');
  },
};
