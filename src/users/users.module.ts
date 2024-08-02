import { Module } from '@nestjs/common';

import { UsersService } from './services';
import { UsersRepository } from './services/user.repository';
import { DatabaseModule } from 'src/database/pg/database.module';

@Module({
  imports: [DatabaseModule],
  providers: [UsersService, UsersRepository],
  exports: [UsersService],
})
export class UsersModule {}
