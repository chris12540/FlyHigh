import React from "react";

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
        <div className="no-comments">
          <h1>No comments 〄</h1>
        </div>
      )}
    </div>
  );
};

export default Comments;
