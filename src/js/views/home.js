import React from "react";
import CardComponent from "../component/CardComponent";
import "../../styles/home.css";

export const Home = () => {
  return (
    <div className="container">
      <h2 className="text-white" >People</h2>
      <div className="scroll-container">
        <CardComponent
          imageSrc="https://starwars-visualguide.com/assets/img/characters/1.jpg"
          title="Luke Skywalker"
          gender="Gender : Male"
          haircolor="Hair Color: blond"
          eyecolor="Eye-Color: blue"
          buttonLink="#"
          buttonText="Go somewhere"
        />

        <CardComponent
          imageSrc="https://starwars-visualguide.com/assets/img/characters/1.jpg"
          title="Luke Skywalker"
          gender="Gender : Male"
          haircolor="Hair Color: blond"
          eyecolor="Eye-Color: blue"
          buttonLink="#"
          buttonText="Go somewhere"
        />
        <CardComponent
          imageSrc="https://starwars-visualguide.com/assets/img/characters/1.jpg"
          title="Luke Skywalker"
          gender="Gender : Male"
          haircolor="Hair Color: blond"
          eyecolor="Eye-Color: blue"
          buttonLink="#"
          buttonText="Go somewhere"
        />
        <CardComponent
          imageSrc="https://starwars-visualguide.com/assets/img/characters/1.jpg"
          title="Luke Skywalker"
          gender="Gender : Male"
          haircolor="Hair Color: blond"
          eyecolor="Eye-Color: blue"
          buttonLink="#"
          buttonText="Go somewhere"
        />
        <CardComponent
          imageSrc="https://starwars-visualguide.com/assets/img/characters/1.jpg"
          title="Luke Skywalker"
          gender="Gender : Male"
          haircolor="Hair Color: blond"
          eyecolor="Eye-Color: blue"
          buttonLink="#"
          buttonText="Go somewhere"
        />
        {/* Añade más tarjetas aquí */}
      </div>

      <h2 className="text-white">Vehicles</h2>
      <div className="scroll-container">
        <CardComponent
          imageSrc="https://starwars-visualguide.com/assets/img/vehicles/4.jpg"
          title="Sand Crawler"
          gender="Gender : Male"
          haircolor="Hair Color: blond"
          eyecolor="Eye-Color: blue"
          buttonLink="#"
          buttonText="Go somewhere"
        />
        <CardComponent
          imageSrc="https://starwars-visualguide.com/assets/img/vehicles/4.jpg"
          title="Sand Crawler"
          gender="Gender : Male"
          haircolor="Hair Color: blond"
          eyecolor="Eye-Color: blue"
          buttonLink="#"
          buttonText="Go somewhere"
        />
        
        {/* Añade más tarjetas aquí */}
        
      </div>

      <h2 className="text-white">Planets</h2>
      <div className="scroll-container">
        <CardComponent
          imageSrc="https://starwars-visualguide.com/assets/img/planets/3.jpg"
          title="Tatooine"
          gender="Gender : Male"
          haircolor="Hair Color: blond"
          eyecolor="Eye-Color: blue"
          buttonLink="#"
          buttonText="Go somewhere"
        />
        {/* Añade más tarjetas aquí */}
      </div>
    </div>
  );
};

export default Home;
