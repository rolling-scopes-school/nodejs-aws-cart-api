import db from 'src/database/pg/knex';

const setup = async function () {
  await db.migrate.latest();
};

export default setup;
