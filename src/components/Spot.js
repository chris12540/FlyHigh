import React, { useState } from "react";
import { NavLink, Route } from "react-router-dom";
import axios from "axios";
import Media from "./Media";
import Comments from "./Comments";
import "./scss/Spot.scss";

const Spot = props => {
  const [id, setId] = useState(0);
  const [show, setShow] = useState(false);
  const [videos, setVideos] = useState([]);
  const [photos, setPhotos] = useState([]);
  const [comments, setComments] = useState([]);

  window.openSpot = async id => {
    const response = await axios.get(`/api/spot/${id}`);
    console.log(response);
    setVideos(response.data);
    setPhotos(response.data.photos);
    setComments(response.data.comments);
    setShow(true);
    setId(id);
  };

  const close = () => {
    setShow(false);
  };

  return (
    <div className={show ? "spot-container move-left" : "spot-container move-right"}>
      <div className="spot">
        <div className="close" onClick={close}>
          ⓧ
        </div>
        <NavLink className="tab" activeClassName="active" to="/videos">
          Videos
        </NavLink>
        <NavLink className="tab" activeClassName="active" to="/photos">
          Photos
        </NavLink>
        <NavLink className="tab" activeClassName="active" to="/comments">
          Comments
        </NavLink>

        <Route path="/videos" render={() => <Media videos={videos} />} />
        <Route path="/photos" render={() => <Media photos={photos} />} />
        <Route path="/comments" render={() => <Comments comments={comments} />} />
      </div>
    </div>
  );
};

export default Spot;
