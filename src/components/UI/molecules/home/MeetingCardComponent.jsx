import React from 'react';
import { Avatar } from 'antd';

const MeetingCardComponent = (props) => {

    let backgroundColor = props.color;
  return (
    <div className="d-flex py-10 mb-5 cursor-pointer" style={{backgroundColor: "#FBFBFB", borderRadius: "6px"}}>
        <div  style={{borderLeft: `5px solid ${backgroundColor}`, borderRadius: "10px"}}></div>
    {(props.image? <Avatar src="/images/icons/profile.png" style={{
        marginLeft: "5px",marginTop: "1px"
      }}/> : <Avatar
      style={{
        color: '#ffffff',
        backgroundColor: `${backgroundColor}`,
        marginLeft: "5px",marginTop: "1px"
      }}
    >DS</Avatar>)}
     <div className="ml-15"><div className="font-14 font-weight-500">{props.name}</div><div className="text-disabled-gray font-12" style={{
        lineHeight: "12px"}}>{props.time}</div></div>


    

   
    
    </div>
  )
}

export default MeetingCardComponent
