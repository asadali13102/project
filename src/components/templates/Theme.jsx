import React from "react";

const Theme = ({ children}) => {

  return (
    <div className="container d-flex">
      <div>{children[0]}</div>
      <div style={{ zIndex: "0" }}>
        {children[1]}
        {children[2]}
      </div>
    </div>
  );
};

export default Theme;
