import {prop} from '@typegoose/typegoose';
import { IHelperSchema } from './Types/IHelperSchema';

export  class users implements Omit<IHelperSchema, "_id">{


    @prop()
    username!: string;

    @prop()
    password!: string;


    @prop()
    email!: string;

    @prop()
    birth!: Date;



}