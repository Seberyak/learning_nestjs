import { Controller, createParamDecorator, ExecutionContext, Get, Post, Put } from '@nestjs/common';
import {UserService} from './user.service';
import {User} from './user';
import {IUser} from './IUser';
import {user_schema} from '../validate/helper-schemas';
import { validationError } from '../Errors/ValidationError';
import { userIdScheme } from '../validate/AGetUserIdScheme';
import Joi from '../joi';
import { UserUpdateScheme } from '../validate/APutUserScheme';

export const Validate = createParamDecorator((schema,ctx:ExecutionContext)=>{
  const data = {...ctx.switchToHttp().getRequest().body, ...ctx.switchToHttp().getRequest().query, ...ctx.switchToHttp().getRequest().params};
  try {
    const  {value, error} = schema.validate(data);
    // console.log(value);
    return  !error? value: validationError();
  }
  catch (error){
    validationError()
  }

})




@Controller('user')
export class UserController {
  constructor(private readonly userService:UserService) {}

  @Get('')
  async User():Promise <string>{
    return "This is User page."
  }


  @Get('listUser')
  async listUser():Promise <User[]| null>{
    return await this.userService.listUsers();
  }

  @Get('createUser')
  async createUserGet(): Promise<User> {
    return await this.userService.createUser();
  }

  @Post('createUser')
  async createUser(@Validate(user_schema.keys({
    id:Joi.any().strip(),
    repeat_password: Joi.ref("password")
  })) usr: IUser): Promise<User> {

      return await this.userService.createCustomUser(usr);
    }

  @Get('getUser/:id')
  async getUser(@Validate(userIdScheme) data){

    return await  this.userService.getUserById(data.id);
  }

  @Put('updateUser')
  async updateUser(@Validate(UserUpdateScheme) data){

    return await this.userService.updateUser(data);
  }


}
