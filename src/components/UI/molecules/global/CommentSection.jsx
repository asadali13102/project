import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { isChatOpen } from "../../../../actions";
import ReplyAvatar from "../../atoms/ticket-drawer/ReplyAvatar";

const CommentSection = (props) => {
  const dispatch = useDispatch();
  const [reply, setReply] = useState(false);

  const openChat = () => {
    dispatch(isChatOpen(true));
  };

  function replaceWithBr(val) {
    return val.replace(/\n/g, "<br />");
  }
  return (
    <div className="mt-15 " style={{ marginTop: props.mt }}>
      <div className="d-flex commentSection">
        <div className="profile">
          <img
            src={`/images/icons/${props.src}`}
            style={{ height: props.height }}
            alt="icon"
          />
        </div>
        <div>
          <div className="d-flex align-center">
            <div className={props.nameClass}>{props.name}</div>
            <div style={{ color: "#ADADAD", marginLeft: "20px" }}>
              {props.hours}
            </div>
          </div>
          <div
            dangerouslySetInnerHTML={{ __html: replaceWithBr(props.comment) }}
            style={{
              marginTop: props.commentPadding,
              width: props.containerWidth,
              textAlign: "inherit",
            }}
            className={props.commentClass}
            onClick={() => {
              setReply(!reply);
            }}
          />

          <div className="d-flex align-center" style={{ marginTop: "8px" }}>
            <ReplyAvatar />
            <div
              className="font-12"
              color="#434343"
              onClick={openChat}
              style={{
                marginLeft: "6px",
                marginRight: "6px",
                cursor: "pointer",
              }}
            >
              3 replies
            </div>
            <div className="font-12" style={{ color: "#747474" }}>
              last reply 21 hours age
            </div>
          </div>
        </div>
      </div>
      <div>{props.children}</div>
    </div>
  );
};

export default CommentSection;
