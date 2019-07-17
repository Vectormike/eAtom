import User from '../model/user';

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
      lastname,
      firstname,
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
            lastname: user.lastname,
            firstname: user.firstname,
            email: user.email,
          },
        });
      })
      .catch(err => {
        res.json({
          status: err.status,
          message: 'no user created',
        });
      });
  }
}
