import { Knex } from 'knex';
import { ConfigService } from '@nestjs/config';
import 'dotenv/config';

type PGConf = Knex.Config['connection'];

export const getPGConnection = (configService: ConfigService): PGConf => {
  const nodeEnv = configService.get('NODE_ENV');
  const prefix = (() => {
    switch (nodeEnv) {
      case 'production':
        return 'PRODUCTION_';
      case 'development':
        return 'DEV_';
      case 'migration':
        return 'MIGRATION_';
      case 'test':
        return 'TEST_';
      default:
        return 'DEV_';
    }
  })();

  return {
    host: configService.get(`${prefix}POSTGRES_HOST`),
    port: configService.get(`${prefix}POSTGRES_PORT`),
    user: configService.get(`${prefix}POSTGRES_USER`),
    password: configService.get(`${prefix}POSTGRES_PASSWORD`),
    database: configService.get(`${prefix}POSTGRES_DB_NAME`),
  };
};
