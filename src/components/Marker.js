import React from "react";
import { render } from "react-dom";
import InfoWindow from "./InfoWindow";

const Marker = props => {
  const { lat, lng, name } = props.place;

  function createInfoWindow(e, map) {
    const infoWindow = new window.google.maps.InfoWindow({
      content: '<div id="infoWindow" />',
      position: { lat: e.latLng.lat(), lng: e.latLng.lng() }
    });
    infoWindow.addListener("domready", e => {
      render(<InfoWindow place={props.place} />, document.getElementById("infoWindow"));
    });
    infoWindow.open(map);
  }

  const marker = new window.google.maps.Marker({
    position: { lat: lat, lng: lng },
    map: props.map,
    title: name
  });

  marker.addListener("click", e => {
    this.createInfoWindow(e, props.map);
  });

  return marker;
};

export default Marker;
