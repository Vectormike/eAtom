import React from 'react';

export default function Show() {
  return (
    <div className="container">
      <div className="row">
        <div class="col card" style={{ width: '18rem' }}>
          <img
            src="../Shows/images/new-arrivals.jpg"
            class="card-img-top"
            alt="New Arrivals"
          />
        </div>
        <div class="col-6 card" style={{ width: '18rem' }}>
          <img
            src="../Shows/images/new-arrivals.jpg"
            class="card-img-top"
            alt="..."
          />
        </div>
        <div class="col card" style={{ width: '18rem' }}>
          <img
            src="../Shows/images/new-arrivals.jpg"
            class="card-img-top"
            alt="..."
          />
        </div>
      </div>
    </div>
  );
}
