import React from "react";
import { Link } from "react-router-dom";

const Smurf = props => {
  return (
    <div className="Smurf">
      <Link to={`/smurf/${props.id}`}>
        <img className="item-list-image" src={props.image} alt={props.name} />
        <h3>{props.name}</h3>
        <strong>{props.height} tall</strong>
        <p>{props.age} smurf years old</p>
      </Link>
    </div>
  );
};

Smurf.defaultProps = {
  name: "",
  height: "",
  age: ""
};

export default Smurf;
