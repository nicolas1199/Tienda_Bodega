import { Boletas } from "../models/boleta.model.js";
import { Carritos } from "../models/carritos.model.js";
import { Categorias } from "../models/categorias.model.js";
import { Materiales } from "../models/materiales.model.js";
import { Usuarios } from "../models/usuarios.model.js"
import { Ventas } from "../models/ventas.model.js";

export const general = {
    getAll: (req, res) => {
        Usuarios.getAll().then((usr, err) => {
            Materiales.getAll().then((mat) => {
                Categorias.getAll().then((cat) => {
                    Carritos.getAll().then((car) => {
                        Boletas.getAll().then((bol) => {
                            Ventas.getAll().then((ven)=>{
                                res.render((req.params.tabla), {
                                    usuarios: usr,
                                    materiales: mat,
                                    categorias: cat,
                                    carrito:car,
                                    boletas:bol,
                                    ventas:ven
                                });//nota: modificar para renderizar
                            })
                        })
                    })
                })
            })
        })
    }
    
}