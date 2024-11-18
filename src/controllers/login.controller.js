import db from '../config/configDb.js';

export const login = {
  get: (req, res) => {
    res.render('login');
  },
  verif: (req, res) => {
    let msg;
    const rows = db.query(`select * from Usuarios
                            where clave='${req.body.clave}'
                            && mail='${req.body.mail}'`);
    rows.then((msg) => {
      res.redirect(
        msg[0] ? `../loged/${msg[0][0].rut}/${msg[0][0].mail}/usuarios` : './',
      );
    });
  },
};
