import { Module } from '@nestjs/common';
import { User as UsersEntity } from './users.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersService } from './services';
import { UserController } from './users.controller';

@Module({
  imports: [TypeOrmModule.forFeature([UsersEntity])],
  providers: [ UsersService ],
  exports: [ UsersService ],
  controllers: [UserController],
})
export class UsersModule {}
