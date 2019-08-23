import React, { Component } from 'react';
import './login.scss';
import FormInput from '../FormInput/formInput';
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

  onSubmit = e => {
    e.preventDefault();
    this.setState({ email: '', password: '' });
  };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
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
      <div className="sign-in">
        <form>
          <label>Email</label>
          <FormInput
            type="email" 
            name="email"
            value={this.state.email}
            handleChange={this.handleChange}
            required
          />
          <label>Password</label>
          <FormInput
            name="password"
            type="password"
            value={this.state.password}
            handleChange={this.handleChange}
            required
          />
          <input type="submit" value="Submit Form  " />
        </form>
      </div>
    );
  }
}

export default Login;
