import React, { Component } from "react";
import "../../styles/demo.css";

const Details = ({ title, description, imageUrl, lastUpdated }) => {
    return (
      <div className="card mb-3 details-card">
        <div className="row g-0">
          <div className="col-md-4">
            <img 
              src={imageUrl} 
              className="img-fluid rounded-start details-img"  
              alt={title} 
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