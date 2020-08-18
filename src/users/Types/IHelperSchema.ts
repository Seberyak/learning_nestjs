import Joi from '../../joi';

export type IHelperSchema  =  {

  _id:ReturnType<typeof Joi.objectId>,

  username:string,

  password:string,

  email:string,

  birth:Date


};