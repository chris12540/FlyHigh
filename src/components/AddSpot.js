import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import "./scss/AddSpot.scss";
import Axios from "axios";

const AddSpot = props => {
  const [show, setShow] = useState(false);
  const [search, setSearch] = useState("");
  const [showBanner, setShowBanner] = useState(false);

  window.addSpot = (name, lat, lng) => {
    Axios.post("/api/spot", { name, lat, lng, description: "Awesome Spot!" }).then(response => {
      if (response.status === 201) {
        setShowBanner(true);
        setTimeout(() => setShowBanner(false), 2000);
      }
    });
  };

  return (
    <div className="add-spot-container">
      <div className={showBanner ? "banner move-down" : "banner"}>Spot Added Successfully</div>
      <div className="add-spot">
        <input
          id="pac-input"
          value={search}
          type="text"
          className={show ? "move-down" : ""}
          placeholder="Enter spot address"
          onChange={e => {
            setSearch(e.target.value);
          }}
          onKeyPress={key => {
            if (key.key === "Enter") {
              setShow(false);
              setSearch("");
            }
          }}
        />
      </div>
      <button
        onClick={() => {
          if (true) {
            setShow(!show);
          } else {
            return <Redirect to="login" />;
          }
        }}
        className="add">
        {show ? "ⓧ" : "ADD"}
      </button>
    </div>
  );
};

export default AddSpot;
