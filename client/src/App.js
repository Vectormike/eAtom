import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './component/Home/home';
import Login from './component/Login/login';
import Dashboard from './component/Dashboard/dashboard';

function App() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/login" component={Login} />
      <Route path="/dashboard" component={Dashboard} />
    </Switch>
  );
}

export default App;
