import React, { Component } from 'react';
import './dashboard.css';
import Navbar from '../Navbar/navbar';
import Footer from '../Footer/footer';

class Dashboard extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <div class="dashboard">
          <h1>Your Orders</h1>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Dashboard;
