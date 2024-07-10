import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import CardComponent from "../component/CardComponent";
import "../../styles/home.css";

export const Home = () => {
    
  const { store, actions } = useContext(Context);

      useEffect(() => {
          actions.fetchCharacters();
          actions.fetchVehicles();
          actions.fetchPlanets();
      }, []);


  return (

    <div className="container">

          <h2 className="text-white">People</h2>
            <div className="scroll-container">
                { store.characters.map(character => {
                    const details = store.characterDetails[character.uid] || {};
                    return (
                        <CardComponent
                            key={character.uid}
                            imageSrc={`https://starwars-visualguide.com/assets/img/characters/${character.uid}.jpg`}
                            fallbackSrc= "https://starwars-visualguide.com/assets/img/placeholder.jpg"
                            title={details.name || character.name}
                            gender={`Gender: ${details.gender || "unknown"}`}
                            haircolor={`Hair Color: ${details.hair_color || "unknown"}`}
                            eyecolor={`Eye Color: ${details.eye_color || "unknown"}`}
                            buttonLink={`/demo/character/${character.uid}`}
                            buttonText="Go somewhere"
                            uid={character.uid}
                            type="character"
                        />
                    );
                })}
            </div>

            <h2 className="text-white">Vehicles</h2>
            <div className="scroll-container">
                { store.vehicles.map(vehicle => {
                    const details = store.vehicleDetails[vehicle.uid] || {};
                    return (
                        <CardComponent
                            key={vehicle.uid}
                            imageSrc={`https://starwars-visualguide.com/assets/img/vehicles/${vehicle.uid}.jpg`}
                            fallbackSrc= "https://starwars-visualguide.com/assets/img/placeholder.jpg"
                            title={details.name || vehicle.name}
                            gender={`Length: ${details.length || "unknown"}`}
                            haircolor={`Passengers: ${details.passengers || "unknown"}`}
                            eyecolor={`Cargo capacity : ${details.cargo_capacity || "unknown"}`}
                            buttonLink={`/demo/vehicle/${vehicle.uid}`}
                            uid={vehicle.uid}
                            type="vehicle"
              
                        />
                    );
                })}
            </div>
     

            <h2 className="text-white">Planets</h2>
            <div className="scroll-container">
                {store.planets.map(planet => {
                  const details = store.planetDetails[planet.uid] || {};
                  return (
                    <CardComponent
                      key={planet.uid}
                      imageSrc={`https://starwars-visualguide.com/assets/img/planets/${planet.uid}.jpg`}
                      fallbackSrc= "https://starwars-visualguide.com/assets/img/placeholder.jpg"
                      title={details.name || planet.name}
                      gender={`Diameter: ${details.diameter || "unknown"}`}
                      haircolor={`Climate: ${details.climate || "unknown"}`}
                      eyecolor={`Terrain: ${details.orbital_period || "unknown"}`}
                      buttonLink={`/demo/planet/${planet.uid}`}
                      buttonText="Go somewhere"
                      uid={planet.uid}
                      type="planet"

                    />
                  );
                })}
            </div>
    </div>
  );
};

export default Home;
