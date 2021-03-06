import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModules } from './users/users.modules';
import {TypegooseModule} from 'nestjs-typegoose';



@Module({
  imports: [TypegooseModule.forRoot('mongodb://localhost:27017/nest'),
    UsersModules],
  controllers:[AppController],
  providers:[AppService]
})

export class AppModule {}
