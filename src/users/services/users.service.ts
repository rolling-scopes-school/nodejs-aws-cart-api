import { Injectable } from '@nestjs/common';
import { User } from '../models';
import pg from '../../index';

@Injectable()
export class UsersService {
  private readonly users: Record<string, User>;
  // find a user in the users table
  async findOne(name: string): Promise<User> {
    const user = await pg('users').where('name', name).first();
    return user
  }
  // create in case of absence
  async createOne({ name, password }: User): Promise<User> {
    const new_user = await pg.raw('SELECT * FROM create_user(?::VARCHAR, ?::VARCHAR)', [name, password]) 
    return new_user;
  }

}
