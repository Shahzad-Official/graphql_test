import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpException,
} from '@nestjs/common';
import { isArray } from 'class-validator';

@Catch()
export class GraphqlExceptionFilter implements ExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const req = ctx.getRequest();
    const res = exception.getResponse();
    if (res) {
      console.log(res);
      if (isArray(res['message'])) {
        console.log(res['message'][0]);
      }
    }
  }
}
