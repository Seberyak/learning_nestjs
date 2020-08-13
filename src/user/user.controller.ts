import {Body, Controller, Get, Post} from '@nestjs/common';
import {UserService} from './user.service';
import {User} from './user';


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
  async createUserGet(): Promise<object> {
    return await this.userService.createUser();
  }

  @Post('createUser')
  async createUser(@Body() usr: string): Promise<string| object> {
    return await this.userService.createCustomUser(usr);
  }


}
