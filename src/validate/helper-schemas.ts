import Joi from '../joi';


export const user_schema = Joi.object({

 id : Joi.objectId(),

  username: Joi.string()
    .alphanum()
    .min(3)
    .max(32)
    .required(),

  password: Joi.string()
    .pattern(new RegExp('^[a-zA-Z0-9]{3,30}'))
    .required(),

  email: Joi.string()
    .email()
    .required(),

  birth: Joi.date()
    .min(new Date(1900,0))
    .max(new Date(2010,0))
    .required()
});
