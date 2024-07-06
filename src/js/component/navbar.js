import React from "react";
import { Link } from "react-router-dom";
import { BsHeartFill } from "react-icons/bs";

export const Navbar = () => {
  return (
    <nav className="navbar navbar-light bg-black mb-3">
      <div className="container d-flex justify-content-between">
        <Link to="/">
          <img
            src="https://lafrikileria.com/blog/wp-content/uploads/2018/05/Star-Wars-Logo-feature.jpg"
            className="rounded-circle"
            alt=""
            style={{ width: "150px", height: "100px" }}
          ></img>
        </Link>

        {/* dropdown */}
        <div className="dropdown">
          <button
            className="btn btn-secondary  ms-4 fw-bolder"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            FAVORITES <BsHeartFill />
          </button>
          <ul className="dropdown-menu">
            <li>
              <button className="dropdown-item" type="button">
                Action
              </button>
            </li>
            <li>
              <button className="dropdown-item" type="button">
                Another action
              </button>
            </li>
            <li>
              <button className="dropdown-item" type="button">
                Something else here
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
