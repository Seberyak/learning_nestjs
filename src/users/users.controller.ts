import { Controller, Get, Post, Put } from '@nestjs/common';
import {UsersService} from './users.service';
import {users} from './Users';
import {DValidate} from '../Decoratos/DValidate';

import { UserIdSchema } from './Schemas/AGETUserSchema';
import { UserUpdateSchema } from './Schemas/APUTUserSchema';
import { APOSTUserSchema } from './Schemas/APOSTUserSchema';

import { IAGETUserSchema } from './Types/IAGETUserSchema';
import { IAPUTUserSchema } from './Types/IAPUTUserSchema';
import { IAPOSTUserSchema } from './Types/IAPOSTUserSchema';



@Controller('users')
export class UsersController {
  constructor(private readonly userService:UsersService) {}

  @Get('')
  async user():Promise <string>{
    return "This is UsersModel page."
  }


  @Get('list')
  async listUser():Promise <users[]| null>{
    return await this.userService.listUsers();
  }


  @Post('user')
  async createUser(@DValidate(APOSTUserSchema) usr:IAPOSTUserSchema): Promise<users> {

      return await this.userService.createCustomUser(usr);
    }

  @Get('user/:id')
  async getUser(@DValidate(UserIdSchema) data:IAGETUserSchema):Promise<users>{

    return await  this.userService.getUserById(data.id);
  }

  @Put('user/:id')
  async updateUser(@DValidate(UserUpdateSchema) data:IAPUTUserSchema):Promise<users>{
    return await this.userService.updateUser(data);
  }


}
