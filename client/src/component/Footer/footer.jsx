import React from 'react';

export default function Footer() {
  return (
    <div className="container-fluid">
      <form>
        <div class="form-group row">
          <div className=" col-md-4">
            <h5>Connect</h5>
            <ul>
              <li>
                <i
                  class="fab fa-facebook"
                  aria-hidden="true"
                />
              </li>
              <li>
                <i class="fab fa-instagram" aria-hidden="true" />
              </li>
              <li>
                <i class="fab fa-pinterest" aria-hidden="true" />
              </li>
            </ul>
          </div>

          <div className=" col-md-4">
            <h5>Shop</h5>
            <ul>
              <li>For Women</li>
              <li>For Men</li>
              <li>For Children</li>
            </ul>
          </div>

          <div className=" col-md-4">
            <label
              for="staticEmail"
              class="col-sm-12 col-md-4 col-form-label"
            >
              Email
            </label>
            <div class="col-sm-12 col-md-4">
              <input
                type="text"
                class="form-control-plaintext"
                id="staticEmail"
                placeholder="Your Email Address"
              />
            </div>
          </div>
        </div>
      </form>
      <p className="float-left">2019. All rights reserved.</p>
      <p className="float-right">Support me</p>
      <div className="fixed-bottom">
        <i
          className="float-right fa fa-arrow-circle-up"
          aria-hidden="true"
        />
      </div>
    </div>
  );
}
