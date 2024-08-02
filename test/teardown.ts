import db from 'src/database/pg/knex';

const teardown = async function () {
  await db.migrate.rollback();
  await db.destroy();
};

export default teardown;
