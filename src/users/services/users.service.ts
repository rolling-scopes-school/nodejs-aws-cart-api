import { Injectable } from '@nestjs/common';
import { randomUUID } from 'crypto';
import { User } from '../models';
import { UsersRepository } from './user.repository';

@Injectable()
export class UsersService {
  constructor(private readonly usersRepository: UsersRepository) {}

  findOne(name: string): Promise<User> {
    return this.usersRepository.findByName(name);
  }

  createOne(payload: User): Promise<User> {
    return this.usersRepository.create({
      id: randomUUID(),
      ...payload,
    });
  }
}
