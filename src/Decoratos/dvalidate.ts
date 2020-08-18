import { validationError } from '../Errors/validationerror';
import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { IAPOSTUserSchema } from '../users/validators';


export const DValidate = createParamDecorator((schema, ctx:ExecutionContext)=>{

  try {
    const data:IAPOSTUserSchema = {...ctx.switchToHttp().getRequest().body, ...ctx.switchToHttp().getRequest().query, ...ctx.switchToHttp().getRequest().params};
    const  {value, error} = schema.validate(data);
    return  !error? value: validationError();
  }
  catch (error){
    validationError()
  }

})