import React, { Component, useState } from "react";
import "../../styles/demo.css";

const Details = ({ title, details, type, imageUrl, lastUpdated, fallbackSrc }) => {

  const [currentImageUrl, setCurrentImageUrl] = useState(imageUrl);

   
  const handleImageError = () => {
    setCurrentImageUrl(fallbackSrc);
  };


    return (
      <div className="card mb-3 details-card">
        <div className="row g-0">
          <div className="col-md-4">
            <img 
              src={currentImageUrl} 
              className="img-fluid rounded-start details-img"  
              alt={title} 
              onError={handleImageError}  
            />
          </div>
          <div className="col-md-8">
            <div className="card-body details-body">
              <h5 className="card-title details-title">{title}</h5>
              
              <p className="card-text details-text">{details.description}</p>
              {type === "character" && (
              <>
                <p className="card-text details-text">Height: {details.height}</p>
                <p className="card-text details-text">Mass: {details.mass}</p>
                <p className="card-text details-text">Hair Color: {details.hair_color}</p>
                <p className="card-text details-text">Skin Color: {details.skin_color}</p>
                <p className="card-text details-text">Eye Color: {details.eye_color}</p>
                <p className="card-text details-text">Birth Year: {details.birth_year}</p>
                <p className="card-text details-text">Gender: {details.gender}</p>
              </>
            )}
            {type === "vehicle" && (
              <>
                <p className="card-text details-text">Model: {details.model}</p>
                <p className="card-text details-text">Vehicle Class: {details.vehicle_class}</p>
                <p className="card-text details-text">Manufacturer: {details.manufacturer}</p>
                <p className="card-text details-text">Cost: {details.cost_in_credits}</p>
                <p className="card-text details-text">Length: {details.length}</p>
                <p className="card-text details-text">Crew: {details.crew}</p>
                <p className="card-text details-text">Passengers: {details.passengers}</p>
                <p className="card-text details-text">Max Speed: {details.max_atmosphering_speed}</p>
                <p className="card-text details-text">Cargo Capacity: {details.cargo_capacity}</p>
                <p className="card-text details-text">Consumables: {details.consumables}</p>
              </>
            )}
            {type === "planet" && (
              <>
                <p className="card-text details-text">Diameter: {details.diameter}</p>
                <p className="card-text details-text">Rotation Period: {details.rotation_period}</p>
                <p className="card-text details-text">Orbital Period: {details.orbital_period}</p>
                <p className="card-text details-text">Gravity: {details.gravity}</p>
                <p className="card-text details-text">Population: {details.population}</p>
                <p className="card-text details-text">Climate: {details.climate}</p>
                <p className="card-text details-text">Terrain: {details.terrain}</p>
                <p className="card-text details-text">Surface Water: {details.surface_water}</p>
              </>
            )}
              <hr/>
              <p className="card-text">
                
                <small className="text-body-secondary details-secondary">
                  Last updated {lastUpdated}
                </small>
            
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default Details;