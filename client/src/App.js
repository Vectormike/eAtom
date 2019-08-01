import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './component/Home/home';
import Login from './component/Login/login';

function App() {
  return (
    <div>
      <Route exact path="/" component={Home} />
      <Route path="/login" component={Login} />
    </div>
  );
}

export default App;
