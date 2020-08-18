import { Injectable } from '@nestjs/common';
import {Users} from './users';
import {InjectModel} from 'nestjs-typegoose';
import {ReturnModelType} from '@typegoose/typegoose';
import { MError } from '../errors/merror';
import { IAPUTUserSchema} from './validators';
import Joi from '../joi';
import { IAPOSTUserSchema } from './validators';


@Injectable()
export class UsersService {
  constructor(@InjectModel(Users) private readonly userModel:ReturnModelType<typeof Users>
              ) {}


  async listUsers(): Promise<Users[] | null> {
    return this.userModel.find();
  }

  async getUserById(id:ReturnType<typeof Joi.objectId>):Promise<Users | null>{
    const user = await this.userModel.findById(id);
    if(!user) throw new MError(404, 'User not Found!');
    else return user;
  }

  async createCustomUser(user:IAPOSTUserSchema) : Promise<Users> {
    const newUser = new this.userModel(user);
    return newUser.save();
  }


  async updateUser(newUser: IAPUTUserSchema):Promise <Users>{
    const user = await this.userModel.findById(newUser.id);
    if(!user) throw new MError(404, 'User not Found!');
    for (const key in newUser) {
      if(key!="id")user[key]=newUser[key];
    }
    return  user.save();
  }

}
