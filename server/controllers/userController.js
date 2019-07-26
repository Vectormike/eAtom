import { database } from '../database/dbConfig';

export default class UserController {
  static register(req, res) {
    const { lastname, firstname, email, password } = req.body;

    database('user')
      .returning('*')
      .insert({
        lastName: lastname,
        firstName: firstname,
        email,
        password,
        createdAt: new Date(),
      })
      .then(data =>
        res.json({
          data,
          message: 'User created',
        }),
      )
      .catch(err => res.status(400).json('Unable to register'));
  }
}
