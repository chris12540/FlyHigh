import React from "react";
import Card from "@material-ui/core/Card";
import { Typography } from "@material-ui/core";

import "./scss/Comments.scss";

const Comments = props => {
  return (
    <div className="comments">
      {props.comments && props.comments.length ? (
        props.comments.map(comment => {
          return (
            <div className="comment">
              <img src={comment.user.image} alt="" />
              <h1>{comment.title}</h1>
              <h6>{comment.date}</h6>
              <p>{comment.text}</p>
            </div>
          );
        })
      ) : (
        <Card style={{ margin: "15px 0", padding: "10px" }}>
          <Typography variant="h4">No Comments 😭</Typography>
        </Card>
      )}
    </div>
  );
};

export default Comments;
