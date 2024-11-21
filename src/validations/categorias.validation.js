import Joi from 'joi';

export const crearCategoriaValidation = Joi.object({
  nombre_categoria: Joi.string().required(),
});

export const updateCategoriaValidation = Joi.object({
  nombre_categoria: Joi.string().required(),
});
