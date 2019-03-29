import React, { useState, useEffect } from "react";

import Map from "./components/Map";
import AddSpot from "./components/AddSpot";
import Spot from "./components/Spot";
import { render } from "react-dom";
import InfoWindow from "./components/InfoWindow";

import "./App.css";
import Axios from "axios";

export default function App(props) {
  const [places, setPlaces] = useState([]);

  const options = {
    center: { lat: 33.5, lng: -112 },
    zoom: 10,
    zoomControl: false,
    fullscreenControl: false
  };

  useEffect(() => {
    Axios.get("/api/spots")
      .then(response => {
        console.log(response.data);
        setPlaces(response.data);
      })
      .catch(error => {
        console.log("Error getting spots\n", error);
      });
  }, []);

  return (
    <main>
      {!!places.length && (
        <Map
          id="myMap"
          options={options}
          onMapLoad={map => {
            const infoWindow = new window.google.maps.InfoWindow();
            const markers = places.map(place => {
              const { lat, lng, name } = place;
              const marker = new window.google.maps.Marker({
                position: { lat: lat, lng: lng },
                map: map,
                title: name
              });

              marker.addListener("click", e => {
                infoWindow.setContent('<div id="infoWindow" />');

                infoWindow.addListener("domready", e => {
                  render(<InfoWindow place={place} />, document.getElementById("infoWindow"));
                });
                infoWindow.open(map, marker);
              });
              return marker;
            });
            console.log(markers);
          }}
        />
      )}
      <AddSpot />
      <Spot />
    </main>
  );
}
