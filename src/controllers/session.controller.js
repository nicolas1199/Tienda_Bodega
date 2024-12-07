import session from '../models/session.model.js';

export const sessionController = {
  getSession: async (req, res) => {
    try {
      const { sessionID } = req.body;

      if (!sessionID) {
        return res.status(400).send('Se necesita un ID de sesión.');
      }

      const sessionIDBackend = await session.get(sessionID);

      const { session_id } = sessionIDBackend;

      if (sessionID !== session_id) {
        return res.status(401).send('No autorizado.');
      }

      res.json({ sessionID });
    } catch (error) {
      console.error('Error al obtener la sesión:', error);
      res.status(500).send('Hubo un problema al obtener la sesión.');
    }
  },
};

export default sessionController;
