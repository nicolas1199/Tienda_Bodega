import { Carritos } from "../models/carritos.model.js"

export const Carro = {
    create: (req, res) => {

        let nuevo = {
            id_material: req.params.id,
            rut: req.params.rut,
            cantidad: req.params.cantidad,
            precio: req.params.precio
        }
        Carritos.create(nuevo)

        res.redirect(`/api/loged/${req.params.rut}/${req.params.mail}/materiales`,)

    },
    update: (req, res) => {
        let nuevo = {
            cantidad: req.body.cantidad,
            precio: req.body.precio
        }
        Carritos.update(req.params.id, req.params.rut, nuevo)

        res.redirect(`/api/loged/${req.params.rut}/${req.params.mail}/carrito`,)

    },
    delete: (req, res) => {
        Carritos.delete(req.params.id, req.params.rut)

        res.redirect(`/api/loged/${req.params.rut}/${req.params.mail}/carrito`,)
        

    },
    buy: (req,res)=>{
        Carritos.buy(req.params.rut);

        res.redirect(`/api/loged/${req.params.rut}/${req.params.mail}/carrito`,)
    }
}