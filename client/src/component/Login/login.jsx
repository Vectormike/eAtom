import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './login.css';
import Footer from '../Footer/footer';
import Navbar from '../Navbar/navbar';

class Login extends Component {
  render() {
    return (
      <div class="loginRegister">
        <Navbar />
        <div class="container-fluid">
          <div class="row">
            <div class="col-md-6">
              <div class="login border">
                <nav aria-label="breadcrumb">
                  <ol class="breadcrumb">
                    <li
                      class="breadcrumb-item active"
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
                <form class="text-center">
                  <div class="form-group">
                    <label for="InputEmail">
                      <input
                        type="email"
                        class="form-control"
                        id="email"
                        aria-describedby="emailHelp"
                        placeholder="Email Address"
                      />
                    </label>
                  </div>
                  <div class="form-group">
                    <label for="password">
                      <input
                        type="password"
                        class="form-control"
                        placeholder="Password"
                      />
                    </label>
                  </div>
                  <Link to="/dashboard">
                  <button type="submit" class="btn btn-primary">
                    Submit
                  </button>
                  </Link>
                </form>
              </div>
            </div>
            <div class="col-md-6">
              <div class="register border">
                <nav aria-label="breadcrumb">
                  <ol class="breadcrumb">
                    <li
                      class="breadcrumb-item active"
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
                <form class="text-center">
                  <div class="form-group">
                    <label for="lastname">
                      <input
                        type="text"
                        class="form-control"
                        id="lastname"
                        placeholder="Last name"
                      />
                    </label>
                  </div>
                  <div class="form-group">
                    <label for="firstname">
                      <input
                        type="text"
                        class="form-control"
                        id="lastname"
                        placeholder="First name"
                      />
                    </label>
                  </div>
                  <div class="form-group">
                    <label for="InputEmail">
                      <input
                        type="email"
                        class="form-control"
                        id="email"
                        aria-describedby="emailHelp"
                        placeholder="Email Address"
                      />
                      <small
                        id="emailHelp"
                        class="form-text text-muted"
                      >
                        We'll never share your email with anyone else.
                      </small>
                    </label>
                  </div>
                  <div class="form-group">
                    <label for="password">
                      <input
                        type="password"
                        class="form-control"
                        placeholder="Password"
                      />
                      <small
                        id="emailHelp"
                        class="form-text text-muted"
                      >
                        Choose a more secured password. It's safe
                        anyways.
                      </small>
                    </label>
                  </div>
                  <button type="submit" class="btn btn-primary">
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
