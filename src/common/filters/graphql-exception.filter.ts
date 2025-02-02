import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpException,
} from '@nestjs/common';
import { isArray } from 'class-validator';
import { GraphQLError } from 'graphql';

@Catch()
export class GraphqlExceptionFilter implements ExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const req = ctx.getRequest();
    const res = exception.getResponse();
    if (res) {
      console.log(res);
      if (isArray(res['message'])) {
        return new GraphQLError(res['message'][0]);
      }
    }
  }
}
