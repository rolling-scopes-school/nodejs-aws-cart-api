import { v4 } from 'uuid';

import { Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { User } from '../models';
import { User as UserEntity } from '../../entities/User.entity';

@Injectable()
export class UsersService {
  @InjectRepository(UserEntity)
  private usersRepository: Repository<UserEntity>;

  async findOne(name: string) {
    try {
      const user = await this.usersRepository.findOne({
        where: { name },
      });

      if (!user) {
        throw new Error('User not found');
      }

      return user;
    } catch (error) {
      console.log(error);
    }
  }

  async createOne({ name, password }: User) {
    const id = v4();
    const newUser = { id, name, password };
    await this.usersRepository.save(newUser);
    return newUser;
  }
}
