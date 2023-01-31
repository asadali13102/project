import React from "react";

const Icon = (props) => {
  return (
    <>
      <img
      onClick={props.onClick}
        src={"/images/icons/" + props.name}
        style={{
          cursor:"pointer",
          height: props.height,
          width: "100%",
          paddingRight: props.pr,
          paddingLeft: props.pl,
        }}
        alt="icon"
      />
    </>
  );
};

export default Icon;
