import React from "react";
import Logo from "./images/Logo";
import Photo from "./images/welcome.jpg";
import { Link } from "react-router-dom";

import "./Welcome.css";

const Welcome = () => {
  return (
    <div className="welcome-container">
      <img src={Photo} alt="" className="welcome-photo" />
      <div className="logo-container">
        <Logo />
        <p>Your New Playmate Awaits...</p>
        <Link to="./Signup">
          <button onClick={console.log("hey")}>
            SIGNUP!
            <i className="far fa-play-circle" />
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Welcome;
