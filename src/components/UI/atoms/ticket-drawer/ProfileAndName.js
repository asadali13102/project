import React from "react";

const ProfileAndName = (props) => {
  return (
    <div className="align-center d-flex">
      <div className="profile">
        <img src={`/images/icons/${props.src}`} style={{height: props.height}} alt="icon" />
      </div>
      <div className={props.class}>{props.name}</div>
    </div>
  );
};

export default ProfileAndName;
