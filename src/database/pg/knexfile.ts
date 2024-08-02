import * as dotenv from 'dotenv';
import * as path from 'node:path';
import { Knex } from 'knex';
import { ConfigService } from '@nestjs/config';
import { getPGConnection } from './get-pg-connection.util';

dotenv.config({
  path: path.resolve(__dirname, '../../../.env'),
});

const pgConnection = getPGConnection(new ConfigService());

const relativeMigrationsPath = './migrations';
const relativeMSeedsPath = './seeds';

const config: Record<string, Knex.Config> = {
  production: {
    client: 'pg',
    connection: pgConnection,
    migrations: {
      tableName: 'knex_migrations',
      directory: relativeMigrationsPath,
    },
    seeds: {
      directory: relativeMSeedsPath,
    },
  },
  development: {
    client: 'pg',
    connection: pgConnection,
    migrations: {
      tableName: 'knex_migrations',
      directory: relativeMigrationsPath,
    },
    seeds: {
      directory: relativeMSeedsPath,
    },
  },
  migration: {
    client: 'pg',
    connection: pgConnection,
    migrations: {
      tableName: 'knex_migrations',
      directory: relativeMigrationsPath,
    },
    seeds: {
      directory: relativeMSeedsPath,
    },
  },
  test: {
    client: 'pg',
    connection: pgConnection,
    migrations: {
      tableName: 'knex_migrations',
      directory: 'src/database/pg/migrations',
    },
    seeds: {
      directory: '.src/database/pg/seeds',
    },
  },
};

export default config;
