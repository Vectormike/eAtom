import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import { setCurrentUser } from './services/redux/actions/user.action';
import './App.css';

import Navbar from './component/Navbar/navbar';
import HomePage from './pages/HomePage/homepage';
import Shop from './pages/Shop/shop';
import Login from './pages/LoginRegister/loginRegister';
import Dashboard from './pages/CheckoutPage/checkout';
import {
  auth,
  createUserProfile,
} from './services/firebase/firebase.utils';


class App extends Component {
  unsubscribeFromAuth = null;

  componentDidMount() {
    const { setPresentUser } = this.props;
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async user => {
      const userRef = await createUserProfile(user);

      if (user) {
        userRef.onSnapshot(snapshot => {
          setPresentUser({
            id: snapshot.id,
            ...snapshot.data(),
          });
        });
      } else {
        setPresentUser(user);
      }
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Navbar />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={Shop} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/checkout" component={Dashboard} />
        </Switch>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  setPresentUser: user => dispatch(setCurrentUser(user)),
});

export default connect(
  null,
  mapDispatchToProps,
)(App);
