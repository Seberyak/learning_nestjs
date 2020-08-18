import { validationError } from '../Errors/ValidationError';
import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { IAPOSTUserSchema } from '../users/Types/IAPOSTUserSchema';


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