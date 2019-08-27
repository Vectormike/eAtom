import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';

import Navbar from './component/Navbar/navbar';
import HomePage from './pages/HomePage/homepage';
import Shop from './pages/Shop/shop';
import Login from './pages/LoginRegister/loginRegister';
import Dashboard from './pages/Dashboard/dashboard';
import { auth, createUserProfile } from './services/firebase/firebase.utils';

class App extends Component {
  constructor() {
    super();

    this.state = {
      presentUser: null,
    };
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async user => {
      createUserProfile(user)

      console.log(user);
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Navbar presentUser={this.state.presentUser} />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={Shop} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/dashboard" component={Dashboard} />
        </Switch>
      </div>
    );
  }
}

export default App;
