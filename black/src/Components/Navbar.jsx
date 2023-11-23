import React from "react";

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
            <a className="navbar-brand" href="#">
              admin<span className="main-color">kit</span>
            </a>
          </div>
          <div className="collapse navbar-collapse" id="toggle-navbar">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Settings
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <a className="dropdown-item" href="#">
                      My account
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      My inbox
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Help
                    </a>
                  </li>

                  <li>
                    <a className="dropdown-item" href="#">
                      Log out
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
