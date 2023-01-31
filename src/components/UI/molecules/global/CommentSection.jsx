import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { isChatOpen, msgId } from "../../../../actions";
import ReplyAvatar from "../../atoms/ticket-drawer/ReplyAvatar";
import TimeAgo from "javascript-time-ago";
import en from "javascript-time-ago/locale/en";

const CommentSection = (props) => {
  const dispatch = useDispatch();
  const [reply, setReply] = useState(false);

  const openChat = () => {
    dispatch(isChatOpen(true));
    dispatch(msgId(props.msgId));
  };

  let count = 0;
  let time;

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

          {props.comments &&
            props.comments.res.body &&
            props.comments.res.body.data.forEach((msg) => {
              if (msg.messageId === props.msgId) {
                count++;
                let lastmsg = msg;
                let date = new Date(lastmsg.createdAt);
                TimeAgo.addLocale(en);
                const timeAgo = new TimeAgo("en-US");
                time = timeAgo.format(date);
              }
            })}
          {count > 0 && (
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
                {count === 1 ? `${count} reply` : `${count} replies`}
              </div>
              <div className="font-12" style={{ color: "#747474" }}>
                last reply {time}
              </div>
            </div>
          )}

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

          {/* {!count && (reply ? (
            <div
              onClick={openChat}
              className="font-12"
              style={{
                color: "blue",
                marginTop: "5px",
                cursor: "pointer",
              }}
            >
              reply
            </div>
          ) : (
            ""
          ))} */}
        </div>
      </div>
      {/* display side box on hover */}
      {/* <div className="commentBox hide"></div> */}
      <div>{props.children}</div>
    </div>
  );
};

export default CommentSection;
