import Joi from '../../joi';


export const UserIdSchema = Joi.object({
  id : Joi.objectId()
    .required()
});