import React, {  useEffect, useContext } from "react";
import { useParams, Link } from "react-router-dom";
import DetailsComponent from "../component/DetailsComponent";
import { Context } from "../store/appContext";
import "../../styles/demo.css";

export const Demo = () => {
  const { store, actions } = useContext(Context);
  const { type, uid } = useParams();
  
  const isCharacter = store.characters.some(character => character.uid.toString() === uid.toString());
  const isVehicle = store.vehicles.some(vehicle => vehicle.uid.toString() === uid.toString());
  const isPlanet = store.planets.some(planet => planet.uid.toString() === uid.toString());


  useEffect(() => {
    if (type === "character") {
      if (uid && !store.characterDetails[uid]) {
        actions.fetchCharacterDetails(uid);
      }
    } else if (type === "vehicle") {
      if (uid && !store.vehicleDetails[uid]) {
        actions.fetchVehicleDetails(uid);
      }
    } else if (type === "planet") {
      if (uid && !store.planetDetails[uid]) {
        actions.fetchPlanetDetails(uid);
      }
    }
  }, [type, uid, actions, store.characterDetails, store.vehicleDetails, store.planetDetails]);

  const details = type === "character" ? store.characterDetails[uid] || {} :
                  type === "vehicle" ? store.vehicleDetails[uid] || {} :
                  store.planetDetails[uid] || {};

  const imageUrl = type === "character" 
    ? `https://starwars-visualguide.com/assets/img/characters/${uid}.jpg` 
    : type === "vehicle"
    ? `https://starwars-visualguide.com/assets/img/vehicles/${uid}.jpg`
    : `https://starwars-visualguide.com/assets/img/planets/${uid}.jpg`;


  return (
    <div className="container">
        <div className="d-flex justify-content-center">
          <DetailsComponent

          title={details.name || "Loading..."}

          description={`This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer. ${
            type === "character" ? "" : type === "vehicle" ? `Model: ${details.model || "unknown"}, Manufacturer: ${details.manufacturer || "unknown"}` : `Climate: ${details.climate || "unknown"}, Terrain: ${details.terrain || "unknown"}`
          }`}
          imageUrl={imageUrl}
          lastUpdated={details.edited || "unknown"}
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

