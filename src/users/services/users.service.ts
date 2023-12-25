import { Injectable } from '@nestjs/common';

import pgClient from '../../db';
import { User } from '../models';

@Injectable()
export class UsersService {
  private readonly users: Record<string, User>;

  constructor() {
    this.users = {}
  }

  async findOne(userName: string): Promise<User> {
    return await pgClient('users').where('name', userName).first();
  }

  async createOne({ name, password }: User): Promise<User> {
    return (await pgClient('users')
      .insert({ name, password })
      .returning('*')) as any as User;
  }
}
