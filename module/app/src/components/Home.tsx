import React from "react";
import hero from "../assets/image/hero.png";

const Home = () => {
  return (
    <section id="hero">
      <div className="hero-container">
        <br></br>
        <br></br>
        <br></br>
        <div className="text-center">
          <img src={hero} id="partimg" alt="..." />
        </div>
        <br />
        <h1>TRY GAME</h1>
        <h1>GAME RULES</h1>
        <h1>ROADMAP</h1>
      </div>
    </section>
  );
};

export default Home;
