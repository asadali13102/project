import React from 'react';
import { Dropdown} from "antd";
import MeetingCardComponent from "./MeetingCardComponent";

const UpcommingMeetings = () => {
    const items = [
        {
          key: "1",
          label:  <div style={{width: "70px"}}>List</div>,
        },
        {
            type: 'divider',
          },
        {
          key: "2",
          label: <div  style={{width: "70px"}}>Agenda</div>,
        },
      ];
  return (
    <div className="flex-grow1 m10 home-card overflow-y" >
        <div className="w100 d-flex justify-content-between" style={{borderBottom: "1px solid #D6D6D6", padding: "10px 15px"}}>
        <div className="font-18">
            Upcomming Meetings
            </div>
        <Dropdown
            menu={{
              items,
            }}
            placement="bottomRight" trigger={['click']}
          >
            <div>
              <img
                src={"/images/icons/threeDots.svg"}
                style={{
                  cursor: "pointer",
                  height: "20px",
                  width: "20px",
                }}
                alt="icon"
              />
            </div>
          </Dropdown>
        </div>
        <div className="w100 d-flex mt-10 px-15">
        <button className="butn-primary font-12">Today &nbsp;<img
                src={"/images/icons/polygon.svg"}
                style={{
                  cursor: "pointer",height: "7px",
                  verticalAlign: "baseline"
                }}
                alt="icon"
              /></button>&nbsp;&nbsp;
              <span className="text-disabled-gray font-12">Fri, Sept 23, 2022</span>
        </div>
        <div className="d-flex flex-column mt-10 px-15">
        <MeetingCardComponent name={"Daily Stand-up"} time={"9:00 AM - 9:30 AM"} color={"#24CF73"}/>
        <MeetingCardComponent name={"Team Huddle Meeting"}  time={"9:30 AM - 10:00 AM"}  color={"#F4BF00"}/>
        <MeetingCardComponent name={"UI Revamp Scrum Call"}  time={"10:00 AM - 11:00 AM"}  color={"#0077EE"}/>
        <MeetingCardComponent name={"Lunch Beak"}  time={"1:00 PM - 2:00 PM"}  color={"#F4BF00"}/>
        <MeetingCardComponent name={"John & Charles 1:1"}  time={"3:00 PM - 3:30 PM"}  color={"#0077EE"} image={true}/>
        </div>
        
    </div>
  )
}

export default UpcommingMeetings