import Joi from 'joi';

export const crearMaterialValidation = Joi.object({
  precio_compra: Joi.number().required(),
  precio_venta: Joi.number().required(),
  inventario: Joi.number().required(),
  nombre_material: Joi.string().required(),
  id_categoria: Joi.number().required(),
});

export const updateMaterialValidation = Joi.object({
  precio_compra: Joi.number().required(),
  precio_venta: Joi.number().required(),
  inventario: Joi.number().required(),
  nombre_material: Joi.string().required(),
  id_categoria: Joi.number().required(),
});
