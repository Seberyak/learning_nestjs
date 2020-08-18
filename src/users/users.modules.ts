import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { TypegooseModule } from 'nestjs-typegoose';
import { users } from './Users';
import { MError } from '../Errors/MError';



@Module({
  imports: [TypegooseModule.forFeature([users])],
  providers: [UsersService,MError],
  controllers: [UsersController]
})
export class UsersModules {}
