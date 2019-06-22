import React from "react";
import "../styles/Navbar.css";

// By importing the Navbar.css file, it is added to the DOM whenever this component loads

function Navbar() {
  return (
    <nav className="navbar">
      <ul>
        <li>Clicky Game</li>
        <li>Message</li>
        <li>Score</li>
      </ul>
    </nav>
  );
}

export default Navbar;
