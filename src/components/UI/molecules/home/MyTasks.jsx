import React from 'react'
import { Dropdown, Tabs } from "antd";

const MyTasks = () => {
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
      const onChange = (key) => {
        console.log(key);
      };
      
      let tabsContentChildren = <><div className="text-disabled-gray"><p>Work on final UI/UX proposal for</p></div><div  className="text-disabled-gray"><p>Replace GRPC with REST protocol</p></div><div  className="text-disabled-gray"><p>UI Revamp Phase 3 Code Review</p></div></>

let tabsContent = [
    {
      label: `Text`,
      key: '1',
      children: tabsContentChildren,
    },
    {
      label: `Text`,
      key: '2',
      children: tabsContentChildren,
    },
    {
      label: `Text`,
      key: '3',
      children: tabsContentChildren,
    },
    
    {
      label: `Text`,
      key: '4',
      children: tabsContentChildren,
    },
    {
      label: `Text`,
      key: '5',
      children: tabsContentChildren,
    },
  ]
  return (
    <div className="flex-grow1 m10 home-card  overflow-y" >
      <div className="w100 d-flex justify-content-between" style={{borderBottom: "1px solid #D6D6D6", padding: "10px 15px"}}>
        <div>
            <span className=" font-18">My Tasks</span>
            <img
                src={"/images/icons/plusBadge.svg"}
                style={{
                  cursor: "pointer",
                  height: "20px",
                  width: "20px",
                  verticalAlign: "sub",
                  marginLeft: "15px"
                }}
                
                alt="icon"
              />
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
        <div className="myTasks-tabs-div">
        <Tabs
    defaultActiveKey="1"
    onChange={onChange}
    items={tabsContent}
  />
        </div>
    </div>
  )
}

export default MyTasks
