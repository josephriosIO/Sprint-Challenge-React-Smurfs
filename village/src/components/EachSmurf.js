import React from "react";
import { Link } from "react-router-dom";

const EachSmurf = props => {
  const smurf = props.smurfs.find(smurf => {
    return `${smurf.id}` === props.match.params.id;
  });
  console.log(smurf);

  return (
    <div className="Smurf">
      <h3>{smurf.name}</h3>
      <img className="item-list-image" src={smurf.imageUrl} alt={smurf.name} />
      <strong>{smurf.height} tall</strong>
      <p>{smurf.age} smurf years old</p>
      <button
        className="form-btn"
        onClick={e => props.smurfUpdate(e, smurf.id)}
      >
        change smurf
      </button>
      <button
        className="form-btn"
        onClick={e => props.deleteSmurf(e, smurf.id)}
      >
        delete smurf
      </button>
    </div>
  );
};

EachSmurf.defaultProps = {
  name: "",
  height: "",
  age: ""
};

export default EachSmurf;
