import React, { useEffect } from "react";
import SideNavBar from "../UI/organisms/SideNavBar";
import {useSelector } from "react-redux";
import TopNavbar from "../UI/molecules/upper-navbar/TopNavbar";
import ChatSubNav from "../UI/molecules/upper-navbar/ChatSubNav";
import ChatRoom from "../UI/organisms/ChatRoom";
import ChatDrawer from "../UI/organisms/ChatDrawer";
import socket from "../../js/socket";

const Chat = () => {
  
  useEffect(() => {
    socket.emit("fetch-messages")
    console.log("fetch in start");
  }, [])
  
  const isChatOpen = useSelector((state) => state.toggleReducer.isChatOpen);
  return (
    <div className="container d-flex">
    <SideNavBar/>
    <div style={{ zIndex: 0, background: "rgb(251, 251, 251)" }}>
      <TopNavbar phase="chat"/>
      <div className="d-flex">
        <div>
            <ChatSubNav/>
            <ChatRoom/>
        </div>
        {isChatOpen ? <ChatDrawer/> : ""}
      </div>
    </div>
  </div>
  )
}

export default Chat