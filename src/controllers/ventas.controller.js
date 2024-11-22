
import { Ventas } from '../models/ventas.model.js';

export const ventas = {
  // Crear una nueva venta
  create: async (req, res) => {
    try {
      const nuevaVenta = {
        rut: req.params.rut,
        total: req.body.total,
        fecha: new Date().toISOString().split('T')[0], // Fecha actual (sin hora)
        hora: new Date(), // Hora actual
      };

      // Crear la venta en la base de datos
      const ventaId = await Ventas.create(nuevaVenta);

      // Redirigir a la vista de ventas después de crearla
      res.redirect(`/api/loged/${req.params.rut}/${req.params.mail}/ventas`);
    } catch (error) {
      console.error('Error al crear la venta:', error);
      res.status(500).send('Hubo un problema al crear la venta.');
    }
  },

  // Obtener todas las ventas
  getAll: async (req, res) => {
    try {
      const ventas = await Ventas.getAll();

      // Si no se encuentran ventas, enviar mensaje de error
      if (ventas.length === 0) {
        return res.status(404).send('No se encontraron ventas.');
      }

      // Renderizar la vista de ventas con la lista de ventas
      res.render('ventas', {
        ventas: ventas,
        usuario: req.params.rut,
      });
    } catch (error) {
      console.error('Error al obtener las ventas:', error);
      res.status(500).send('Hubo un problema al obtener las ventas.');
    }
  },

  // Obtener una venta por su id
  getById: async (req, res) => {
    try {
      const venta = await Ventas.getById(req.params.id);

      // Si no se encuentra la venta, enviar mensaje de error
      if (!venta) {
        return res.status(404).send('Venta no encontrada.');
      }

      // Renderizar la vista con la venta
      res.render('ventaDetalle', {
        venta: venta,
        usuario: req.params.rut,
      });
    } catch (error) {
      console.error('Error al obtener la venta:', error);
      res.status(500).send('Hubo un problema al obtener la venta.');
    }
  },

  // Actualizar una venta por su id
  update: async (req, res) => {
    try {
      const ventaActualizada = {
        rut: req.params.rut,
        total: req.body.total,
        fecha: req.body.fecha || new Date().toISOString().split('T')[0], // Si no se pasa fecha, usar la actual
        hora: req.body.hora || new Date(), // Si no se pasa hora, usar la actual
      };

      // Actualizar la venta en la base de datos
      await Ventas.update(req.params.id, ventaActualizada);

      // Redirigir a la lista de ventas después de la actualización
      res.redirect(`/api/loged/${req.params.rut}/${req.params.mail}/ventas`);
    } catch (error) {
      console.error('Error al actualizar la venta:', error);
      res.status(500).send('Hubo un problema al actualizar la venta.');
    }
  },

  // Eliminar una venta por su id
  delete: async (req, res) => {
    try {
      await Ventas.delete(req.params.id);

      // Redirigir a la lista de ventas después de eliminarla
      res.redirect(`/api/loged/${req.params.rut}/${req.params.mail}/ventas`);
    } catch (error) {
      console.error('Error al eliminar la venta:', error);
      res.status(500).send('Hubo un problema al eliminar la venta.');
    }
  },
};
