import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { isChatOpen } from "../../../actions";
import { Checkbox } from "antd";
import DrawerCommentSection from "../molecules/global/DrawerCommentSection";
import ChatDrawerTextArea from "../molecules/global/ChatDrawerTextArea";
import TimeAgo from "javascript-time-ago";
import en from "javascript-time-ago/locale/en";

const TicketDrawer = () => {
  const dispatch = useDispatch();
  const closeChat = () => {
    dispatch(isChatOpen(false));
  };

  const comments = useSelector((state) => state.messageIdReducer.res);
  const ID = useSelector((state) => state.messageIdReducer);

  const messagesEndRef = useRef(null);
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  });

  return (
    <div className="open-ticket scroll-y">
      <div className="sub-nav-area d-flex justify-content-between"
      style={{position:"fixed"}}
        >
        <div className="d-flex align-center" style={{position:"fixed"}}>
          <div className="font-20">Discussion</div>
          <div
            className="font-16-400"
            style={{ color: "#747474", marginLeft: "10px" }}
          >
            #UI Revamp
          </div>
        </div>
        <div onClick={closeChat} style={{position:"fixed", right:"15px"}}>
          <img src="/images/icons/close.svg" alt="close" />
        </div>
      </div>

      {/* <div className="scroll-y review-height" style={{height: "65vh"}}> */}
      <div className="scroll-y" style={{marginTop:"55px", height: "65vh" }}>
        <div className="chat-section">
          <div>

 {/* ..............Static comments............... */}
            <div style={{ marginBottom: "20px" }}>
              <DrawerCommentSection
                height="40px"
                commentPadding="8px"
                containerWidth="auto"
                name="Daniel"
                nameClass="font-18"
                commentClass="font-16-400"
                src="profile.png"
                hours= "19:23"
                comment="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, aliquam in! Id molestiae expedita quo dicta. Nam rerum accusantium illum repellendus incidunt, est aliquam voluptates fugit dolorem soluta deserunt omnis!"
              ></DrawerCommentSection>
            </div>

            <div style={{ marginBottom: "20px" }}>
              <DrawerCommentSection
                height="40px"
                commentPadding="8px"
                containerWidth="auto"
                name="James"
                nameClass="font-18"
                commentClass="font-16-400"
                src="profile2.png"
                hours= "19:29"
                comment="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, aliquam in! Id molestiae expedita quo dicta. Nam rerum accusantium illum repellendus incidunt, est aliquam voluptates fugit dolorem soluta deserunt omnis!"
              ></DrawerCommentSection>
            </div>
  {/* .................Dynamic comments................. */}

            {comments.body &&
              comments.body.data &&
              comments.body.data.map((msg) => {
                if (msg.messageId === ID.msgId) {
                  var date = new Date(msg.createdAt);
                  TimeAgo.addLocale(en);
                  const timeAgo = new TimeAgo("en-US");
                  const time = timeAgo.format(date);
                  return (
                    <div key={msg._id} style={{ marginBottom: "20px" }}>
                      <DrawerCommentSection
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
                      ></DrawerCommentSection>
                    </div>
                  );
                } else {
                  return "";
                }
              })}
          </div>
          <div ref={messagesEndRef} />
        </div>
      </div>
      {/* <div className="chat-position pl-15"> */}
      <div>
        <ChatDrawerTextArea />
        <div
          style={{
            margin: "9px 0px 15px 15px",
            width: "480px",
          }}
        >
          <div className="d-flex align-center">
            <div style={{ color: "#747474", marginRight: "10px" }}>
              <Checkbox />
            </div>
            <div className="font-14">Also send to #UI Revamp</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TicketDrawer;
