import React from "react";
import Tilt from "react-parallax-tilt";
import logo from "./logo2.png";
import "./Logo.css";

function Logo() {
  return (
    <div className="inline-block">
      <Tilt className="grow tilt ma3 shadow-3 br2 ">
        <img src={logo} className="logo grow" alt="logo" />
      </Tilt>
    </div>
  );
}

export default Logo;
