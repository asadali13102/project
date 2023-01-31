import React from "react";
import SideNavBar from "../UI/organisms/SideNavBar";
import DashBoard from "../UI/organisms/DashBoard";
import { useSelector } from "react-redux";
import TopNavbar from "../UI/molecules/upper-navbar/TopNavbar";
import SubNavBar from "../UI/molecules/upper-navbar/SubNavBar";
import TicketDrawer from "../UI/organisms/TicketDrawer";

const Project = () => {
  const isTicketOpen = useSelector((state) => state.toggleReducer.isTicketOpen);
  return (
    <>
        <div className="container d-flex">
          <SideNavBar />
          <div style={{ zIndex: 0, background: "rgb(251, 251, 251)" }}>
            <TopNavbar
              phase="project"
              name="Design"
            />
            <div className="d-flex">
              <div>
                <SubNavBar />
                <DashBoard />
              </div>

              {isTicketOpen ? <TicketDrawer /> : ""}
            </div>
          </div>
        </div>
    </>
  );
};

export default Project;
