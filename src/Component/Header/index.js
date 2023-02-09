import React from "react";
import "./Header.css";
import heroDevices from "../../Photos/hero-devices.svg";
import mfAvatar from "../../Photos/mf-avatar.svg";
const Header = () => {
  return (
    <header>
      <div className="App-header">
        <div className="containerReaseau">
          <div className="headerTilte">
            <h1>Développeur web Junior - Js / React / React Native / Node</h1>
            <h2>
              Je conçois et code des choses magnifiquement simples, et j'aime ce
              que je fais.
            </h2>
          </div>
          <div className="imgAvatar">
            <img src={mfAvatar} alt="mf-avatar" />
          </div>
          <div className="imgHero">
            <img src={heroDevices} alt="hero devices" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
