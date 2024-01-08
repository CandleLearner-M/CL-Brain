import React from "react";
import Tilt from "react-parallax-tilt";
import logo from "./logo2.png";
import "./Logo.css";

function Logo() {
  return (
    <Tilt className="grow tilt ma3 shadow-3 br2 ">
      <img src={logo} className="logo" alt="logo" />
    </Tilt>
  );
}

export default Logo;
