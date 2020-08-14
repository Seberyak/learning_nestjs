import { Body, Controller, Get,  Post } from '@nestjs/common';
import {UserService} from './user.service';
import {User} from './user';
import { ValidateService } from '../validate/validate.service';
import {MError} from '../Errors/MError';

@Controller('user')
export class UserController {
  constructor(private readonly userService:UserService,private validateService:ValidateService) {}

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
  async createUser(@Body() usr: string): Promise<User> {
    if(this.validateService.schema.validate(usr).hasOwnProperty('error'))
      throw new MError(400,"Validation Error");

    else
      return await  this.userService.createCustomUser(usr);
  }


}
