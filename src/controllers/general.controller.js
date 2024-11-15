import { Boletas } from "../models/boleta.model.js";
import { Carritos } from "../models/carritos.model.js";
import { Categorias } from "../models/categorias.model.js";
import { Materiales } from "../models/materiales.model.js";
import { Usuarios } from "../models/usuarios.model.js"
import { Ventas } from "../models/ventas.model.js";

export const general = {
    getAll: async (req, res) => {
        const usr = await Usuarios.getAll()
        const mat = await Materiales.getAll()
        const cat = await Categorias.getAll()
        const car = await Carritos.getAll()
        const bol = await Boletas.getAll()
        const ven = await Ventas.getAll()
        res.render((req.params.tabla), {
            usuarios: usr,
            materiales: mat,
            categorias: cat,
            carrito: car,
            boletas: bol,
            ventas: ven
        });
    }
}