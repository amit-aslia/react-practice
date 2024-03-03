import React from "react";
import MainComment from "./MainComment";
import Replies from "./Replies";

function CommentsSection({ comments, addReply }) {
  const renderComment = ({ id, comment, nested, replies }) => {
    return (
      <div key={id}>
        <MainComment comment={comment} />
        <Replies id={id} addReply={addReply} replies={replies} />
      </div>
    );
  };
  if (comments.length) {
    return comments.map(renderComment);
  }
  return <div>Be the First one to comment</div>;
}

export default CommentsSection;
