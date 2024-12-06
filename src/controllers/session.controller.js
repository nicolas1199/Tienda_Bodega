import session from '../models/session.model.js';

export const sessionController = {
  getSession: async (req, res) => {
    try {
      if (req.body[0] !== null) {
        const sessionID = req.body[0];
        const sessionData = await session.get(sessionID);
        res.send(sessionData);
      } else {
        res.status(400).send('No se envió el sessionID');
      }
    } catch (error) {
      console.error('Error al obtener la sesión:', error);
      res.status(500).send('Hubo un problema al obtener la sesión.');
    }
  },
};

export default sessionController;
