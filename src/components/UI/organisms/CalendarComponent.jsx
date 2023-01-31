import React from "react";

import { Calendar, Checkbox } from "antd";
import { useSelector } from "react-redux";
import SideNavBar from "./SideNavBar";
import TopNavbar from "../molecules/upper-navbar/TopNavbar";

//antd calendar
const getListData = (value) => {
  let listData;
  switch (value.date()) {
    case 8:
      listData = [
        {
          color: "#0077EE",
          content:
            "Integration with tools like slack, github, or cloud storages like Google drive etc and management of pipelines and their statuses",
        },
        {
          color: "#936BF3",
          content:
            "Our product should have a lot of customisation. Every team has its own version of Scrum and we should not set any fix rules",
        },
      ];
      break;
    case 10:
      listData = [
        {
          color: "#0077EE",
          content:
            "Integration with tools like slack, github, or cloud storages like Google drive etc and management of pipelines and their statuses",
        },
        {
          color: "#936BF3",
          content:
            "Our product should have a lot of customisation. Every team has its own version of Scrum and we should not set any fix rules",
        },
      ];
      break;
    case 13:
      listData = [
        {
          color: "#0077EE",
          content:
            "Integration with tools like slack, github, or cloud storages like Google drive etc and management of pipelines and their statuses",
        },
        {
          color: "#936BF3",
          content:
            "Our product should have a lot of customisation. Every team has its own version of Scrum and we should not set any fix rules",
        },
      ];
      break;
    default:
  }
  return listData || [];
};
const getMonthData = (value) => {
  if (value.month() === 8) {
    return 1394;
  }
};

const CalendarComponent = () => {
  const isSidebarOpened = useSelector((state) => state.navReducer.toggle);
  let calendarWidth = "";
  if (isSidebarOpened) {
    calendarWidth = "calc(100vw - 328px)";
  } else {
    calendarWidth = "calc(100vw - 105px)";
  }
  const checkboxGroupOptions = [
    {
      label: "All",
      value: "All",
    },
    {
      label: "Tasks",
      value: "Tasks",
    },
    {
      label: "Meetings",
      value: "Meetings",
    },
  ];
  const onChangeCheckbox = (checkedValues) => {};
  //antd Calendar
  const monthCellRender = (value) => {
    const num = getMonthData(value);
    return num ? (
      <div className="notes-month">
        <section>{num}</section>
        <span>Backlog number</span>
      </div>
    ) : null;
  };
  const dateCellRender = (value) => {
    const listData = getListData(value);
    return (
      <>
        {listData.map((item) => (
          <div
            style={{
              backgroundColor: `${item.color}`,
              color: "#ffffff",
              margin: "5px 0",
              borderRadius: "4px",
              paddingLeft: "3px",
              overflow: "hidden",
              textOverflow: "ellipsis",
            }}
            key={item.content}
          >
            {item.content}
          </div>
        ))}
      </>
    );
  };
  const projectData = useSelector((state) => state.projectReducer.getProjects);

  return (
    <div className="container d-flex">
      <SideNavBar />
      <div style={{ zIndex: 0, background: "rgb(251, 251, 251)" }}>
        <TopNavbar
          phase="project"
          name={projectData ? projectData.title : ""}
        />
        <div className="d-flex">
          <div className="d-flex" style={{ height: "calc(100vh - 80px)" }}>
            <div
              className="d-flex flex-column"
              style={{ width: `${calendarWidth}` }}
            >
              <div
                style={{
                  padding: "10px 15px",
                  color: "#434343",
                  borderBottom: "1px solid #d6d6d6",
                }}
                className=" d-flex justify-content-between"
              >
                <div style={{ flexGrow: "2" }}>
                  <span className="cursor-pointer">
                    October{" "}
                    <img
                      style={{ height: "6px" }}
                      src="/images/icons/black-arrow-down.svg"
                      alt="icon"
                    />
                  </span>
                </div>
                <div
                  className="d-flex  justify-content-between"
                  style={{ flexGrow: "2" }}
                >
                  <Checkbox.Group
                    options={checkboxGroupOptions}
                    defaultValue={["All", "Tasks", "Meetings"]}
                    onChange={onChangeCheckbox}
                  />
                  <button className="butn-primary font-12">
                    Month &nbsp;
                    <img
                      src={"/images/icons/polygon.svg"}
                      style={{
                        cursor: "pointer",
                        height: "7px",
                        verticalAlign: "baseline",
                      }}
                      alt="icon"
                    />
                  </button>
                  <span className="cursor-pointer">Today</span>
                  <div className="cursor-pointer">
                    <img
                      src={"/images/icons/paint-brush.svg"}
                      style={{
                        cursor: "pointer",
                        height: "13px",
                        verticalAlign: "baseline",
                      }}
                      alt="icon"
                    />
                    &nbsp;&nbsp;&nbsp;<span>Color: Default</span>
                  </div>
                  <div className="cursor-pointer">Weekends: On</div>
                  <img
                    src={"/images/icons/threeDots.svg"}
                    style={{
                      cursor: "pointer",
                      height: "20px",
                      width: "20px",
                    }}
                    alt="icon"
                  />
                  <button
                    className="butn-default font-12"
                    style={{ paddingTop: "3px", paddingBottom: "2px" }}
                  >
                    <img
                      src={"/images/icons/color-palete.svg"}
                      style={{
                        cursor: "pointer",
                        height: "12px",
                        verticalAlign: "text-top",
                      }}
                      alt="icon"
                    />
                    &nbsp;Customize
                  </button>
                </div>
              </div>
              <div
                style={{
                  height: "calc(100vh - 80px)",
                  width: `${calendarWidth}`,
                  overflowY: "auto",
                  whiteSpace: "nowrap",
                }}
                className="antd-calendar-div scroll-y"
              >
                <Calendar
                  dateCellRender={dateCellRender}
                  monthCellRender={monthCellRender}
                />
              </div>
            </div>
            <div
              style={{ borderLeft: "1px solid #d6d6d6" }}
              className="d-flex flex-column"
            >
              <img
                style={{
                  height: "18px",
                  marginTop: "10px",
                  marginLeft: "5px",
                  marginBottom: "20px",
                }}
                src="/images/icons/blue-lines.svg"
                alt="icon"
              />
              <div className="text-rotated" style={{ paddingRight: "8px" }}>
                <span className="text-lettuce">13</span> Unscheduled
              </div>
              <div
                className="text-rotated"
                style={{ paddingRight: "8px", marginTop: "20px" }}
              >
                <span className="text-orange">12</span> Overdue
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CalendarComponent;
