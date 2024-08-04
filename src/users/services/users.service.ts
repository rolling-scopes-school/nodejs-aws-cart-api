import { Injectable } from '@nestjs/common';

import { v4 } from 'uuid';

import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserEntity } from '../entities/user.entity';
import { User } from '../models';

@Injectable()
export class UsersService {
  private readonly users: Record<string, User>;

  constructor(
    @InjectRepository(UserEntity)
    private userRepository: Repository<User>
  ){}

  async findAll(): Promise<User[]> {
    return this.userRepository.find();
  }

  async findOne(id: string): Promise<User> {
    return this.userRepository.findOne(id);
  }

  async createOne(user: User): Promise<User> {
    return this.userRepository.save(user);
  }

  async update(id: string, user: Partial<User>): Promise<void> {
    await this.userRepository.update(id, user);
  }

  async remove(id: string): Promise<void> {
    await this.userRepository.delete(id);
  }
}
