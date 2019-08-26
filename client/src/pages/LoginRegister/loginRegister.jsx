import React   from 'react';

import Login from '../../component/Login/login';
// import Footer from '../../component/Footer/footer';
// import Navbar from '../../component/Navbar/navbar';

const LoginRegister = () => {
  // onRegisterSubmit = e => {
  //   e.preventDefault();
  //   fetch('http://localhost:5000/register', {
  //     method: 'post',
  //     headers: { 'Content-Type': 'application/json' },
  //     body: JSON.stringify({
  //       lastname: this.state.lastname,
  //       firstname: this.state.firstname,
  //       email: this.state.email,
  //       password: this.state.password,
  //     }),
  //   })
  //     .then(response => response.json())
  //     .then(data => {
  //       if (data === 'User Created') {
  //       }
  //     });
  // };

  return (
    <div className="loginRegister">
      <Login />
    </div>
  );
};

export default LoginRegister;
