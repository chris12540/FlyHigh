import React from "react";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import MoreVertIcon from "@material-ui/icons/MoreVert";

import "./scss/Media.scss";
import { Typography } from "@material-ui/core";

const Media = props => {
  let media = [];
  if (props.videos && props.videos.length) {
    media = props.videos.map(video => {
      let time = video.created_at.split("T")[1].split(".");
      let date = video.created_at.split("T")[0].split("-");
      return (
        <Card className="video" key={video.id}>
          <CardHeader
            avatar={
              <Avatar aria-label="Recipe">
                <img src={video.image} alt="" />
              </Avatar>
            }
            action={
              <IconButton>
                <MoreVertIcon />
              </IconButton>
            }
            title={video.title}
            subheader={`${date[1]}-${date[2]}-${date[0]}`}
          />
          <div className="video-iframe">
            <iframe
              title={video.id}
              width="560"
              height="315"
              src={`https://www.youtube.com/embed/${video.url}`}
              frameBorder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </Card>
      );
    });
  } else if (props.photos && props.photos.length) {
    media = props.photo.map(photo => {
      return (
        <Card className="photo" key={photo.id}>
          <CardHeader
            avatar={
              <Avatar aria-label="Recipe">
                <img src={photo.image} alt="" />
              </Avatar>
            }
            action={
              <IconButton>
                <MoreVertIcon />
              </IconButton>
            }
            title={photo.title}
            subheader={photo.created_at}
          />
          <img src={photo.url} alt="" />
        </Card>
      );
    });
  } else {
    media = (
      <Card style={{ margin: "15px 0", padding: "10px" }}>
        <Typography variant="h4">No Media 😭</Typography>
      </Card>
    );
  }
  return <div className="media">{media}</div>;
};

export default Media;
