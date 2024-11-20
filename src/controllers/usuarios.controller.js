import { Usuarios } from "../models/usuarios.model.js";

export const createUsuario = {
    
    create: (req, res) => {
        console.log(req.body)
        const nuevo = {
            rut: req.body.rut,
            str_nombre: req.body.str_nombre,
            mail: req.body.mail,
            clave: 'aux',
            rol: req.body.rol,
            str_dir: req.body.str_dir,
            id_co: req.body.id_co,
        }
        Usuarios.create(nuevo)
        
        res.redirect(`/api/loged/${req.params.rut}/${req.params.mail}/usuarios`)
    },
    update: (req, res) => {
        console.log(req.body);
        
        const rut = req.params.run;
        const nuevo = {
            str_nombre: req.body.str_nombre,
            mail: req.body.mail,
            clave: 'aux',
            rol: req.body.rol,
            str_dir: req.body.str_dir,
            id_co: req.body.id_co,
        }
        Usuarios.update(rut,nuevo)
        
        res.redirect(`/api/loged/${req.params.rut}/${req.params.mail}/usuarios`)
    },
    delete: (req,res) =>{
        Usuarios.delete(req.params.vic)
        
        res.redirect(`/api/loged/${req.params.rut}/${req.params.mail}/usuarios`)
    }
}
