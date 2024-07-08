import React, {  useEffect, useContext } from "react";
import { useParams, Link } from "react-router-dom";
import DetailsComponent from "../component/DetailsComponent";
import { Context } from "../store/appContext";
import "../../styles/demo.css";

export const Demo = () => {
  const { store, actions } = useContext(Context);
  const { uid } = useParams();
  
  const isCharacter = store.characters.some(character => character.uid.toString() === uid.toString());
  const isVehicle = store.vehicles.some(vehicle => vehicle.uid.toString() === uid.toString());
  const isPlanet = store.planets.some(planet => planet.uid.toString() === uid.toString());


  useEffect(() => {
    if (isCharacter) {
      if (uid && !store.characterDetails[uid]) {
        actions.fetchCharacterDetails(uid);
      }
    } else if (isVehicle) {
      if (uid && !store.vehicleDetails[uid]) {
        actions.fetchVehicleDetails(uid);
      }
    } else if (isPlanet) {
      if (uid && !store.planetDetails[uid]) {
        actions.fetchPlanetDetails(uid);
      }
    }
  }, [uid, isCharacter, isVehicle, isPlanet, actions, store.characterDetails, store.vehicleDetails, store.planetDetails]);

  const details = isCharacter ? store.characterDetails[uid] || {} :
                  isVehicle ? store.vehicleDetails[uid] || {} :
                  store.planetDetails[uid] || {};

  return (
    <div className="container">
        <div className="d-flex justify-content-center">
          <DetailsComponent

          title={details.name || "Loading..."}

          description={`This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer. ${
            isCharacter ? "" : isVehicle ? `Model: ${details.model || "unknown"}, Manufacturer: ${details.manufacturer || "unknown"}` : `Climate: ${details.climate || "unknown"}, Terrain: ${details.terrain || "unknown"}`
          }`}
          imageUrl={isCharacter 
            ? `https://starwars-visualguide.com/assets/img/characters/${uid}.jpg` 
            : isVehicle
            ? `https://starwars-visualguide.com/assets/img/vehicles/${uid}.jpg`
            : `https://starwars-visualguide.com/assets/img/planets/${uid}.jpg`}
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

