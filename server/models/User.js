import Pool from '../database/dbConfig';

export default class User {
  static registerUser(details) {
    const { lastname, firstname, email } = details;
    return new Promise((resolve, reject) => {
      Pool.query(
        `INSERT INTO Users (lastName, firstName, email, ) VALUES ('${lastname}, ${firstname}, ${email}')`,
      )
      .then(res => resolve(res))
      .catch(err => reject(err))
    });
  }
}
