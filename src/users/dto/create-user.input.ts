import { InputType, Field } from '@nestjs/graphql';
import { IsEmail, IsNotEmpty, Length } from 'class-validator';

@InputType()
export class CreateUserInput {
  @Field()
  @IsNotEmpty({ message: 'Name cannot be empty' }) // ✅ Validation rule
  @Length(3, 20, { message: 'Name must be between 3 and 20 characters' })
  name: string;

  @Field()
  @IsNotEmpty({ message: 'Email cannot be empty' }) // ✅ Validation rule
  @IsEmail({}, { message: 'Invalid email format' })
  email: string;
}
