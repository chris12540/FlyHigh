import React from "react";

import Map from "./components/Map";
import AddSpot from "./components/AddSpot";
import Spot from "./components/Spot";

import "./App.css";

export default function App(props) {
  return (
    <main>
      <Map />
      <AddSpot />
      <Spot />
    </main>
  );
}
