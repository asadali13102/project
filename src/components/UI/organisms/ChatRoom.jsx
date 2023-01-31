import React from "react";
import { useSelector } from "react-redux";
import CommentSection from "../molecules/global/CommentSection";
import ChatTextArea from "../molecules/global/ChatTextArea";

const ChatRoom = (props) => {
  const toggle = useSelector((state) => state.navReducer.toggle);
  const isChat = useSelector((state) => state.toggleReducer.isChatOpen);

  return (
    <div className=" container-padding " style={{ background: "#FBFBFB" }}>
      <div
        className={
          toggle
            ? isChat
              ? "chat-room-width scroll-x TicketOpem"
              : "chat-room-width scroll-x sidwbarOpen"
            : isChat
            ? "chat-room-width scroll-x TicketClose"
            : "chat-room-width scroll-x sidwbarClose"
        }
      >
        {/* .............static msgs................... */}
        <div style={{ marginBottom: "20px" }}>
          <CommentSection
            // msgId={msg._id}
            height="40px"
            commentPadding="8px"
            containerWidth="auto"
            name="James"
            nameClass="font-18"
            commentClass="font-16-400"
            src="profile2.png"
            hours="19:00"
            comment="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique sed architecto, ut laudantium enim porro error laboriosam in labore veritatis blanditiis alias aliquid consectetur, sapiente itaque ipsam voluptates, ab dolorem id. Quae, ex harum laudantium voluptatibus ullam ducimus repellat aspernatur, voluptas sit ipsam saepe? Blanditiis?"
          />
        </div>

        <div style={{ marginBottom: "20px" }}>
          <CommentSection
            // msgId={msg._id}
            height="40px"
            commentPadding="8px"
            containerWidth="auto"
            name="Daniel"
            nameClass="font-18"
            commentClass="font-16-400"
            src="profile.png"
            hours="19:03"
            comment="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique sed architecto, ut laudantium enim porro error laboriosam in labore veritatis blanditiis alias aliquid consectetur, sapiente itaque ipsam voluptates, ab dolorem id. Quae, ex harum laudantium voluptatibus ullam ducimus repellat aspernatur, voluptas sit ipsam saepe? Blanditiis?"
          />
        </div>

        <div style={{ marginBottom: "20px" }}>
          <CommentSection
            // msgId={msg._id}
            height="40px"
            commentPadding="8px"
            containerWidth="auto"
            name="James"
            nameClass="font-18"
            commentClass="font-16-400"
            src="profile2.png"
            hours="19:08"
            comment="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique sed architecto, ut laudantium enim porro error laboriosam in labore veritatis blanditiis alias aliquid consectetur, sapiente itaque ipsam voluptates, ab dolorem id. Quae, ex harum laudantium voluptatibus ullam ducimus repellat aspernatur, voluptas sit ipsam saepe? Blanditiis?"
          />
        </div>
        <div />
      </div>
      <div>
        <ChatTextArea />
      </div>
    </div>
  );
};

export default ChatRoom;
