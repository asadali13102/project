import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Icon from "../../atoms/global/Icon";
import socket from "../../../../js/socket";

const ChatTextArea = () => {
  const param = useParams();
  const [comment, setComment] = useState("");

  const User = useSelector((state) => state.signupReducer);
  const handleSubmit = () => {
    const msg = {
      sender: { _id: User.response.data.userId },
      messageDescription: comment,
      messageId: param.userid,
    };
    socket.emit("message", msg);
    //console.log("msg send from chat room");
    setComment("");
  };

  const handleKeyUp = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSubmit();
      return;
    }
  };

  return (
    <div className="chat-area">
      <textarea
        className="chat-textarea "
        placeholder="Reply..."
        value={comment}
        onChange={(e) => {
          setComment(e.target.value);
        }}
        onKeyDown={(e) => handleKeyUp(e)}
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
        <div onClick={handleSubmit}>
          <Icon name="send.svg" height="13px" />
        </div>
      </div>
    </div>
  );
};

export default ChatTextArea;
