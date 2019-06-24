import React from "react";
// import "./style.css";

function Tile(props) {
  return (
    <div className="card" onClick={() => props.handleClick(props.id)}>
      <div className="img-container col-sm-6 col-md-3 col-lg-2 p-0">
        <img alt={props.name} src={props.image} />
      </div>
    </div>
  );
}

export default Tile;
