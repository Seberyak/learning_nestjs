export class MError extends Error{
  constructor(public errorCode:number,errorMessage:string)  {
    super(errorMessage);
  }
}