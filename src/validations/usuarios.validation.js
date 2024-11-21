import Joi from 'joi';

export const crearUsuarioValidation = Joi.object({
  rut: Joi.string().required(),
  nombre: Joi.string().required(),
  apellido: Joi.string().required(),
  mail: Joi.string().email().required(),
  clave: Joi.string().required(),
  direccion: Joi.string().required(),
  telefono: Joi.string().required(),
});

export const updateUsuarioValidation = Joi.object({
  nombre: Joi.string().required(),
  apellido: Joi.string().required(),
  mail: Joi.string().email().required(),
  clave: Joi.string().required(),
  direccion: Joi.string().required(),
  telefono: Joi.string().required(),
});

export const loginValidation = Joi.object({
  mail: Joi.string().email().required(),
  clave: Joi.string().required(),
});
