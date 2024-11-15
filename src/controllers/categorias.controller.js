
import { Categorias } from "../models/categorias.model.js";
import { Usuarios } from "../models/usuarios.model.js";

export const createCategoria = {
    getAll: (req,res)=>{Categorias.getAll().then((rows,err)=>{
        try {
            
            res.json('categorias')
        } catch (err) {
            res.json('error');
        }
    })}
}

