import Joi from '../../joi';


export const UserUpdateSchema = Joi.object({
  id : Joi.objectId().required(),

  username: Joi.string()
    .alphanum()
    .min(3)
    .max(32)
    .optional(),

  password: Joi.string()
    .pattern(new RegExp('^[a-zA-Z0-9]{3,30}$'))
    .optional(),

  email: Joi.string()
    .email()
    .optional(),

  birth: Joi.date()
    .min(new Date(1900,0))
    .max(new Date(2010,0))
    .optional()


})