import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './login.css';
import Footer from '../Footer/footer';
import Navbar from '../Navbar/navbar';

class Login extends Component {
  constructor() {
    super();

    this.state = {
      signInEmail: '',
      signInPassword: '',
    };
  }

  onEmailChange = event => {
    this.setState({ signInEmail: event.target.value });
  };

  onPasswordChange = event => {
    this.setState({ signInPassword: event.target.value });
  };

  onSubmit = () => {
    console.log(this.state);
    fetch('http://localhost:5000/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        email: this.state.signInEmail,
        password: this.state.signInPassword,
      }),
    });
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
                        className="form-control"
                        id="email"
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
                  <Link to="/dashboard">
                    <button
                      type="submit"
                      onClick={this.onSubmit}
                      className="btn btn-primary"
                    >
                      Submit
                    </button>
                  </Link>
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
                        id="lastname"
                        placeholder="Last name"
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
                    onClick={this.onSubmit}
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
