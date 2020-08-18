import {prop} from '@typegoose/typegoose';
import { IUser} from './helper-schemas';

export  class Users implements Omit<IUser, "_id">{


    @prop()
    username!: string;

    @prop()
    password!: string;


    @prop()
    email!: string;

    @prop()
    birth!: Date;



}