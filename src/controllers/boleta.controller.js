import { Boletas } from "../models/boleta.model.js";
import { Carritos } from "../models/carritos.model.js";

export const boletas = {
    // Crear una boleta
    create: async (req, res) => {
        try {
            const carrito = await Carritos.getByRut(req.params.rut);
            
            // Si el carrito está vacío, no se puede generar una boleta
            if (carrito.length === 0) {
                return res.status(400).send("El carrito está vacío, no se puede generar la boleta.");
            }

            // Crear boleta para cada material en el carrito
            const boletasData = carrito.map(item => {
                return {
                    id_material: item.id_material,
                    rut: req.params.rut,
                    cantidad: item.cantidad,
                    precio: item.precio,
                    fecha: new Date().toISOString().split('T')[0], // Obtener la fecha actual
                    hora: new Date(),
                };
            });

            // Insertar boletas en la base de datos
            for (const boleta of boletasData) {
                await Boletas.create(boleta);
            }

            // Limpiar el carrito después de la compra
            await Carritos.clear(req.params.rut);

            // Redirigir a la página de la boleta
            res.redirect(`/api/loged/${req.params.rut}/${req.params.mail}/boletas`);
        } catch (error) {
            console.error("Error al crear la boleta:", error);
            res.status(500).send("Hubo un problema al generar la boleta.");
        }
    },

    // Obtener todas las boletas de un usuario
    getAll: async (req, res) => {
        try {
            const boletas = await Boletas.getByRut(req.params.rut);
            
            // Si no hay boletas para el usuario, enviar un mensaje
            if (boletas.length === 0) {
                return res.status(404).send("No se encontraron boletas para este usuario.");
            }

            // Renderizar las boletas en la vista
            res.render('boletas', {
                boletas: boletas,
                usuario: req.params.rut,
            });
        } catch (error) {
            console.error("Error al obtener las boletas:", error);
            res.status(500).send("Hubo un problema al obtener las boletas.");
        }
    },

    // Eliminar una boleta por su id
    delete: async (req, res) => {
        try {
            const boletaId = req.params.id;
            await Boletas.delete(boletaId);

            // Redirigir a la página de boletas después de la eliminación
            res.redirect(`/api/loged/${req.params.rut}/${req.params.mail}/boletas`);
        } catch (error) {
            console.error("Error al eliminar la boleta:", error);
            res.status(500).send("Hubo un problema al eliminar la boleta.");
        }
    }
};