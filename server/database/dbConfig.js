// const Sequelize = require('sequelize');

// const config = new Sequelize(
//   'eatom',
//   'vectormike',
//   '1234',

//   {
//     host: 'localhost',
//     dialect: 'postgres',
//     operatorsAliases: false,

//     pool: {
//       max: 5,
//       min: 0,
//       acquire: 30000,
//       idle: 10000,
//     },
//   },
// );

// export default config;

import { Pool } from 'pg';
import dotenv from 'dotenv';

dotenv.config();

const res = dotenv.config();

if (res.error) {
  throw res.error;
}
console.log(res.parsed);


let connectionString;
if (process.env.NODE_ENV === 'test') {
  connectionString = process.env.DATABASE_URL;
} else if (process.env.NODE_ENV === 'development') {
  connectionString = process.env.DATABASE_URL;
} else {
  connectionString = process.env.DATABASE_URL;
}

// Create new instance
const pool = new Pool({ connectionString });

// Query function
export default {
  query(queries) {
    return new Promise((resolve, reject) => {
      pool
        .query(queries)
        .then(res => resolve(res))
        .catch(err => reject(err));
    });
  },
};
