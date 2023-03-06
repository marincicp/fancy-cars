import "../scss/CommentCard.scss";

function CommentCard({ name, content }) {
  return (
    <div className="comments-card">
      <div className="comment-card-content">{name} says:</div>
      <div className="comment-card-content-comment">
        {" "}
        " <span>{content}</span> "
      </div>
    </div>
  );
}

export default CommentCard;
