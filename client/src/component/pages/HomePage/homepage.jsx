import React from 'react';
import Navbar from '../../Navbar/navbar';
import Footer from '../../Footer/footer';

export default function HomePage() {
  return (
    <div>
      <Navbar />
      <div className="top container-fluid">
        <div className="row">
          <div className="col-md-6" style={{}}>
            <img
              src="https://res.cloudinary.com/vectormike/image/upload/v1564498173/new-arrivals.jpg"
              className=""
              alt="..."
            />
          </div>
          <div className="col-md-6" style={{}}>
            <img
              src="https://res.cloudinary.com/vectormike/image/upload/v1564498173/new-arrivals.jpg"
              className=""
              alt="..."
            />
          </div>
        </div>
      </div>
      <div className="bottom container-fluid">
        <div className="row">
          <div class="col-md-4" style={{}}>
            <img
              src="https://res.cloudinary.com/vectormike/image/upload/v1564498173/new-arrivals.jpg"
              className=""
              alt="New Arrivals"
            />
          </div>
          <div className="col-md-4" style={{}}>
            <img
              src="https://res.cloudinary.com/vectormike/image/upload/v1564498173/new-arrivals.jpg"
              className=""
              alt="..."
            />
          </div>
          <div className="col-md-4" style={{}}>
            <img
              src="https://res.cloudinary.com/vectormike/image/upload/v1564498173/new-arrivals.jpg"
              className=""
              alt="..."
            />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
