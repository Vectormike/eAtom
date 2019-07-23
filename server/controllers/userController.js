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
      .then(result => console.log(result))
      .catch(err => console.log(err));
    // Encryption of password will go here
  }
}
