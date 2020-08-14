import {prop} from '@typegoose/typegoose';

export  class User{
    @prop()
    username!: string;

    @prop()
    password!: string;

    @prop()
    repeat_password!: string;

    @prop()
    email!: string;

    @prop()
    birth!: Date;
}