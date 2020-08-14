import { ExceptionFilter, Catch, ArgumentsHost } from '@nestjs/common';
import { Request, Response } from 'express';
import {MError} from './MError';

@Catch(MError)
export class ErrorFilter implements ExceptionFilter{
  catch(exception: MError, host: ArgumentsHost){
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const request = ctx.getRequest<Request>();
    const status = exception.errorCode;

    response
      .status(status)
      .json({
        statusCode: status,
        timestamp: new Date().toISOString(),
        message: exception.message,
      });
  }

}