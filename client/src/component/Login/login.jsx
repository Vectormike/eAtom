import React, { Component } from 'react';
import './login.css';
import Footer from '../../component/Footer/footer';
import Navbar from '../../component/Navbar/navbar';

class Login extends Component {
  constructor() {
    super();

    this.state = {
      email: '',
      password: '',
    };
  }

  onEmailChange = event => {
    this.setState({ email: event.target.value });
  };

  onPasswordChange = event => {
    this.setState({ password: event.target.value });
  };

  onLoginSubmit = e => {
    e.preventDefault();
    fetch('http://localhost:5000/login', {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        email: this.state.signInEmail,
        password: this.state.signInPassword,
      }),
    })
      .then(response => response.json())
      .then(console.log);
  };

  render() {
    return (
      <div className="">
        <form>
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={this.state.email}
            required
          />
          <label>Password</label>
          <input
            name="password"
            type="password"
            value={this.state.password}
            required
          />
          <input type="submit" value="Submit Form  "/>
        </form>
      </div>
    );
  }
}

export default Login;
