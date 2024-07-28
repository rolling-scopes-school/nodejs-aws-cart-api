import knex from 'knex';
import knexConfig from './knexfile';

type NodeEnv = keyof typeof knexConfig;

const NODE_ENV = (process.env.NODE_ENV || 'production') as NodeEnv;

const db = knex(knexConfig[NODE_ENV]);

export default db;
