import knex from 'knex';

const database = knex({
  client: 'pg',
  connection: {
    host: '127.0.0.1',
    user: 'vectormike',
    password: '1234',
    database: 'eatom',
  },
});

export { database };
