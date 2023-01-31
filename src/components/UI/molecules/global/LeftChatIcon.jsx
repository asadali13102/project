import React, { useState } from "react";
import SubChatArea from "./SubChatArea";

const LeftChatIcon = () => {
  const [chatOpen, setChatOpen] = useState(false);
  return (
    <>
      <div
        className="float-chat-icon"
        onClick={() => {
          setChatOpen(true);
        }}
      >
        <div>
          <img
            src="/images/icons/chat.png"
            style={{ height: "30px", width: "30px" }}
            alt="icon"
          />
        </div>
        <div className="float-chat-number">3</div>
      </div>
      {chatOpen ? (
        <div className="float-sub-chat">
          <SubChatArea
            setChatOpen={setChatOpen}
            name={"Jhon Doe"}
            name2={"james"}
          />
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default LeftChatIcon;
