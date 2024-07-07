import React, { Component } from "react";
import { Link } from "react-router-dom";
import { BsBagHeartFill } from "react-icons/bs";


const CardComponent = ({ imageSrc, title, gender, haircolor, eyecolor, buttonLink, buttonText }) => {
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
          <Link to="/demo">
            <a href={buttonLink} className="btn btn-dark">
              {buttonText}
            </a>
            </Link>
            <button type="button" class="btn btn-warning ms-4"><BsBagHeartFill /></button>
          </div>
      </div>
    </div>
  );
};

export default CardComponent;
