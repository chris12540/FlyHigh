import React from "react";

const Spot = props => {
  return (
    <div>
      <h1>{props.selectedPlace.name}</h1>
      <h1>this is more of a good thing</h1>
      <div>
        <img src="http://http.cat/418" height="100" alt="" />
      </div>
    </div>
  );
};

export default Spot;
