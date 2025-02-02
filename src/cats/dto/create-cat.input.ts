import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateCatInput {
  @Field({ description: 'Example field (placeholder)' })
  id: string;
}
