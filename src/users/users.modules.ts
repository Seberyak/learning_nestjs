import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { TypegooseModule } from 'nestjs-typegoose';
import { Users } from './users';
import { MError } from '../Errors/merror';



@Module({
  imports: [TypegooseModule.forFeature([Users])],
  providers: [UsersService,MError],
  controllers: [UsersController]
})
export class UsersModules {}
