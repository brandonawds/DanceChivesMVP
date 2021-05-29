import React from "react";
// * Component Imports
import NavBar from "../NavBarComponents/NavBar";

const Header = () => {
  return (
    <div className="header">
      <img
        className="logo-img"
        src="dance-chives-logo.png"
        alt="DC letters in blue and green"
      />
      <NavBar />
    </div>
  );
};

export default Header;
