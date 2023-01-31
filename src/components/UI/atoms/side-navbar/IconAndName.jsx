import React from "react";

const IconAndName = (props) => {
  return (
    <div
      className={props.phase === "sideNav" ? "d-flex" : "d-flex align-center"}
      style={{ marginBottom: props.mb, marginRight: props.mr, cursor:"pointer" }}
      onClick={() => {
        if (props.iconFuction !== undefined) {
          props.iconFuction();
        }
        if (props.navigate !== undefined) {
          props.navigate();
        }
      }}
    >
      <div>
        <img
         
          style={{ height: props.height }}
          src={"/images/icons/" + props.src}
          alt="icon"
        />
      </div>
      <div
        className={props.class}
        style={{ paddingLeft: "8px", color: props.color , paddingTop: props.namePT}}
      >
        {props.name}
      </div>
    </div>
  );
};

export default IconAndName;
