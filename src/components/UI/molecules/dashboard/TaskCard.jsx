import React from "react";
import Icon from "../../atoms/global/Icon";
import { connect, useDispatch } from "react-redux";
import { isTicketOpen } from "../../../../actions";

const TaskCard = (props) => {
  const dispatch = useDispatch();
  const openTicket = () => {
    dispatch(isTicketOpen(true));
  };

  const arrMonth = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  let day = new Date(props.date).getDate();
  let diMonth = new Date(props.date).getMonth();
  let month = arrMonth[diMonth].substring(0, 3);
  let date = day + " " + month;
  return (
    <div className="task-card" onClick={openTicket}>
      <div
        className="hor-line"
        style={{ borderBottom: `6px solid ${props.color}` }}
      />
      <div>
        <div className={"d-flex"} style={{ cursor: "pointer" }}>
          <div
            style={{ marginTop: "4px" }}
            onClick={() => {
            }}
          >
            <svg
              width="20"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                x="0.5"
                y="0.5"
                width="15"
                height="15"
                rx="7.5"
                stroke={props.isCompleted ? "#51CF73" : "#434343"}
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M11.8435 5.02075C11.7177 4.87932 11.5466 4.7998 11.3681 4.7998C11.1896 4.7998 11.0185 4.87932 10.8927 5.02075L6.87525 9.50297L5.14768 7.47853C4.88518 7.18558 4.45943 7.18558 4.19693 7.47853C3.93436 7.77139 3.93436 8.2464 4.19693 8.53927L6.43333 10.997C6.69104 11.2674 7.09291 11.2674 7.35063 10.997L11.8167 6.01431C12.0504 5.73886 12.062 5.31156 11.8434 5.0208L11.8435 5.02075Z"
                fill={props.isCompleted ? "#51CF73" : "#434343"}
              />
            </svg>
          </div>
          <div
            className={"font-14"}
            style={{
              paddingLeft: "8px",
              paddingTop: props.namePT,
            }}
          >
            {props.heading}
          </div>
        </div>
      </div>
      {props.image ? (
        <div className="task-image-div">
          <Icon name="demo.png" height="100%" />
        </div>
      ) : (
        ""
      )}
      <div style={{ marginTop: "15px" }}>
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M8.28561 1.14933C8.11783 0.981548 7.90206 0.870189 7.66806 0.830761L2.82714 0.0142844C2.49965 -0.0408997 2.16556 0.0657478 1.9307 0.300618L0.300618 1.93071C0.0657497 2.16558 -0.0409035 2.49967 0.0142865 2.82716L0.830757 7.66811C0.870192 7.90211 0.98155 8.11789 1.14933 8.28566L8.63022 15.7666C8.77965 15.916 8.98229 16 9.19359 16C9.40477 16 9.60739 15.916 9.75682 15.7666L15.7666 9.75677C15.916 9.60735 16 9.40471 16 9.19354C16 8.98223 15.916 8.7796 15.7666 8.63017L8.28561 1.14933ZM3.84405 3.84428C3.62481 4.0634 3.32745 4.18654 3.01742 4.18654C2.70741 4.18654 2.41016 4.0634 2.19092 3.84428C1.97168 3.62504 1.84854 3.32768 1.84854 3.01765C1.84854 2.70763 1.97168 2.41038 2.19092 2.19114C2.41016 1.9719 2.70743 1.84876 3.01742 1.84876C3.32744 1.84876 3.62482 1.9719 3.84405 2.19114C4.06317 2.41039 4.1863 2.70765 4.1863 3.01765C4.1863 3.32767 4.06317 3.62505 3.84405 3.84428Z"
            fill={props.color}
          />
        </svg>
      </div>
      <div
        className="d-flex justify-content-between align-center"
        style={{ marginTop: "15px" }}
      >
        <div className="d-flex align-center">
          <div>
            <img
              src="/images/icons/profile2.png"
              alt="profile"
              className="profile"
            />
          </div>
          <div className="font-14">{date}</div>
        </div>
        <div className="d-flex align-center">
          <div className="font-14">{props.chatNumber}</div>
          <Icon name="chat2.svg" height="14px" pr="10px" pl="2px" />
          <div className="font-14">{props.shareNumber}</div>
          <Icon name="share.svg" height="14px" pl="2px" />
        </div>
      </div>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    isTicketOpen: state.toggleReducer.isTicketOpen,
    singleTask: state.taskReducer.singleTask,
  };
};
export default connect(mapStateToProps)(TaskCard);
