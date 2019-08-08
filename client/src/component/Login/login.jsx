import React, { Component } from 'react';
import {} from 'react-router-dom';
import './login.css';
import Footer from '../Footer/footer';
import Navbar from '../Navbar/navbar';

class Login extends Component {
  constructor() {
    super();

    this.state = {
      lastname: '',
      firstname: '',
      email: '',
      password: '',
    };
  }

  onLastNameChange = event => {
    this.setState({ lastname: event.target.value });
  };

  onFirstNameChange = event => {
    this.setState({ firstname: event.target.value });
  };

  onEmailChange = event => {
    this.setState({ email: event.target.value });
  };

  onPasswordChange = event => {
    this.setState({ password: event.target.value });
  };

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
      .then(console.log);
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
      <div className="loginRegister">
        <Navbar />
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-6">
              <div className="login border">
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb">
                    <li
                      className="breadcrumb-item active"
                      aria-current="page"
                    >
                      LOGIN
                    </li>
                  </ol>
                </nav>
                <h5>Already our customer?</h5>
                <p>
                  Do proident fugiat ad laborum incididunt sunt
                  exercitation deserunt adipisicing labore
                  reprehenderit consequat. Quis amet ex ex id enim non
                  id nostrud id eiusmod fugiat reprehenderit. Velit
                  velit nulla ullamco occaecat ut consectetur minim
                  aliqua laboris pariatur aliquip fugiat occaecat.
                  Velit ipsum sint eiusmod cillum dolore esse sit.
                </p>
                <hr />
                <form className="text-center">
                  <div className="form-group">
                    <label htmlFor="InputEmail">
                      <input
                        type="email"
                        id="email"
                        className="form-control"
                        aria-describedby="emailHelp"
                        placeholder="Email Address"
                        onChange={this.onEmailChange}
                      />
                    </label>
                  </div>
                  <div className="form-group">
                    <label htmlFor="password">
                      <input
                        type="password"
                        className="form-control"
                        placeholder="Password"
                        onChange={this.onPasswordChange}
                      />
                    </label>
                  </div>

                  <button
                    type="submit"
                    onClick={this.onLoginSubmit}
                    className="btn btn-primary"
                  >
                    Submit
                  </button>
                </form>
              </div>
            </div>
            <div className="col-md-6">
              <div className="register border">
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb">
                    <li
                      className="breadcrumb-item active"
                      aria-current="page"
                    >
                      Register
                    </li>
                  </ol>
                </nav>
                <h5>Be our customer?</h5>
                <p>
                  Do proident fugiat ad laborum incididunt sunt
                  exercitation deserunt adipisicing labore
                  reprehenderit consequat. Quis amet ex ex id enim non
                  id nostrud id eiusmod fugiat reprehenderit. Velit
                  velit nulla ullamco occaecat ut consectetur minim
                  aliqua laboris pariatur aliquip fugiat occaecat.
                  Velit ipsum sint eiusmod cillum dolore esse sit.
                </p>
                <hr />
                <form className="text-center">
                  <div className="form-group">
                    <label htmlFor="lastname">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Last name"
                        onChange={this.onLastNameChange}
                      />
                    </label>
                  </div>
                  <div className="form-group">
                    <label htmlFor="firstname">
                      <input
                        type="text"
                        className="form-control"
                        id="lastname"
                        placeholder="First name"
                        onChange={this.onFirstNameChange}
                      />
                    </label>
                  </div>
                  <div className="form-group">
                    <label htmlFor="InputEmail">
                      <input
                        type="email"
                        className="form-control"
                        id="email"
                        aria-describedby="emailHelp"
                        placeholder="Email Address"
                        onChange={this.onEmailChange}
                      />
                      <small
                        id="emailHelp"
                        className="form-text text-muted"
                      >
                        We'll never share your email with anyone else.
                      </small>
                    </label>
                  </div>
                  <div className="form-group">
                    <label htmlFor="password">
                      <input
                        type="password"
                        className="form-control"
                        placeholder="Password"
                        onChange={this.onPasswordChange}
                      />
                      <small
                        id="emailHelp"
                        className="form-text text-muted"
                      >
                        Choose a more secured password. It's safe
                        anyways.
                      </small>
                    </label>
                  </div>
                  <button
                    type="submit"
                    onClick={this.onRegisterSubmit}
                    className="btn btn-primary"
                  >
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Login;
