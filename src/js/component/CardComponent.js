import React, { Component } from "react";

const CardComponent = ({ imageSrc, title, text, buttonLink, buttonText }) => {
  return (
    <div className="card" style={{ width: "10rem", height: "20rem" }}>
      <img
        src={imageSrc}
        className="card-img-top"
        alt={title}
        style={{ height: "10rem", objectFit: "cover" }}
      />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{text}</p>
        <a href={buttonLink} className="btn btn-primary">
          {buttonText}
        </a>
      </div>
    </div>
  );
};

export default CardComponent;
