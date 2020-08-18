import { validationError } from '../Errors/ValidationError';
import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { IAPOSTUserSchema } from '../users/Types/IAPOSTUserSchema';


export const DValidate = createParamDecorator((schema, ctx:ExecutionContext)=>{
  const data:IAPOSTUserSchema = {...ctx.switchToHttp().getRequest().body, ...ctx.switchToHttp().getRequest().query, ...ctx.switchToHttp().getRequest().params};
  const  {value, error} = schema.validate(data);
  console.log(value);

  return  !error? value: validationError();
  // try {
  // }
  // catch (error){
  //   validationError()
  // }

})