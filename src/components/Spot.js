import React, { useState } from "react";
import { NavLink, Link, Route, Redirect } from "react-router-dom";
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
    setVideos(response.data);
    setPhotos(response.data.photos);
    setComments(response.data.comments);
    setShow(true);
    setId(id);
  };

  const close = () => {
    setShow(false);
    setId(0);
  };

  return (
    <div
      style={{ height: window.innerHeight }}
      className={show ? "spot-container move-left" : "spot-container move-right"}>
      <div className="spot">
        <nav>
          <NavLink className="tab" activeClassName="active" to="/videos">
            <i className="fas fa-video" />
          </NavLink>
          <NavLink className="tab" activeClassName="active" to="/photos">
            <i className="far fa-images" />
          </NavLink>
          <NavLink className="tab" activeClassName="active" to="/comments">
            <i className="fas fa-comments" />
          </NavLink>
          <Link className="tab" to="/" onClick={close}>
            <i className="fas fa-window-close" />
          </Link>
        </nav>
        <Route path="/videos" render={() => (!!id ? <Media videos={videos} /> : <Redirect push to="/" />)} />
        <Route path="/photos" render={() => (!!id ? <Media photos={photos} /> : <Redirect push to="/" />)} />
        <Route path="/comments" render={() => (!!id ? <Comments comments={comments} /> : <Redirect push to="/" />)} />
        <Route exact path="/" render={() => !!id && <Redirect push to="/videos" />} />
      </div>
    </div>
  );
};

export default Spot;
