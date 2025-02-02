import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: true,
      formatError: (error) => {
        return {
          message: error.message,
          code: error.extensions?.code || 'GRAPHQL_VALIDATION_FAILED',
          statusCode: 400,
        };
      },
    }),
    UsersModule,
  ],
})
export class AppModule {}
