import { Usuarios } from "../models/usuarios.model.js";

export const createUsuario = {
    getAll: (req, res) => {
        Usuarios.getAll().then((rows, err) => {
            try {

                res.json(rows);
            } catch (err) {
                res.json('error');
            }
        })
    },
    create: (req, res) => {
        const nuevo = {
            rut: req.body.rut,
            str_nombre: req.body.str_nombre,
            mail: req.body.mail,
            clave: 'aux',
            rol: req.body.rol,
            str_dir: req.body.str_dir,
            id_co: req.body.id_co,
        }
        Usuarios.create(nuevo).then(() => {
            createUsuario.getAll;
        })
    },
    update: (req, res) => {
        const rut = req.body.rut;
        const nuevo = {
            str_nombre: req.body.str_nombre,
            mail: req.body.mail,
            clave: 'aux',
            rol: req.body.rol,
            str_dir: req.body.str_dir,
            id_co: req.body.id_co,
        }
        Usuarios.update(rut,nuevo).then(()=>{
            createUsuario.getAll;
        })
    },
    delete: (req,res) =>{
        Usuarios.delete(req.params.rut).then(()=>{
            createUsuario.getAll;
        })
    }
}
