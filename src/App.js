import React, { useState, useEffect } from "react";
import { loadScript } from "./utils";
import { getLocation } from "./utils";
import "./App.css";

import axios from "axios";

export default function App(props) {
  const [spots, setSpots] = useState([]);

  useEffect(() => {
    getSpots();
  }, []);

  useEffect(() => {
    renderMap();
  }, [spots]);

  const renderMap = () => {
    loadScript("https://maps.googleapis.com/maps/api/js?key=" + process.env.REACT_APP_API + "&callback=initMap");
    window.initMap = initMap;
  };

  const getSpots = () => {
    axios
      .get("/api/spots")
      .then(response => {
        setSpots(response.data);
      })
      .catch(error => {
        console.log("Problem getting spots: " + error);
      });
  };

  const initMap = () => {
    // Create A Map
    var map = new window.google.maps.Map(document.getElementById("map"), {
      center: { lat: 33.5, lng: -112 },
      zoom: 10
    });

    // Create An InfoWindow
    var infoWindow = new window.google.maps.InfoWindow();

    getLocation(map, infoWindow);

    console.log(spots);

    // Display Dynamic Markers
    spots.forEach(spot => {
      var contentString = `${spot.name}`;

      // Create A Marker
      var marker = new window.google.maps.Marker({
        position: { lat: spot.lat, lng: spot.lng },
        map: map,
        title: spot.name
      });

      // Click on A Marker!
      marker.addListener("click", function() {
        // Change the content
        infoWindow.setContent(contentString);

        // Open An InfoWindow
        infoWindow.open(map, marker);
      });
    });
  };

  return (
    <main>
      <div id="map" />
    </main>
  );
}
