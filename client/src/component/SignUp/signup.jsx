import React, { Component } from 'react';
import Button from '../Button/button';
import FormInput from '../FormInput/formInput';

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

  handleSubmit = e => {
    e.preventDefault();

    const { lastname, firstname, email, password } = this.state;

    if (password !== confirmPassword) {
      alert('Passwrd do not match');
      return;
    }
  };

  handleChange = e => {};

  render() {
    return (
      <div className="sign-up">
        <form className="sign-up-form" onSubmit={this.handleSubmit}>
          <FormInput
            type="text"
            name=""
            value={this.state.lastname}
            handleChange={this.handleChange}
            label="Last name"
            required
          />
          <FormInput
            type="text"
            name=""
            value={this.state.firstname}
            handleChange={this.handleChange}
            label="First name"
            required
          />
          <FormInput
            type="email"
            name="email"
            value={this.state.email}
            onChange={this.handleChange}
            label="Email"
            required
          />
          <FormInput
            type="password"
            name="password"
            value={this.state.password}
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
