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
  console.log('Error is ')
}


let connectionString;
if (process.env.NODE_ENV === 'test') {
  connectionString = process.env.DB_URL;
} else if (process.env.NODE_ENV === 'development') {
  connectionString = process.env.DB_URL;
} else {
  connectionString = process.env.DB_URL;
}

// Create new instance
const pool = new Pool({ connectionString });
// console.log(pool)


// Query function
export default {
  query(queries) {
    return new Promise((resolve, reject) => {
      pool
        .query(queries)
        .then(result => resolve(result))
        .catch(err => reject(err));
    });
  },
};
