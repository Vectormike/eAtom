import React, { Component } from 'react';
import { signInWithGoogle } from '../../services/firebase/firebase.utils';
import './login.scss';
import FormInput from '../FormInput/formInput';
import Button from '../Button/button';

// import Footer from '../../component/Footer/footer';
// import Navbar from '../../component/Navbar/navbar';

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
    };
  }

  onSubmit = e => {
    e.preventDefault();
    this.setState({ email: '', password: '' });
  };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  // onLoginSubmit = e => {
  //   e.preventDefault();
  //   fetch('http://localhost:5000/login', {
  //     method: 'post',
  //     headers: { 'Content-Type': 'application/json' },
  //     body: JSON.stringify({
  //       email: this.state.signInEmail,
  //       password: this.state.signInPassword,
  //     }),
  //   })
  //     .then(response => response.json())
  //     .then(console.log);
  // };

  render() {
    return (
      <div className="sign-in">
        <form>
          <FormInput
            type="email"
            name="email"
            value={this.state.email}
            handleChange={this.handleChange}
            label="email"
            required
          />
          <FormInput
            name="password"
            type="password"
            value={this.state.password}
            handleChange={this.handleChange}
            required
          />
          <div className="buttons">
            <Button type="submit">Login</Button>
            <Button isGoogleSignIn onClick={signInWithGoogle}>
              Login With Google
            </Button>
          </div>
        </form>
      </div>
    );
  }
}

export default Login;
