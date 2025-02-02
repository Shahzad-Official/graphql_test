import { InputType, Field, PartialType } from '@nestjs/graphql';
import { IsOptional, IsEmail, Length } from 'class-validator';
import { CreateUserInput } from './create-user.input';

@InputType()
export class UpdateUserInput extends PartialType(CreateUserInput) {
  @Field()
  id: number;

  @Field({ nullable: true })
  @IsOptional()
  @Length(3, 20, { message: 'Name must be between 3 and 20 characters' })
  name?: string;

  @Field({ nullable: true })
  @IsOptional()
  @IsEmail({}, { message: 'Invalid email format' })
  email?: string;
}
