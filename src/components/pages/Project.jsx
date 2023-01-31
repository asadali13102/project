import React, { useEffect } from "react";
import SideNavBar from "../UI/organisms/SideNavBar";
import DashBoard from "../UI/organisms/DashBoard";
import { useDispatch, useSelector } from "react-redux";
import TopNavbar from "../UI/molecules/upper-navbar/TopNavbar";
import SubNavBar from "../UI/molecules/upper-navbar/SubNavBar";
import TicketDrawer from "../UI/organisms/TicketDrawer";
// import { useNavigate, useParams } from "react-router-dom";
// import { getProjectById } from "../../actions";
// import CalendarComponent from "../UI/organisms/CalendarComponent";

const Project = () => {
  // const dispatch = useDispatch();
  // const params = useParams();
  // useEffect(() => {
  //   dispatch(getProjectById(params.projectid));
  // }, [params.projectid]);

  // const navigate = useNavigate();
  const isTicketOpen = useSelector((state) => state.toggleReducer.isTicketOpen);

  // useEffect(() => {
  //   if (!localStorage.getItem("token")) {
  //     navigate("/signin");
  //   }
  // }, [navigate]);

  const projectData = useSelector((state) => state.projectReducer.getProjects);
  return (
    <>
      {" "}
      {/* {localStorage.getItem("token") && ( */}
        <div className="container d-flex">
          <SideNavBar />
          <div style={{ zIndex: 0, background: "rgb(251, 251, 251)" }}>
            <TopNavbar
              phase="project"
              name={projectData ? projectData.title : ""}
            />
            <div className="d-flex">
              <div>
                <SubNavBar />
                <DashBoard />
              </div>

              {isTicketOpen ? <TicketDrawer /> : ""}
            </div>
            {/* <CalendarComponent /> */}
          </div>
        </div>
      {/* )} */}
    </>
  );
};

export default Project;
