import { Test, TestingModule } from '@nestjs/testing';
import { DatabaseModule, PG_CONNECTION } from './database.module';
import { Knex } from 'knex';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { config } from 'dotenv';
import db from './knex';

config();

const TEST_MIGRATION = '20240723112122_test-migration.ts';

describe('database PG connection', () => {
  let databaseProvider: Knex;

  beforeAll(async () => {
    await db.migrate.up({
      name: TEST_MIGRATION,
    });
  });

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [DatabaseModule, ConfigModule],
      providers: [ConfigService],
    }).compile();

    databaseProvider = module.get<Knex>(PG_CONNECTION);
  });

  afterAll(async () => {
    await db.migrate.down({ name: TEST_MIGRATION });
    await db.destroy();
  });

  describe('PG_CONNECTION', () => {
    it('should use test database', async () => {
      const res = await databaseProvider.raw('SELECT current_database();');

      expect(res.rows[0].current_database).toBe('testdb');
    });

    it('should return empty array', async () => {
      const res = await databaseProvider('test')
        .insert({
          message: 'Hello world!',
        })
        .returning<Array<{ id: number }>>('id');

      expect(res[0].id).toBe(1);
    });
  });
});
