import React, { useRef, useState } from "react";

function Replies({ replies, addReply, id }) {
  const [isOpen, setIsOpen] = useState(false);
  const [replySection, setReplySection] = useState(false);
  const inputText = useRef("");

  const toggle = () => {
    setIsOpen(!isOpen);
    if (!replies.length) {
      setReplySection(true);
      setIsOpen(true);
    }
  };

  const renderReplies = ({ id, comment }) => {
    return (
      <div key={id} className="repliesContainer">
        <div className="replies" key={id}>
          {comment}
        </div>
        <div onClick={() => setReplySection(true)} className="newReply">
          reply
        </div>
      </div>
    );
  };

  const getRepliesCount = () => {
    if (replies.length) return `${replies.length} replies`;
    return "Reply";
  };

  const renderReplyCount = () => (
    <div onClick={toggle} className="replies hideComment">
      {getRepliesCount()}
    </div>
  );

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      const value = inputText.current.value;
      addReply(value, id);
      inputText.current.value = "";
    }
  };

  return (
    <>
      {!isOpen ? renderReplyCount() : null}
      {isOpen ? replies.map(renderReplies) : null}
      {replySection ? (
        <input
          onKeyDown={handleKeyDown}
          ref={inputText}
          className="input replyInput"
          type="text"
          placeholder="reply on comment"
        />
      ) : null}
      {isOpen ? renderReplyCount() : null}
    </>
  );
}

export default Replies;
