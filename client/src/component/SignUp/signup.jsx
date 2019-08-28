import React, { Component } from 'react';
import Button from '../Button/button';
import FormInput from '../FormInput/formInput';

import './signup.scss';

class SignUp extends Component {
  constructor() {
    super();

    this.state = {
      lastname: '',
      firstname: '',
      email: '',
      password: '',
      confirmPassword: '',
    };
  }

  handleChange = e => {
    const { value, name } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();

    const {
      lastname,
      firstname,
      email,
      password,
      confirmPassword,
    } = this.state;

    if (password !== confirmPassword) {
      alert('Passwrd do not match');
      return;
    }

    fetch('http://localhost:5000/register', {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        lastname: lastname,
        firstname: firstname,
        email: email,
        password: password,
      }),
    })
      .then(response => response.json())
      .then(data => {
        if (data === 'User Created') {
        }
      });
  };

  render() {
    const {
      lastname,
      firstname,
      email,
      password,
      confirmPassword,
    } = this.state;

    return (
      <div className="sign-up">
        <form className="sign-up-form" onSubmit={this.handleSubmit}>
          <FormInput
            type="text"
            name="lastname"
            value={lastname}
            handleChange={this.handleChange}
            label="Last name"
            required
          />
          <FormInput
            type="text"
            name="firstname"
            value={firstname}
            handleChange={this.handleChange}
            label="First name"
            required
          />
          <FormInput
            type="email"
            name="email"
            value={email}
            onChange={this.handleChange}
            label="Email"
            required
          />
          <FormInput
            type="password"
            name="password"
            value={password}
            onChange={this.handleChange}
            label="Password"
            required
          />
          <FormInput
            type="password"
            name="confirmPassword"
            value={confirmPassword}
            onChange={this.handleChange}
            label="Confirm Password"
            required
          />
          <Button type="submit">Register</Button>
        </form>
      </div>
    );
  }
}

export default SignUp;
