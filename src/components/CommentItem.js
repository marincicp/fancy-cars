import "../scss/CommentItem.scss";
import React from "react";
import { observer } from "mobx-react";

const CommentItem = ({ comment }) => {
  return (
    <div className="comment-item">
      <p className="content">
        <span className="autor">
          {comment.author[0].toUpperCase() + comment.author.slice(1)}
        </span>
        <span>commented</span>
        <span className="comment-content">"{comment.content}"</span>
      </p>
    </div>
  );
};

export default observer(CommentItem);
