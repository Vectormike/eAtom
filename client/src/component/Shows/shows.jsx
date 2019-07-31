import React from 'react';

export default function Show() {
  return (
    <div className="">
      <div class="slide bd-example">
        <div
          id="carouselExampleCaptions"
          class="carousel slide"
          data-ride="carousel"
        >
          <ol class="carousel-indicators">
            <li
              data-target="#carouselExampleCaptions"
              data-slide-to="0"
              class="active"
            />
            <li
              data-target="#carouselExampleCaptions"
              data-slide-to="1"
            />
            <li
              data-target="#carouselExampleCaptions"
              data-slide-to="2"
            />
          </ol>
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img
                src="https://res.cloudinary.com/vectormike/image/upload/v1564498173/new-arrivals.jpg"
                class="d-block w-100"
                alt="..."
              />
              <div class="carousel-caption d-none d-md-block">
                <h5>First slide label</h5>
                <p>
                  Nulla vitae elit libero, a pharetra augue mollis
                  interdum.
                </p>
              </div>
            </div>
            <div class="carousel-item">
              <img
                src="https://res.cloudinary.com/vectormike/image/upload/v1564498173/new-arrivals.jpg"
                class="d-block w-100"
                alt="..."
              />
              <div class="carousel-caption d-none d-md-block">
                <h5>Second slide label</h5>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing
                  elit.
                </p>
              </div>
            </div>
            <div class="carousel-item">
              <img
                src="https://res.cloudinary.com/vectormike/image/upload/v1564498173/new-arrivals.jpg"
                class="d-block w-100"
                alt="ff"
              />
              <div class="carousel-caption d-none d-md-block">
                <h5>Third slide label</h5>
                <p>
                  Praesent commodo cursus magna, vel scelerisque nisl
                  consectetur.
                </p>
              </div>
            </div>
          </div>
          <a
            class="carousel-control-prev"
            href="#carouselExampleCaptions"
            role="button"
            data-slide="prev"
          >
            <span
              class="carousel-control-prev-icon"
              aria-hidden="true"
            />
            <span class="sr-only">Previous</span>
          </a>
          <a
            class="carousel-control-next"
            href="#carouselExampleCaptions"
            role="button"
            data-slide="next"
          >
            <span
              class="carousel-control-next-icon"
              aria-hidden="true"
            />
            <span class="sr-only">Next</span>
          </a>
        </div>
      </div>

      <div className="top container-fluid">
        <div className="row">
          <div className="col-md-6" style={{}}>
            <img
              src="https://res.cloudinary.com/vectormike/image/upload/v1564498173/new-arrivals.jpg"
              className=""
              alt="..."
            />
          </div>
          <div className="col-md-3" style={{}}>
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
    </div>
  );
}
