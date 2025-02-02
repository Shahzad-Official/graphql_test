import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class Cat {
  @Field({ description: 'Example field (placeholder)' })
  id: string;
}
