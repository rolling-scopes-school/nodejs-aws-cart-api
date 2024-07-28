import { Module, Provider } from '@nestjs/common';
import db from './knex';
import { ConfigModule } from '@nestjs/config';

export const PG_CONNECTION = 'PG_CONNECTION';

export const PGProvider: Provider = {
  provide: PG_CONNECTION,
  useFactory: () => db,
};

@Module({
  providers: [PGProvider],
  exports: [PG_CONNECTION],
  imports: [ConfigModule],
})
export class DatabaseModule {}
