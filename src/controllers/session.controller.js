import session from '../models/session.model.js';

export const sessionController = {
  getSession: async (req, res) => {
    try {
      if (req.session && req.session.user) {
        const sessionIDBackend = await session.get(req.session.id);

        if (!sessionIDBackend) {
          return res.status(401).send('No hay sesión activa');
        }

        return res.json({
          user: req.session.user,
        });
      } else {
        return res.status(401).send('No hay sesión activa');
      }
    } catch (error) {
      console.error('Error al obtener la sesión:', error);
      res.status(500).send('Hubo un problema al obtener la sesión.');
    }
  },
};

export default sessionController;
