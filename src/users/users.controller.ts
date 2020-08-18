import { Controller, Get, Post, Put } from '@nestjs/common';
import {UsersService} from './users.service';
import {Users} from './users';
import {DValidate} from '../decoratos/dvalidate';
import {
  AGETUserSchema,
  APOSTUserSchema,
  APUTUserSchema,
  IAGETUserSchema,
  IAPOSTUserSchema,
  IAPUTUserSchema,
} from './validators';



@Controller('users')
export class UsersController {
  constructor(private readonly userService:UsersService) {}

  @Get('')
  async user():Promise <string>{
    return "This is UsersModel page."
  }


  @Get('list')
  async listUser():Promise <Users[]| null>{
    return await this.userService.listUsers();
  }


  @Post('user')
  async createUser(@DValidate(APOSTUserSchema) usr:IAPOSTUserSchema): Promise<Users> {

      return await this.userService.createCustomUser(usr);
    }

  @Get('user/:id')
  async getUser(@DValidate(AGETUserSchema) data:IAGETUserSchema):Promise<Users>{

    return await  this.userService.getUserById(data.id);
  }

  @Put('user/:id')
  async updateUser(@DValidate(APUTUserSchema) data:IAPUTUserSchema):Promise<Users>{
    return await this.userService.updateUser(data);
  }


}
