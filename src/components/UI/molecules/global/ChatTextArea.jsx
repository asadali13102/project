import React, { useState } from "react";
import Icon from "../../atoms/global/Icon";

const ChatTextArea = () => {
  const [comment, setComment] = useState("");

  return (
    <div className="chat-area">
      <textarea
        className="chat-textarea "
        placeholder="Reply..."
        value={comment}
        onChange={(e) => {
          setComment(e.target.value);
        }}
      ></textarea>
      <div className="d-flex justify-content-between">
        <div className="d-flex align-center">
          <Icon name="blueAdd.svg" height="19px" pr="13px" />
          <div className="small-vertical-line" />
          <Icon name="video.svg" height="13px" pr="13px" />
          <Icon name="mice.svg" height="12px" pr="13px" />
          <div className="small-vertical-line" />
          <Icon name="smiley.svg" height="13px" pr="13px" />
          <Icon name="at-the-rate.svg" height="13px" pr="13px" />
          <Icon name="Aa.svg" height="12px" />
        </div>
        <div>
          <Icon name="send.svg" height="13px" />
        </div>
      </div>
    </div>
  );
};

export default ChatTextArea;
