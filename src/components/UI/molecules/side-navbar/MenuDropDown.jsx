import { Menu } from "antd";
import React from "react";
// import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const MenuDropDown = () => {
  const navigate = useNavigate();
  // const toggle = useSelector((state) => state.navReducer.toggle);
  
  const navigateHandler = (e) => {
    switch (e.keyPath.pop()) {
      case 'chat':
        return  navigate(`/chat/${e.keyPath[0]}`);
    
      default:
        navigate(`/`)
    }
  };

  return (
    <>
      <Menu
        onClick={navigateHandler}
        defaultOpenKeys={['workSpaces','sub1',"chat"]}
        mode="inline"
      />
    </>
  );
};
export default MenuDropDown;
