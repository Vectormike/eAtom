import User from '../models/User';

export default class UserController {
  static register(req, res) {
    const 
    { 
      lastname, 
      firstname, 
      email, 
      password 
    } = req.body;

    // Encryption of password will go here

    User.create({
      lastName: lastname,
      firstName: firstname,
      email,
      password,
    })
      .then(user => {
        if (!user) {
          res.status(500).json({
            message: 'Error occured',
          });
        }
        res.json({
          message: 'User created & succesful!',
          user: {
            lastname: user.lastName,
            firstname: user.firstName,
            email: user.email,
          },
        });
      })
      .catch(err => {
        res.status(400).json({
          message: err
        });
      });
  }
}
