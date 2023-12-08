import React from 'react'
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-md">
        <div className="container-fluid mx-2">
          <div className="navbar-header">
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#toggle-navbar"
              aria-controls="toggle-navbar"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <i className="uil-bars text-white"></i>
            </button>
            <Link className="navbar-brand">
              <img
                className="rounded img-fluid"
                width="65"
                src="logo.png"
                alt=""
              />
            </Link>
          </div>
          <div className="collapse navbar-collapse" id="toggle-navbar">
            <ul className="navbar-nav ms-auto">
              <li class="nav-item">
                <Link class="nav-link" href="#">
                  Log in
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" href="#">
                  Account
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" href="#">
                  Log out
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar