import React, { Component,useContext, useState } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { BsHeartFill } from "react-icons/bs";

const CardComponent = ({ imageSrc, title, gender, haircolor, eyecolor, buttonLink, buttonText, uid, type ,fallbackSrc}) => {
  
  const { actions } = useContext(Context);
  const [currentImageSrc, setCurrentImageSrc] = useState(imageSrc);

  const handleAddFavorite = (uid) => {
    
    actions.addFavorite({ uid, title, type });
  };

  const handleImageError = () => {
    setCurrentImageSrc(fallbackSrc);
  };

  return (
    <div className="card" >
      <img
        src={currentImageSrc}
        className="card-img-top"
        alt={title}
        
        onError={handleImageError}
      />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text mb-0">{gender}</p>
        <p className="card-text mb-0">{haircolor}</p>
        <p className="card-text">{eyecolor}</p>
        <div>
          <Link to={buttonLink} className="btn btn-dark  fw-bolder">
            MORE INFO
          </Link>
          <button type="button" className="btn btn-warning ms-4"  onClick={handleAddFavorite}> <BsHeartFill /> </button>
        </div>
      </div>
    </div>
  );
};

export default CardComponent;
