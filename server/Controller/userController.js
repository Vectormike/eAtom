import User from '../model/User';

export default class UserController {
  static register(req, res) {
    const { lastname, firstname, email, password } = req.body;
    User.create({
      lastname,
      firstname,
      email,
      password,
    }).then(user => {
      res.json({
        message: 'User created & succesful!',
        user: {
          lastname: user.lastname,
          firstname: user.firstname,
          email: user.email,
        },
      });
    });
  }
}
