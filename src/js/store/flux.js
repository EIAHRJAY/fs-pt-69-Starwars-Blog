const getState = ({ getStore, getActions, setStore }) => {
    return {
        store: {
            characters: [], // Array para almacenar los personajes
            characterDetails: {} // Objeto para almacenar los detalles de cada personaje
        },
        actions: {
            fetchCharacters: async () => {
                const store = getStore();
                try {
                    const response = await fetch(`${store.apiUrl}/people?page=1&limit=10`);
                    const data = await response.json();
                    if (response.ok) {
                        // Actualizar el store con los datos de los personajes
                        setStore({ characters: data.results });
                        console.log("Personajes obtenidos:", data.results);
                    }
                } catch (error) {
                    console.error("Error fetching characters:", error);
                }
            },
            fetchCharacterDetails: async (uid) => {
                const store = getStore();
                try {
                    const response = await fetch(`${store.apiUrl}/people/${uid}`);
                    const data = await response.json();
                    if (response.ok) {
                        // Actualizar el store con los detalles del personaje
                        setStore({
                            characterDetails: {
                                ...store.characterDetails,
                                [uid]: data.result.properties
                            }
                        });
                        console.log(`Detalles del personaje ${uid}:`, data.result.properties);
                    }
                } catch (error) {
                    console.error(`Error fetching details for character ${uid}:`, error);
                }
            }
        }
    };
};

export default getState;





// // Use getActions to call a function within a fuction
// exampleFunction: () => {
// 	getActions().changeColor(0, "green");
// },
// loadSomeData: () => {
// 	/**
// 		fetch().then().then(data => setStore({ "foo": data.bar }))
// 	*/
// },
// changeColor: (index, color) => {
// 	//get the store
// 	const store = getStore();

// 	//we have to loop the entire demo array to look for the respective index
// 	//and change its color
// 	const demo = store.demo.map((elm, i) => {
// 		if (i === index) elm.background = color;
// 		return elm;
// 	});

// 	//reset the global store
// 	setStore({ demo: demo });
// }