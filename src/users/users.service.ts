import { Injectable } from '@nestjs/common';
import {users} from './Users';
import {InjectModel} from 'nestjs-typegoose';
import {ReturnModelType} from '@typegoose/typegoose';
import { MError } from '../Errors/MError';
import { IAPUTUserSchema } from './Types/IAPUTUserSchema';
import Joi from '../joi';
import { IAPOSTUserSchema } from './Types/IAPOSTUserSchema';


@Injectable()
export class UsersService {
  constructor(@InjectModel(users) private readonly userModel:ReturnModelType<typeof users>
              ) {}


  async listUsers(): Promise<users[] | null> {
    return this.userModel.find();
  }

  async getUserById(id:ReturnType<typeof Joi.objectId>):Promise<users | null>{
    const user = await this.userModel.findById(id);
    if(!user) throw new MError(404, 'User not Found!');
    else return user;
  }

  async createCustomUser(user:IAPOSTUserSchema) : Promise<users> {
    const newUser = new this.userModel(user);
    console.log(newUser);
    return newUser.save();
  }


  async updateUser(newUser: IAPUTUserSchema):Promise <users>{
    const user = await this.userModel.findById(newUser.id);
    if(!user) throw new MError(404, 'User not Found!');
    for (const key in newUser) {
      if(key!="id")user[key]=newUser[key];
    }
    return  user.save();
  }

}
