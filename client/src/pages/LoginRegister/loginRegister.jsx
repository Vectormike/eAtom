import React from 'react';

import Login from '../../component/Login/login';
import SignUp from '../../component/SignUp/signup';
// import Footer from '../../component/Footer/footer';
// import Navbar from '../../component/Navbar/navbar';

const LoginRegister = () => {
  return (
    <div className="loginRegister">
      <Login />
      <SignUp />
    </div>
  );
};

export default LoginRegister;
