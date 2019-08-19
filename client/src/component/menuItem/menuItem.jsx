import React from 'react';

function MenuItem({}) {
  return (
    <div className="top container-fluid">
      <div className="row">
        <div className="col-md-6" style={{}}>
          <img
            src="https://res.cloudinary.com/vectormike/image/upload/v1564498173/new-arrivals.jpg"
            className=""
            alt="..."
          />
          <div className="content">
            <h1>{}</h1>
            <span>BUY</span>
          </div>
        </div>
        <div className="col-md-6" style={{}}>
          <img
            src="https://res.cloudinary.com/vectormike/image/upload/v1564498173/new-arrivals.jpg"
            className=""
            alt="..."
          />
          <div className="content">
            <h1>{}</h1>
            <span>BUY</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MenuItem;
