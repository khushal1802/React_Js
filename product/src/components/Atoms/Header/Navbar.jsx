import React from "react";
import { Link } from "react-router-dom";

const Navbar = ({ data }) => {
  console.log(data, "data");
  return (
    <nav class="navbar navbar-expand-lg">
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <a class="navbar-brand" href="#">
        My Product
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
        <span class="navbar-toggler-icon"></span>
      </button>

        <ul class="navbar-nav mr-auto">
          {data?.map((val, ind) => {
            return (
              <li class="nav-item active" key={ind}>
                <Link to={`${val.path}`} class="nav-link">
                  {val.name}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
