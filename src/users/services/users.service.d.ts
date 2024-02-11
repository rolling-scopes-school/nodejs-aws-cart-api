import { User } from '../models';
import { UserEntity } from '../entity/user.entity';
import { Repository } from 'typeorm';
export declare class UsersService {
    private UserRepository;
    constructor(UserRepository: Repository<UserEntity>);
    findOne(userId: string): Promise<UserEntity>;
    createOne({ name, password }: User): Promise<UserEntity>;
}
