import { Injectable, NotFoundException } from '@nestjs/common';
import { User } from './entities/user.entity';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class UsersService {
  private users: User[] = [];

  create(createUserInput: CreateUserInput): User {
    const newUser = { id: uuidv4(), ...createUserInput };
    this.users.push(newUser);
    return newUser;
  }

  findAll(): User[] {
    return this.users;
  }

  findOne(id: number): User {
    const user = this.users.find((user) => user.id === id);
    if (!user) throw new NotFoundException(`User with ID ${id} not found`);
    return user;
  }

  update(updateUserInput: UpdateUserInput): User {
    const userIndex = this.users.findIndex(
      (user) => user.id === updateUserInput.id,
    );
    if (userIndex === -1)
      throw new NotFoundException(
        `User with ID ${updateUserInput.id} not found`,
      );
    this.users[userIndex] = { ...this.users[userIndex], ...updateUserInput };
    return this.users[userIndex];
  }

  remove(id: number): boolean {
    const userIndex = this.users.findIndex((user) => user.id === id);
    if (userIndex === -1)
      throw new NotFoundException(`User with ID ${id} not found`);
    this.users.splice(userIndex, 1);
    return true;
  }
}
