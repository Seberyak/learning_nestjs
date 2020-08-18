import Joi from '../joi';
import { userSchema } from './helper-schemas';


export const AGETUserSchema = Joi.object({
  id : Joi.objectId()
    .required()
});


export const APOSTUserSchema = userSchema;


export const APUTUserSchema = userSchema.keys({
  id:Joi.required(),
  username:Joi.optional(),
  password:Joi.optional(),
  email:Joi.optional(),
  birth:Joi.optional()
})


export type IAGETUserSchema  =  {
  id: ReturnType<typeof Joi.objectId>
};


export type IAPOSTUserSchema  =  {


  username:string,

  password:string,

  email:string,

  birth:Date


};

export type IAPUTUserSchema  =  {

  id:string,

  username?:string,

  password?:string,

  email?:string,

  birth?:Date


};