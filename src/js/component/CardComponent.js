import React, { Component, useContext } from "react";
import { Link } from "react-router-dom";
import { BsBagHeartFill } from "react-icons/bs";
import { Context } from "../store/appContext";


const CardComponent = ({ imageSrc, title, gender, haircolor, eyecolor, buttonLink, buttonText }) => {
  
  const { actions } = useContext(Context);

  const handleAddFavorite = () => {
    actions.addFavorite({ uid, title, type });
  };

  return (
    <div className="card" >
      <img
        src={imageSrc}
        className="card-img-top"
        alt={title}
        style={{ height: "10rem", objectFit: "cover" }}
      />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text mb-0">{gender}</p>
        <p className="card-text mb-0">{haircolor}</p>
        <p className="card-text">{eyecolor}</p>
        <div>
          <Link to={buttonLink} className="btn btn-dark">
            {buttonText}
          </Link>
          <button type="button" className="btn btn-warning ms-4" onClick={handleAddFavorite}><BsBagHeartFill /></button>
        </div>
      </div>
    </div>
  );
};

export default CardComponent;
