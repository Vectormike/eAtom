import React from 'react';
import { Link } from 'react-router-dom';
import { auth } from '../../services/firebase/firebase.utils.js';
import './navbar.scss';

export default function Navbar({ presentUser }) {
  return (
    <nav className="fixed-top navbar navbar-expand-lg">
      <Link className="navbar-brand" to="/">
        eAtom
      </Link>
      <Link className="" to="/shop">
        Shop
      </Link>
      <button className="float-right">
        <i className="fas fa-shopping-cart" />
      </button>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>

      <div
        className="collapse navbar-collapse"
        id="navbarSupportedContent"
      >
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <Link className="nav-link" to="/login">
              Home <span className="sr-only">(current)</span>
            </Link>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="to">
              Contact
            </a>
          </li>
          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle"
              href="to"
              id="navbarDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              MENU
            </a>
            <div
              className="dropdown-menu"
              aria-labelledby="navbarDropdown"
            >
              <a className="dropdown-item" href="to">
                Men
              </a>
              <a className="dropdown-item" href="to">
                Girls
              </a>
              <div className="dropdown-divider" />
              <a className="dropdown-item" href="to">
                Women
              </a>
            </div>
          </li>
        </ul>
        <div className="auth">
          {presentUser ? (
            <button
              onClick={() => auth.signOut()}
              className="float-left"
            >
              Sign Out <i className="fas fa-sign-out-alt" />
            </button>
          ) : (
            <Link className="float-left" to="/login/">
            <button>Sign In <i className="fas fa-sign-in-alt" /></button>
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
}
