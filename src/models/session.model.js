import db from '../config/configDb.js';

export const session = {
  get: async (sessionID) => {
    const [rows] = await db.query(
      'SELECT * FROM sessions WHERE session_id = ?',
      [sessionID],
    );
    return rows[0];
  },
};

export default session;
