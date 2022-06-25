// Kalian bisa menambahkan CSS di src/components/Header.css
import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div className="Header">
      <h1>Call a Friend</h1>
      <h5>your friendly contact app</h5>
      <p className="seperate">
        ********************************************************
      </p>
    </div>
  );
};

export default Header;
