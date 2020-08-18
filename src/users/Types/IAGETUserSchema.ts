import Joi from '../../joi';

export type IAGETUserSchema  =  {

  id: ReturnType<typeof Joi.objectId>


};