import React, { useState } from "react";
import Icon from "../../atoms/global/Icon";
import { Link, useParams } from "react-router-dom";
import GroupAvatar from "../../atoms/side-navbar/GroupAvatar";
import { useDispatch, useSelector } from "react-redux";
import ProfileAndName from "../../atoms/ticket-drawer/ProfileAndName";
import { Dropdown } from "antd";
// import { logout } from "../../../../actions/logoutAction";
import CalenderNotification from "./CalenderNotification";

const TopNavbar = (props) => {
  const param = useParams();
  const toggle = useSelector((state) => state.navReducer.toggle);
  // const dispatch = useDispatch();
  const roomData = useSelector((state) => state.roomReducer);
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);
  // const handleLogout = () => {
  //   localStorage.removeItem("token");
  //   dispatch(logout());
  //   window.location.href = "/signin";
  // };

  const items = [
    {
      key: "1",
      label: (
        <div
        // onClick={handleLogout}
        >
          Log out!
        </div>
      ),
    },
  ];

  return (
    <div
      className="justify-content-between d-flex nav-area align-center"
      style={{ width: toggle ? "calc(100vw - 290px)" : "calc(100vw - 66px)" }}
    >
      {/*.............Chat top navbar............... */}

      {props.phase === "chat" && (
        <div className="d-flex align-center">
          <div>
            <ProfileAndName
              height="40px"
              name="James"
              class="font-20"
              src="profile.png"
            />
          </div>
          {roomData.rooms.map((room) => {
            if (room._id === param.userid) {
              return (
                <div key={room._id}>
                  <ProfileAndName
                    height="40px"
                    name={room.roomTitle}
                    class="font-20"
                    src="profile.png"
                  />
                </div>
              );
            } else {
              return "";
            }
          })}
          <div className="d-flex align-center">
            <Icon name="black-arrow-down.svg" height="6px" pl="6px" pr="14px" />
            <Icon name="ticket-pin2.svg" height="18px" />
          </div>
        </div>
      )}

      {/*............. Project top navbar............... */}
      {props.phase === "project" && (
        <div className="d-flex">
          <div>
            <Icon name="uiux2.png" height="50px" />
          </div>
          <div style={{ paddingLeft: "8px" }}>
            <div className="d-flex">
              <div>
                <p
                  className="font-20"
                  style={{
                    marginBottom: "0",
                  }}
                >
                  Design
                  {/* {props.name} */}
                </p>
              </div>
              <div style={{ padding: "4px 6px" }}>
                <Icon name="showMore.png" />
              </div>
              <div style={{ padding: "4px 5px" }}>
                <Icon name="paperPin.png" height="18px" />
              </div>
            </div>
            <div className="d-flex ">
              <Link to="" className="navlink2">
                Dashboard
              </Link>
              <Link to="/chat/22" className="navlink2">
                Chat
              </Link>
              <Link to="" className="navlink2">
                List
              </Link>
              <Link to="/project/123" className="navlink2">
                Board
              </Link>
              <Link to="/calender" className="navlink2">
                Calender
              </Link>
              <Link to="" className="navlink2">
                Timeline
              </Link>
            </div>
          </div>
        </div>
      )}

      {/*.............Home top navbar............... */}

      {props.phase === "home" && (
        <div className="text-disabled-gray">
          {/* Home */}
          <img src="/images/icons/calender.png" alt="img" height="18px" />
          &nbsp;&nbsp;
          <span>Friday September</span>
          <br />
          <img src="/images/icons/clock.svg" alt="img" />
          &nbsp;&nbsp;<span>04:46 PM (Toronto)</span>&nbsp;&nbsp;<span>|</span>
          &nbsp;&nbsp;<span>03:46 PM (CST)</span>&nbsp;&nbsp;<span>|</span>
          &nbsp;&nbsp;<span>01:46 PM (PT)</span>
        </div>
      )}

      <div className="d-flex" style={{ alignItems: "center" }}>
        {props.phase !== "home" && (
          <>
            <div style={{ paddingTop: "7px" }}>
              <GroupAvatar />
            </div>
            <div style={{ paddingLeft: "10px" }}>
              <Icon name="contact.png" height="24px" />
            </div>
          </>
        )}

        <div className="vertical-line" />
        <div>
          <input className="search" type="text" placeholder="Search" />
        </div>
        <div className="vertical-line" />
        <div className="navlink-padding">
          <Icon name="friendRequest.png" height="30px" />
        </div>
        <div
          className="navlink-padding"
          onClick={() => {
            setIsCalendarOpen(!isCalendarOpen);
          }}
        >
          <Icon name="calender.png" height="30px" />
        </div>
        <div className="navlink-padding">
          <Icon name="notification.png" height="30px" />
        </div>
        <div className="">
          {/* <Icon name="profile2.png" height="30px" /> */}
          <Dropdown
            menu={{
              items,
            }}
            placement="bottomRight"
            arrow
          >
            <div>
              <img
                src={"/images/icons/profile2.png"}
                style={{
                  cursor: "pointer",
                  height: "30px",
                  width: "30px",
                }}
                alt="icon"
              />
            </div>
          </Dropdown>
        </div>
      </div>
      {isCalendarOpen ? (
        <div className="float-calendar">
          <CalenderNotification />
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default TopNavbar;
