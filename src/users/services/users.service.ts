import { Injectable } from '@nestjs/common';

import { v4 } from 'uuid';

import { User } from '../models';

// import { InjectRepository } from '@nestjs/typeorm';
// import { UserEntity } from 'src/database/entities/user.entity';
// import { Repository } from 'typeorm';
// import { UserDto } from '../dto/create-user.dto';

@Injectable()
export class UsersService {
  private readonly users: Record<string, User>;

  constructor() {
    this.users = {};
  }

  findOne(userId: string): User {
    return this.users[userId];
  }

  createOne({ name, password }: User): User {
    const id = v4();
    const newUser = { id: name || id, name, password };

    this.users[id] = newUser;

    return newUser;
  }
}

// @Injectable()
// export class UsersService {
//   constructor(
//     @InjectRepository(UserEntity)
//     private readonly userRepo: Repository<UserEntity>,
//   ) {}

//   async findOne(userId: string) {
//     return await this.userRepo.findOneBy({ id: userId });
//   }

//   async createOne({ name, password }: UserDto) {
//     try {
//       const id = v4();
//       const newUser = this.userRepo.create({ id, name, password });
//       console.log('newUser', newUser);
//       const user = await this.userRepo.save(newUser);
//       return user;
//     } catch (error) {
//       console.log(error);
//     }
//   }
// }
