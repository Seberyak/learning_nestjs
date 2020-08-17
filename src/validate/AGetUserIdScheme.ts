import Joi from '../joi';


export const userIdScheme = Joi.object({
  id : Joi.objectId()
    .required()
});