import { Injectable } from '@nestjs/common';
import {User} from './user';
import {InjectModel} from 'nestjs-typegoose';
import {ReturnModelType} from '@typegoose/typegoose';
import { IUser } from './IUser';


@Injectable()
export class UserService {
  constructor(@InjectModel(User) private readonly userModel:ReturnModelType<typeof User>
              ) {}


  async createUser() : Promise<User>{

    const usr ={
      username:"testuser",
      password:'testpassword123',
      repeat_password:'testpassword123',
      email:'user@example.com',
      birth:new Date("2003-01-01")
    };

    const user = new this.userModel(usr);

    return await user.save();
  }

  async listUsers(): Promise<User[] | null> {
    return await this.userModel.find().exec();
  }

  async getUserById(id){
    return await this.userModel.findById(id).exec();
  }

  async createCustomUser(usr: unknown) : Promise<User> {

    const user = new this.userModel(usr);
    return await user.save();
  }


  async updateUser(newUsr: IUser):Promise <User | null>{
    const usr = await this.userModel.findById(newUsr.id).exec();
    for (const key in newUsr) {
      if(key!="id")usr[key]=newUsr[key];
    }
    return await usr.save();

  }

}
