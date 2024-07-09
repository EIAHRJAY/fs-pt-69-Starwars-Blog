import React, { Component, useState } from "react";
import "../../styles/demo.css";

const Details = ({ title, description, imageUrl, lastUpdated, fallbackSrc }) => {

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
              <p className="card-text details-text">{description}</p>
              <p className="card-text details-text">{description}</p>
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