import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { TypegooseModule } from 'nestjs-typegoose';
import { User } from './user';
import { ValidateService } from '../validate/validate.service';
import { MError } from '../Errors/MError';



@Module({
  imports: [TypegooseModule.forFeature([User])],
  providers: [UserService,ValidateService,MError],
  controllers: [UserController]
})
export class UserModule {}
