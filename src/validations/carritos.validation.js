import Joi from 'joi';

export const crearCarritoValidation = Joi.object({
  id_material: Joi.number().required(),
  rut: Joi.string().required(),
  cantidad: Joi.number().required(),
  precio: Joi.number().required(),
});

export const updateCarritoValidation = Joi.object({
  cantidad: Joi.number().required(),
  precio: Joi.number().required(),
});
