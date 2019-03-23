import React, { useState, useEffect } from "react";
import axios from "axios";

import { loadScript } from "../utils";
import { getLocation } from "../utils";

const Map = props => {
  const [spots, setSpots] = useState([]);

  useEffect(() => {
    getSpots();
  }, []);

  useEffect(() => {
    if (spots.length !== 0) {
      renderMap();
    }
  }, [spots]);

  const renderMap = () => {
    loadScript(
      "https://maps.googleapis.com/maps/api/js?key=" + process.env.REACT_APP_API + "&library=places&callback=initMap"
    );
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
      zoom: 10,
      zoomControl: false,
      fullscreenControl: false
    });

    // Create An InfoWindow
    var infoWindow = new window.google.maps.InfoWindow();

    getLocation(map, infoWindow);

    console.log(spots);

    // Display Dynamic Markers
    spots.forEach(spot => {
      var contentString = `
      <h3>${spot.name}</h3>
      <p>${spot.description}</p>
      <button onclick="window.openSpot(${spot.id})">Open Spot</button>
      `;

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
  return <div id="map" />;
};

export default Map;
