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
      alert('Password do not match');
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
      .then(message => {
        if (message) {
          console.log(message.message);
        }
      })
      .catch(error => console.error(error));
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
            label="last name"
            required
          />
          <FormInput
            type="text"
            name="firstname"
            value={firstname}
            handleChange={this.handleChange}
            label="first name"
            required
          />
          <FormInput
            type="email"
            name="email"
            value={email}
            onChange={this.handleChange}
            label="email"
            required
          />
          <FormInput
            type="password"
            name="password"
            value={password}
            onChange={this.handleChange}
            label="password"
            required
          />
          <FormInput
            type="password"
            name="confirmPassword"
            value={confirmPassword}
            onChange={this.handleChange}
            label="confirm Password"
            required
          />
          <Button type="submit">Register</Button>
        </form>
      </div>
    );
  }
}

export default SignUp;
