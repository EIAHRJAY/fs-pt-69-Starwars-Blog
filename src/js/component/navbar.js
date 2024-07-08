import React,{ useContext } from "react";
import { Link } from "react-router-dom";
import { BsHeartFill } from "react-icons/bs";
import { Context } from "../store/appContext";


export const Navbar = () => {

  const { store, actions } = useContext(Context);

  const handleRemoveFavorite = (uid) => {
    actions.removeFavorite(uid);
  };

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
          {store.favorites && store.favorites.length > 0 ? (
              store.favorites.map((favorite, index) => (
                <li
                  key={index}
                  className="dropdown-item d-flex justify-content-between align-items-center"
                >
                  <span>{favorite.title}</span>
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => handleRemoveFavorite(favorite.uid)}
                  >
                    X
                  </button>
                </li>
              ))
            ) : (
              <li className="dropdown-item">No favorites added</li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
