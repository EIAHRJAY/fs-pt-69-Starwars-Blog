import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import DetailsComponent from "../component/DetailsComponent";
import { Context } from "../store/appContext";

// import "../../styles/demo.css";

export const Demo = () => {
  const { store, actions } = useContext(Context);

  return (
    <div className="container">
        <div className="d-flex justify-content-center">
          <DetailsComponent
          title = "Luke Skywalker"
          description = "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."
          imageUrl = "https://starwars-visualguide.com/assets/img/characters/2.jpg"
          lastUpdated
          />
        </div>

      <Link to="/">
      <button
            className="btn btn-secondary  mt-5 fw-bolder"
            type="button"
            
            aria-expanded="false"
          >
            BACK HOME 
          </button>
      </Link>
    </div>
  );
};

