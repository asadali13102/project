import React from "react";

const Button = (props) => {
  return (
    <div
      className="btn-1"
      onClick={props.onClick}
      style={{ cursor: "pointer" }}
    >
      <div className="d-flex" style={{alignItems: 'center'}}>

          <img
            style={{ height: props.height }}
            src={"/images/icons/" + props.src}
            alt="icon"
          />
        <div
          className={props.class}
          style={{ paddingLeft: "8px", color: props.color, fontSize: props.fontSize }}
        >
          {props.name}
        </div>
      </div>
    </div>
  );
};

export default Button;
