import { database } from '../database/dbConfig';
import bcrypt from 'bcrypt';
const saltRounds = 10;
const salt = bcrypt.genSaltSync(saltRounds);

export default class UserController {
  static register(req, res) {
    const { lastname, firstname, email, password } = req.body;
    const hash = bcrypt.hashSync(password, salt);

    database
      .transaction(trx => {
        trx
          .insert({
            hash,
            email,
          })
          .into('login')
          .returning('email')
          .then(loginEmail => {
            return trx('user')
              .returning('*')
              .insert({
                lastName: lastname,
                firstName: firstname,
                email: loginEmail[0],
                createdAt: new Date(),
              });
          })
          .then(data =>
            res.json({
              data,
              message: 'User created',
            }),
          )
          .then(trx.commit)
          .catch(trx.rollback);
      })
      .catch(err => res.status(400).json('Unable to register'));
  }

  // User login
  static login(req, res) {
    const { email, password } = req.body;

    database
      .select('*')
      .from('login')
      .where({
        email,
      })
      .then(data => {
        const valid = bcrypt.compareSync(password, data.hash);
        if (valid) {
          res.json({
            message: 'Login succesful'
          })
        } else {
          res.status(400).json({
            message: 'Invalid details'
          })
        }
      })
      .catch(err => res.status(400).json('Unable to login'));
  }
}
