import React from "react";
import Icon from "../../atoms/global/Icon";
import MeetingCardComponent from "../home/MeetingCardComponent";

const CalenderNotification = () => {
  return (
    <div className="flex-grow1">
      <div style={{ borderBottom: "1px solid #D6D6D6", height: "85px" }}>
        <div className="font-24 ml-15 mt-20 mb-10">Calender</div>
        <div className="d-flex">
          <button className="cal-button ml-15 mb-10">
            <span className="font-14-500">Today</span>
            <Icon name="polygon2.svg" height="8px" />
          </button>
          <span className="ml-10 font-14 mt-4 review-property">
            Fri, Sept 23, 2022
          </span>
        </div>
      </div>

      <div className="d-flex flex-column mt-10 px-15">
        <div className="font-16 mt-4 review-property">Mon, 10 Oct</div>
        <MeetingCardComponent
          name={"Daily Stand-up"}
          time={"9:00 AM - 9:30 AM"}
          color={"#24CF73"}
        />
        <div className="font-16 mt-4 review-property">Mon, 10 Oct</div>
        <MeetingCardComponent
          name={"Team Huddle Meeting"}
          time={"9:30 AM - 10:00 AM"}
          color={"#F4BF00"}
        />
        <div className="font-16 mt-4 review-property">Sun, 9 Oct</div>
        <MeetingCardComponent
          name={"UI Revamp Scrum Call"}
          time={"10:00 AM - 11:00 AM"}
          color={"#0077EE"}
        />
        <div className="font-16 mt-4 review-property">Sat, 8 Oct</div>
        <MeetingCardComponent
          name={"Lunch Beak"}
          time={"1:00 PM - 2:00 PM"}
          color={"#F4BF00"}
        />
        <div className="font-16 mt-4 review-property">Sat, 8 Oct</div>
        <MeetingCardComponent
          name={"John & Charles 1:1"}
          time={"3:00 PM - 3:30 PM"}
          color={"#0077EE"}
          image={true}
        />
      </div>
      <div
        className="mt-10"
        style={{ borderTop: "1px solid #D6D6D6", height: "60px" }}
      >
        <div className="d-flex ml-18 mt-20">
          <img src="/images/icons/bluePlus.svg" alt="img" />
          <div className="font-18 ml-15" style={{ color: "#0077EE" }}>
            Create an event
          </div>
        </div>
      </div>
    </div>
  );
};

export default CalenderNotification;
