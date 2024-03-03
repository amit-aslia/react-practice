import React, { useRef, useState } from "react";

import CommentsSection from "./Components/CommentsSection";
import { v4 as uuidv4 } from "uuid";

import "./styles.css";
import { comments } from "./data";

function NestedComments() {
  const [commentData, setCommentData] = useState(comments);
  const inputText = useRef("");

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      const value = inputText.current.value;
      setCommentData([
        ...commentData,
        { id: uuidv4(), comment: value, replies: [] },
      ]);
      inputText.current.value = "";
    }
  };

  const addReply = (comment, id) => {
    const newComment = {
      id: uuidv4(),
      comment,
    };
    const updatedComment = commentData.map((eachComment) => {
      if (eachComment.id === id) {
        console.log("indese");
        return {
          ...eachComment,
          replies: [...eachComment.replies, newComment],
        };
      }
      return eachComment;
    });
    setCommentData(updatedComment);
  };

  return (
    <div className="container">
      <div className="heading">Comment section</div>
      <input
        onKeyDown={handleKeyDown}
        ref={inputText}
        className="input"
        placeholder="Enter new comment"
      />
      <div>
        <CommentsSection addReply={addReply} comments={commentData} />
      </div>
    </div>
  );
}

export default NestedComments;
