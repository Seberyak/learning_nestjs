import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import {TypegooseModule} from 'nestjs-typegoose';
import { ValidateService } from './validate/validate.service';




@Module({
  imports: [TypegooseModule.forRoot('mongodb://localhost:27017/nest'),
    UserModule],
  controllers:[AppController],
  providers:[AppService, ValidateService]
})

export class AppModule {}
