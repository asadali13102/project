import React from "react";

const SubChatArea = (props) => {
  return (
    <>
      <div className="main">
        <div className="header">
          <div className="item">
            <img className="imag" src="/images/icons/profile.png" alt="img" />
            <p className="header-text">{props.name}</p>
           
            <img
              style={{ padding: "10px", marginBottom: "7px" }}
              src="/images/icons/bluearrowdown.svg"
              alt="img"
              className="cursor-pointer"
            />
          </div>
          <div className="right">
            <img
              style={{ padding: "8px" }}
              src="/images/icons/phone.svg"
              alt="img"
              className="cursor-pointer"
            />
            <img
              style={{ padding: "10px" }}
              src="/images/icons/camera.svg"
              alt="img"
              className="cursor-pointer"
            />
            <img
              style={{ padding: "8px" }}
              src="/images/icons/subtract.svg"
              alt="img"
              className="cursor-pointer"
            />
            <img
              style={{ padding: "8px" }}
              src="/images/icons/cross.svg"
              alt="img"
              className="cursor-pointer"
              onClick={()=>{props.setChatOpen(false)}}
            />
          </div>
        </div>

        {/* //////////////////////// */}
        <div className="section">
          <img className="imag1" style={{ marginLeft: "10px" }} src="/images/icons/profile.png" alt="img" />
          <p className="header-text">{props.name}</p>
        </div>
          <p className="time">14:51</p>
        <div className="chat">
          <p className="text">
            hey! <br /> How are you?
            <br />
            Can you help me with Something?
          </p>
        </div>

        <div className="reply">
          <p style={{ color: "white" }}>
            How are you?
            <br />
            Can you help me with something?
          </p>
          <div className="replies cursor-pointer">
            
            <img  style={{padding:"2px",marginTop:"-8px"}} src="/images/icons/ForwardArrow.svg" alt="" />
            <p>Replies</p>
          
          </div>
        </div>

        <div className="section">
          <img style={{ marginLeft: "10px" }} className="imag1" src="/images/icons/profile2.png" alt="img" />
          <p className="header-text">{props.name2}</p>
        </div>
        <p className="time">14:52</p>
        <p className="text chat">
          hey!
          <br />
          Yes of course.
          <br /> Please send the report on the work, I will take a look and
          definitely send you an answer.
        </p>
{/* ////////////////////////////////// */}

<div className="bottom">
          <div>
            <input className="input" placeholder="Aa" type="text" />
          </div>
            <img className="inpt-img cursor-pointer"
              src="/images/icons/ThumbUp.svg"
              alt="img"
            />
          
          <div>
          
            <img
              style={{ padding: "4px" }}
              src="/images/icons/plus.svg"
              alt="img"
              className="cursor-pointer"
            />
            <img
              style={{ padding: "4px" }}
              src="/images/icons/mountain.svg"
              alt="img"
              className="cursor-pointer"
            />
            <img
              style={{ padding: "4px" }}
              src="/images/icons/smiley1.svg"
              alt="img"
              className="cursor-pointer"
            />
            <img
              style={{ padding: "4px" }}
              src="/images/icons/gif.svg"
              alt="img"
              className="cursor-pointer"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default SubChatArea;