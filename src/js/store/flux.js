
const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));

const fetchWithRetry = async (url, options = {}, retries = 3, backoff = 3000) => {
  try {
    const response = await fetch(url, options);
    if (!response.ok) {
      if (response.status === 429 && retries > 0) {
        console.warn(`Too many requests, retrying after ${backoff}ms...`);
        await sleep(backoff);
        return fetchWithRetry(url, options, retries - 1, backoff * 2);
      }
      throw new Error(`Request failed with status ${response.status}`);
    }
    return response;
  } catch (error) {
    throw error;
  }
};




const getState = ({ getStore, getActions, setStore }) => {
    return {
        store: {
            characters: [], // Array para almacenar los personajes
            characterDetails: {}, // Objeto para almacenar los detalles de cada personaje
			planets: [],
  			planetDetails: {},
			vehicles: [],
            vehicleDetails: {},
            favorites: []

        },
        actions: {
			 // Obtener  cada personaje
            fetchCharacters: async () => {
                try {
                    const response = await fetchWithRetry("https://www.swapi.tech/api/people?page=1&limit=10");
                    const data = await response.json();
                    if (response.ok) {
                        setStore({ characters: data.results });
                        console.log("Personajes obtenidos:", data.results);

                        for (const character of data.results) {
                            await getActions().fetchCharacterDetails(character.uid);
                            await sleep(1000); // Espera 1 segundo entre solicitudes
                          }
                        }
                      }  catch (error) {
                    console.error("Error fetching characters:", error);
                }
            },

             // Obtener detalles de un personaje
            fetchCharacterDetails: async (uid) => {
                try {
                    const response = await fetchWithRetry(`https://www.swapi.tech/api/people/${uid}`);
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
				  const response = await fetchWithRetry("https://www.swapi.tech/api/planets");
				  const data = await response.json();
				  if (response.ok) {
					const store = getStore();
					setStore({ planets: data.results });
					
                    for (const planet of data.results) {
                        await getActions().fetchPlanetDetails(planet.uid);
                        await sleep(1000); 
                      }
                    }
                  } catch (error) {
				     console.error("Error fetching planets:", error);
				}
			  },
			  
               // Obtener detalles de un planeta
			  fetchPlanetDetails: async (uid) => {
				try {
				  const response = await fetchWithRetry(`https://www.swapi.tech/api/planets/${uid}`);
				  const data = await response.json();
				  if (response.ok) {
					const store = getStore();
					setStore({ planetDetails: { ...store.planetDetails, [uid]: data.result.properties } });
				  }
				} catch (error) {
				  console.error("Error fetching planet details:", error);
				}
			  },
			 
             
              //add favoritos 
              addFavorite: (favorite) => {
                const store = getStore();
                setStore({ favorites: [...store.favorites, favorite] });
            },

             // Eliminar favorito
            removeFavorite: (uid) => {
                const store = getStore();
                setStore({ favorites: store.favorites.filter(fav => fav.uid !== uid) });
            },
       
			
              //Obtener cada Vehiculos
			fetchVehicles: async () => {
                try {
                    const response = await fetchWithRetry("https://www.swapi.tech/api/vehicles?page=1&limit=10");
                    const data = await response.json();
                    if (response.ok) {
                        setStore({ vehicles: data.results });
                        console.log("Vehículos obtenidos:", data.results);

                        for (const vehicle of data.results) {
                            await getActions().fetchVehicleDetails(vehicle.uid);
                            await sleep(1000); 
                          }
                        }
                      } catch (error) {
                            console.error("Error fetching vehicles:", error);
                }
            },

            
            // Obtener detalles de un vehículo
            fetchVehicleDetails: async (uid) => {
                try {
                    const response = await fetchWithRetry(`https://www.swapi.tech/api/vehicles/${uid}`);
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
