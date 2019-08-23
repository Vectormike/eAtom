import React, { Component } from 'react';
import './login.css';
import Login from '../../component/Login/login';
import Footer from '../../component/Footer/footer';
import Navbar from '../../component/Navbar/navbar';

class Login extends Component {
  constructor() {
    super();

    this.state = {
      lastname: '',
      firstname: '',
      email: '',
      password: '',
      user: false,
    };
  }

  onRegisterSubmit = e => {
    e.preventDefault();
    fetch('http://localhost:5000/register', {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        lastname: this.state.lastname,
        firstname: this.state.firstname,
        email: this.state.email,
        password: this.state.password,
      }),
    })
      .then(response => response.json())
      .then(data => {
        if (data === 'User Created') {
        }
      });
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
 
  onRoutChange = () => {
    this.props.history.push('/dashboard');
  };

  render() {
    return (
      <div className="loginRegister">
        <Login />
      </div>
    );
  }
}

export default Login;
