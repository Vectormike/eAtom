import React from 'react';

export default function Navbar() {
  return (
    <nav class="fixed-top navbar navbar-expand-lg navbar-dark bg-dark">
      <a class="navbar-brand" href="to">
        eAtom
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon" />
      </button>

      <div
        class="collapse navbar-collapse"
        id="navbarSupportedContent"
      >
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <a class="nav-link" href="to">
              Home <span class="sr-only">(current)</span>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="to">
              Link
            </a>
          </li>
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              href="to"
              id="navbarDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Dropdown
            </a>
            <div
              class="dropdown-menu"
              aria-labelledby="navbarDropdown"
            >
              <a class="dropdown-item" href="to">
                Action
              </a>
              <a class="dropdown-item" href="to">
                Another action
              </a>
              <div class="dropdown-divider" />
              <a class="dropdown-item" href="to">
                Something else here
              </a>
            </div>
          </li>
          <li class="nav-item">
            <a
              class="nav-link"
              href="to"
              tabindex="-1"
              aria-disabled="true"
            >
              Disabled
            </a>
          </li>
        </ul>
        <div>
          <form class="form-inline my-2 my-lg-0">
            <input
              class="form-control mr-sm-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button
              class="btn btn-outline-success my-2 my-sm-0"
              type="submit"
            >
              Search
            </button>
          </form>
          <button class="float-right">
            <i class="fas fa-shopping-cart" />
          </button>

          <button class="float-left">
            <i class="fas fa-user" />
          </button>
        </div>
      </div>
    </nav>
  );
}
