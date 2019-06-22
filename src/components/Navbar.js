import React from "react";
import "../styles/Navbar.css";

// By importing the Navbar.css file, it is added to the DOM whenever this component loads

function Navbar(props) {
  return (
    <nav className="navbar">
      <ul>
        <li>Clicky Game</li>
        <li>Message: {props.message}</li>
        <li>Score: {props.score}</li>
        <li>Highscore: {props.highScore}</li>
      </ul>
    </nav>
  );
}

export default Navbar;
