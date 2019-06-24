import React from "react";
import "../styles/Navbar.css";

// By importing the Navbar.css file, it is added to the DOM whenever this component loads

function Navbar(props) {
  return (
    <nav className="navbar text-center">
      <ul className="nav navbar-nav">
        <li className="nav-item brand">Clicky Game</li>
        <li className="nav-item">{props.message}</li>
        <li className="nav-item">Score: {props.score} | Highscore: {props.highScore}</li>
      </ul>
    </nav>
  );
}

export default Navbar;
