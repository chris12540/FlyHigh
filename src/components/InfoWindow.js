import React from "react";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const InfoWindow = props => {
  const { id, name, description } = props.place;
  return (
    <div id="infoWindow">
      <Typography variant="h5">{name}</Typography>
      <Typography variant="p" paragraph>
        {description}
      </Typography>
      <Button variant="contained" color="primary" onClick={() => window.openSpot(id)}>
        Open Spot
      </Button>
    </div>
  );
};

export default InfoWindow;
