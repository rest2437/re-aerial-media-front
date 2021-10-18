import React from "react";
import Logo from "./images/Logo";
import Photo from "./images/welcome.jpg";
import "./Welcome.css";

const Welcome = () => {
  return (
    <div className="welcome-container">
      <img src={Photo} alt="" className="welcome-photo" />
      <div className="logo-container">
        <Logo />
      </div>
    </div>
  );
};

export default Welcome;
