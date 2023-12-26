import { Injectable } from '@nestjs/common';

import { User } from '../models';
import { InjectKnex } from 'nestjs-knex';
import { Knex } from 'knex';

@Injectable()
export class UsersService {
  constructor(@InjectKnex() private readonly knex: Knex) {}

  async findOne(userId: string): Promise<User> {
    return this.knex('users').where({ id: userId }).first();
  }

  async createOne({ name, password }: User): Promise<User> {
    const [newUser] = await this.knex('users').insert({ name, password }, [
      'id',
      'name',
      'password',
    ]);
    return newUser;
  }
}
