import React from "react";

const Comments = props => {
  return (
    <div className="comments">
      {props.comments.map(comment => {
        return (
          <div className="comment">
            <img src={comment.user.image} />
            <h1>{comment.title}</h1>
            <h6>{comment.date}</h6>
            <p>{comment.text}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Comments;
