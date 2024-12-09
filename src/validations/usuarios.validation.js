import Joi from 'joi';

export const crearUsuarioValidation = Joi.object({
  rut: Joi.string().required(),
  str_nombre: Joi.string().required(),
  mail: Joi.string().email().required(),
  clave: Joi.string().required(),
  rol: Joi.string().required(),
  str_dir: Joi.string().required(),
  id_co: Joi.number().required(),
});

export const updateUsuarioValidation = Joi.object({
  rut: Joi.string().required(),
  str_nombre: Joi.string().required(),
  mail: Joi.string().email().required(),
  rol: Joi.string().required(),
  clave: Joi.string().required(),
  str_dir: Joi.string().required(),
  id_co: Joi.number().required(),
});

export const loginValidation = Joi.object({
  mail: Joi.string().email().required(),
  clave: Joi.string().required(),
});
