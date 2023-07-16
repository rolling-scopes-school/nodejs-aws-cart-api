import knex from 'knex';
import * as dotenv from "dotenv";
import * as path from 'path';

dotenv.config()


const dbOptions = {
    host: process.env.PG_HOST!,
    port: process.env.PG_PORT!,
    database: process.env.PG_DATABASE!,
    user: process.env.PG_USERNAME!,
    password: process.env.PG_PASSWORD!,
};

export default knex({
    client: 'postgresql',
    connection: dbOptions,
});