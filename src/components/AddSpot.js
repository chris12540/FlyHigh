import React, { useState } from "react";
import "./scss/AddSpot.scss";

const AddSpot = props => {
  const [show, setShow] = useState(false);

  return (
    <div className="add-spot-container">
      <button onClick={() => setShow(!show)} className="add">
        {show ? "ⓧ" : "ADD"}
      </button>
      {show && (
        <div className="add-spot">
          <input type="text" placeholder="Enter address or tap spot" />
        </div>
      )}
    </div>
  );
};

export default AddSpot;
