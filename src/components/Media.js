import React from "react";

const Media = props => {
  let media = [];
  if (props.videos.length) {
    media = props.videos.map(video => {
      return (
        <div className="video" key={video.id}>
          <img src={video.image} alt="" />
          <h1>{video.title}</h1>
          <h6>{video.created_at}</h6>
          <div className="video-iframe">
            <iframe
              width="560"
              height="315"
              src={`https://www.youtube.com/embed/${video.url}`}
              frameBorder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      );
    });
  } else if (props.photos.length) {
    media = props.photo.map(photo => {
      return (
        <div className="photo">
          <img src={photo.user.image} alt="" />
          <h1>{photo.title}</h1>
          <h6>{photo.date}</h6>
          <img src={photo.url} alt="" />
        </div>
      );
    });
  }
  return <div className="media">{media}</div>;
};

export default Media;
