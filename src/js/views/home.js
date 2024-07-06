import React from "react";
import CardComponent from "../component/CardComponent";
import "../../styles/home.css";

export const Home = () => {
  return (
    <div className="container">
      <h2>People</h2>
      <div className="scroll-container">
        <CardComponent
          imageSrc="https://starwars-visualguide.com/assets/img/characters/1.jpg"
          title="Luke Skywalker"
          text="sjcnslkdncsdnc,sd"
          buttonLink="#"
          buttonText="Go somewhere"
        />

        <CardComponent
          imageSrc="https://starwars-visualguide.com/assets/img/characters/1.jpg"
          title="Luke Skywalker"
          text="sjcnslkdncsdnc,sd"
          buttonLink="#"
          buttonText="Go somewhere"
        />
        <CardComponent
          imageSrc="https://starwars-visualguide.com/assets/img/characters/1.jpg"
          title="Luke Skywalker"
          text="sjcnslkdncsdnc,sd"
          buttonLink="#"
          buttonText="Go somewhere"
        />
        <CardComponent
          imageSrc="https://starwars-visualguide.com/assets/img/characters/1.jpg"
          title="Luke Skywalker"
          text="sjcnslkdncsdnc,sd"
          buttonLink="#"
          buttonText="Go somewhere"
        />
        <CardComponent
          imageSrc="https://starwars-visualguide.com/assets/img/characters/1.jpg"
          title="Luke Skywalker"
          text="sjcnslkdncsdnc,sd"
          buttonLink="#"
          buttonText="Go somewhere"
        />
        {/* Añade más tarjetas aquí */}
      </div>

      <h2>Vehicles</h2>
      <div className="scroll-container">
        <CardComponent
          imageSrc="https://starwars-visualguide.com/assets/img/vehicles/4.jpg"
          title="Sand Crawler"
          text="sjcnslkdncsdnc,sd"
          buttonLink="#"
          buttonText="Go somewhere"
        />
        {/* Añade más tarjetas aquí */}
      </div>

      <h2>Planets</h2>
      <div className="scroll-container">
        <CardComponent
          imageSrc="https://starwars-visualguide.com/assets/img/planets/3.jpg"
          title="Tatooine"
          text="sjcnslkdncsdnc,sd"
          buttonLink="#"
          buttonText="Go somewhere"
        />
        {/* Añade más tarjetas aquí */}
      </div>
    </div>
  );
};

export default Home;
