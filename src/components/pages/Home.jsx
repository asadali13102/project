import React, { useEffect } from "react";
import SideNavBar from "../UI/organisms/SideNavBar";
// import DashBoard from "../UI/organisms/DashBoard";
import { useSelector } from "react-redux";
import TopNavbar from "../UI/molecules/upper-navbar/TopNavbar";
// import SubNavBar from "../UI/molecules/upper-navbar/SubNavBar";
import TicketDrawer from "../UI/organisms/TicketDrawer";
// import { useNavigate } from "react-router-dom";

import MyTasks from "../UI/molecules/home/MyTasks";
import UpcommingMeetings from "../UI/molecules/home/UpcommingMeetings";

const Home = () => {
  // const navigate = useNavigate();
  const isTicketOpen = useSelector((state) => state.toggleReducer.isTicketOpen);

  // useEffect(() => {
  //   if (!localStorage.getItem("token")) {
  //     navigate("/signin");
  //   }
  // }, [navigate]);

  return (
    <>
      <div className="container d-flex">
        <SideNavBar />
        <div style={{ zIndex: 0, background: "rgb(251, 251, 251)" }}>
          <TopNavbar phase="home" />
          <div className="d-flex flex-row-reverse w100">
            <img
              className="mr-20 mt-15 mb-15"
              style={{ height: "15px" }}
              src="/images/icons/group.svg"
              alt="img"
            />
          </div>
          <div className="d-flex">
            <MyTasks />
            <UpcommingMeetings />
            {isTicketOpen ? <TicketDrawer /> : ""}
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
