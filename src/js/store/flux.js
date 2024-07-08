const getState = ({ getStore, getActions, setStore }) => {
    return {
        store: {
            characters: [], // Array para almacenar los personajes
            characterDetails: {}, // Objeto para almacenar los detalles de cada personaje
			planets: [],
  			planetDetails: {},
			vehicles: [],
            vehicleDetails: {}

        },
        actions: {
			 // Obtener  cada personaje
            fetchCharacters: async () => {
                try {
                    const response = await fetch("https://www.swapi.tech/api/people?page=1&limit=10");
                    const data = await response.json();
                    if (response.ok) {
                        setStore({ characters: data.results });
                        console.log("Personajes obtenidos:", data.results);

                        data.results.forEach(async (character) => {
                            await getActions().fetchCharacterDetails(character.uid);
                        });
                    }
                } catch (error) {
                    console.error("Error fetching characters:", error);
                }
            },

            fetchCharacterDetails: async (uid) => {
                try {
                    const response = await fetch(`https://www.swapi.tech/api/people/${uid}`);
                    const data = await response.json();
                    if (response.ok) {
						const store = getStore();
                        setStore({ characterDetails: { ...store.characterDetails, [uid]: data.result.properties } });
                        
                        console.log(`Detalles del personaje ${uid}:`, data.result.properties);
                    }
                } catch (error) {
                    console.error(`Error fetching details for character ${uid}:`, error);
                }
            },

			//obtener planeta
			fetchPlanets: async () => {
				try {
				  const response = await fetch("https://www.swapi.tech/api/planets");
				  const data = await response.json();
				  if (response.ok) {
					const store = getStore();
					setStore({ planets: data.results });
					data.results.forEach(async (planet) => {
					  await getActions().fetchPlanetDetails(planet.uid);
					});
				  }
				} catch (error) {
				  console.error("Error fetching planets:", error);
				}
			  },
			  
			  fetchPlanetDetails: async (uid) => {
				try {
				  const response = await fetch(`https://www.swapi.tech/api/planets/${uid}`);
				  const data = await response.json();
				  if (response.ok) {
					const store = getStore();
					setStore({ planetDetails: { ...store.planetDetails, [uid]: data.result.properties } });
				  }
				} catch (error) {
				  console.error("Error fetching planet details:", error);
				}
			  },
			  
			//Obtener cada Vehiculos
			fetchVehicles: async () => {
                try {
                    const response = await fetch("https://www.swapi.tech/api/vehicles?page=1&limit=10");
                    const data = await response.json();
                    if (response.ok) {
                        setStore({ vehicles: data.results });
                        console.log("Vehículos obtenidos:", data.results);

                        data.results.forEach(async (vehicle) => {
                            await getActions().fetchVehicleDetails(vehicle.uid);
                        });
                    }
                } catch (error) {
                    console.error("Error fetching vehicles:", error);
                }
            },


            fetchVehicleDetails: async (uid) => {
                try {
                    const response = await fetch(`https://www.swapi.tech/api/vehicles/${uid}`);
                    const data = await response.json();
                    if (response.ok) {
                        const store = getStore();
                        setStore({ vehicleDetails: { ...store.vehicleDetails, [uid]: data.result.properties } });
                        console.log("Detalles del vehículo obtenidos:", data.result.properties);
                    }
                } catch (error) {
                    console.error("Error fetching vehicle details:", error);
                }
            }
        }
    };
};

export default getState;
