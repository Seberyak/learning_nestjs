import { Injectable } from '@nestjs/common';
import {User} from './user';
import {InjectModel} from 'nestjs-typegoose';
import {ReturnModelType} from '@typegoose/typegoose';
import * as Joi from 'joi'

@Injectable()
export class UserService {
  constructor(@InjectModel(User) private readonly userModel:ReturnModelType<typeof User>) {}

  private schema = Joi.object({

    username: Joi.string()
      .alphanum()
      .min(3)
      .max(32)
      .required(),

    password: Joi.string()
      .pattern(new RegExp('^[a-zA-Z0-9]{3,30}'))
      .required(),

    repeat_password: Joi.ref('password'),

    email: Joi.string()
      .email()
      .required(),

    birth: Joi.date()
      .min(new Date(1900,0))
      .max(new Date(2010,0))
      .required()
  });




  async createUser(){

    const usr ={
      username:"testuser",
      password:'testpassword123',
      repeat_password:'testpassword123',
      email:'user@example.com',
      birth:new Date("2003-01-01")
    };

    const user = new this.userModel(usr);

    return await this.schema.validate(usr).hasOwnProperty('error')?{ validate: 'false' } : user.save();

  }

  async listUsers(): Promise<User[] | null> {
    return await this.userModel.find().exec();
  }

  async createCustomUser(usr) {


    const user = new this.userModel(usr);
    return await this.schema.validate(usr).hasOwnProperty('error')?'Validation Error : \n'+this.schema.validate(usr).error.message:user.save();


  }

}
