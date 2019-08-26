import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';

import HomePage from './pages/HomePage/homepage';
import Shop from './pages/Shop/shop';
import Login from './pages/LoginRegister/loginRegister';
import Dashboard from './pages/Dashboard/dashboard';

class App extends Component {
  render() {
    return (
      <div>
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
