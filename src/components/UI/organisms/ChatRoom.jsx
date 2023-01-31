import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import CommentSection from "../molecules/global/CommentSection";
import ChatTextArea from "../molecules/global/ChatTextArea";
import { useParams } from "react-router-dom";
import socket from "../../../js/socket";
import TimeAgo from "javascript-time-ago";
import en from "javascript-time-ago/locale/en";
import { messages } from "../../../actions";
import { useState } from "react";

const ChatRoom = (props) => {
  const dispatch = useDispatch();
  const param = useParams();
  const toggle = useSelector((state) => state.navReducer.toggle);
  const isChat = useSelector((state) => state.toggleReducer.isChatOpen);

  useEffect(() => {
    socket.on("message-received", function (msg) {
      if (msg.statusCode === 200) {
        socket.emit("fetch-messages");
      }
      //console.log("Messages Added");
    });
  }, []);

  useEffect(() => {
    socket.emit("fetch-messages");
    //console.log("fetch request chat room");
  }, []);

  const [comments, setComments] = useState({ res: { body: { data: [] } } });
  useEffect(() => {
    socket.on("messages-fetched", function (msg) {
      dispatch(messages(msg));
      setComments({ res: msg });
      //console.log("setcomment chat room");
    });
  }, [dispatch]);

  const messagesEndRef = useRef(null);
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [comments]);

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

        {comments.res.body.data &&
          comments.res.body.data.map((msg) => {
            if (msg.messageId === param.userid) {
              var date = new Date(msg.createdAt);
              TimeAgo.addLocale(en);
              const timeAgo = new TimeAgo("en-US");
              const time = timeAgo.format(date);
              return (
                <div key={msg._id} style={{ marginBottom: "20px" }}>
                  <CommentSection
                    msgId={msg._id}
                    height="40px"
                    commentPadding="8px"
                    containerWidth="auto"
                    name={msg.sender.fullName}
                    nameClass="font-18"
                    commentClass="font-16-400"
                    src="profile2.png"
                    hours={time}
                    comment={msg.messageDescription}
                    comments={comments}
                  />
                </div>
              );
            } else {
              return "";
            }
          })}
        <div ref={messagesEndRef} />
      </div>
      <div >
        <ChatTextArea />
      </div>
    </div>
  );
};

export default ChatRoom;
