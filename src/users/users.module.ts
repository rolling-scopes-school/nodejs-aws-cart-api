import { Module } from '@nestjs/common';
import { UserEntity } from './entities/user.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersService } from './services';
import { UserController } from './user.controller';

@Module({
  imports: [TypeOrmModule.forFeature([UserEntity])],
  providers: [ UsersService ],
  exports: [ UsersService ],
  controllers: [UserController],
})
export class UsersModule {}
