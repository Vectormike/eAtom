import User from '../models/User';

const { registerUser } = User;

export default class UserController {
  static register(req, res) {
    const { lastname, firstname, email, password } = req.body;

    const userDetails = {
      lastname,
      firstname,
      email,
      password,
    };

    registerUser(userDetails)
      .then(results =>
        res.status.json({
          message: 'Account created',
        }),
      )
      .catch(err => res.status(500).json({
        error: err.message
      }));

  }
}
