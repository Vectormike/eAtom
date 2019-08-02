import React, { Component } from 'react';
import './dashboard.css';
import Navbar from '../Navbar/navbar';
import Footer from '../Footer/footer';

class Dashboard extends Component {
  render() {
    return (
      <div class="container">
        <Navbar />
        <div class="dashboard">
          <h1 class="text-center">Your Orders</h1>
          <div class="status">
            <div class="row">
              <div class="col-md-6">
                <nav aria-label="breadcrumb">
                  <ol class="breadcrumb">
                    <li
                      class="breadcrumb-item active"
                      aria-current="page"
                    >
                      Orders /
                    </li>
                  </ol>
                  <table class="table">
                    <thead class="thead-dark">
                      <tr>
                        <th scope="col">ORDER #</th>
                        <th scope="col">DATE</th>
                        <th scope="col">STATUS</th>
                        <th scope="col">ACTION</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th scope="row">1</th>
                        <td>1/8/19</td>
                        <td>Delivered</td>
                        <td>
                          <button
                            type="button"
                            class="btn btn-outline-dark"
                          >
                            View
                          </button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </nav>
              </div>
              <div class="col-md-6">
                <nav aria-label="breadcrumb">
                  <ol class="breadcrumb">
                    <li
                      class="breadcrumb-item active"
                      aria-current="page"
                    >
                      Profile /
                    </li>
                  </ol>
                </nav>
                <div class="card">
                  <img
                    src="https://res.cloudinary.com/vectormike/image/upload/v1564498173/new-arrivals.jpg"
                    class="image"
                    alt="..."
                  />
                  <div class="card-body">
                    <h5 class="user-name text-center">Anonymous</h5>
                    <div class="list-group">
                      <a
                        href="to"
                        class="list-group-item list-group-item-action"
                      >
                        Profile
                      </a>
                      <a
                        href="to"
                        class="list-group-item list-group-item-action"
                      >
                        Dapibus ac facilisis in
                      </a>
                      <a
                        href="to"
                        class="list-group-item list-group-item-action"
                      >
                        Logout
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Dashboard;
