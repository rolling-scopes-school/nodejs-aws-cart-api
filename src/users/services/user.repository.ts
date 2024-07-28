import { Inject, Injectable } from '@nestjs/common';
import { Knex } from 'knex';
import { PG_CONNECTION } from 'src/database/pg/database.module';
import { PGTable } from 'src/database/pg/table.enum';
import { User } from '../models';

@Injectable()
export class UsersRepository {
  constructor(@Inject(PG_CONNECTION) private readonly knex: Knex<any>) {}

  async create(payload: User): Promise<User> {
    const res = await this.knex(PGTable.users)
      .insert(payload)
      .returning(['id', 'name', 'email']);

    return res[0];
  }

  async findByName(name: string): Promise<User> {
    const res = await this.knex(PGTable.users)
      .select('id', 'name', 'email', 'password')
      .where('name', name);

    return res[0];
  }
}
