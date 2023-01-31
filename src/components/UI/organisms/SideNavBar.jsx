import React, {useState} from "react";
import IconAndName from "../atoms/side-navbar/IconAndName";
import { useDispatch, useSelector } from "react-redux";
import { collapse } from "../../../actions";
import DropDownMenu from "../molecules/side-navbar/DropDownMenu";
import BlurishNavbar from "../molecules/side-navbar/BlurishNavbar";
import { useNavigate } from "react-router-dom";

const SideNavBar = (props) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const toggle = useSelector((state) => state.navReducer.toggle);
  const [nav, setNav] = useState(false);
  
  const blurishNav=()=>{
    setNav(nav=>!nav);
  }

  const navCollaps = () => {
    dispatch(collapse(!toggle));
  };

  return (
    <div
      className={toggle ? "sideNavBar scroll-y" : "sideNavBar-collaps scroll-y"}
    >
      {/* section one ................................. */}
      <div className="nav-section">
        <div className="d-flex">
          <div
            style={{
              paddingTop: "5px",
              paddingRight: "11px",
              marginBottom: "52px",
              cursor: "pointer",
            }}
          >
            <img
              onClick={blurishNav}
              src="/images/icons/toggleButton.png"
              alt="icon"
            />
          </div>
          <div className="nav-heading">{toggle ? "PM & Collab" : ""}</div>
        </div>
        <div
          className={toggle ? "toggle-arrow" : "toggle-arrow-collapse"}
          onClick={navCollaps}
        >
          <img
            src={
              toggle
                ? "/images/icons/whitearrowopen.svg"
                : "/images/icons/whitearrowclose.svg"
            }
            alt="icon"
          />
        </div>
          <IconAndName
            name="Home"
            phase="sideNav"
            src="home.png"
            height="20px"
            mb={toggle ? "18px" : "24px"}
            class={toggle ? "navLinks" : "display-none navLinks"}
            navigate = {()=>{navigate('/')}}
          />
        <IconAndName
        phase="sideNav"
          name="Agenda"
          src="agenda.png"
          height="20px"
          mb={toggle ? "18px" : "24px"}
          class={toggle ? "navLinks" : "display-none navLinks"}
        />
        <IconAndName
        phase="sideNav"
          name="Activity"
          src="activity.png"
          height="20px"
          mb={toggle ? "18px" : "25px"}
          class={toggle ? "navLinks" : "display-none navLinks"}
        />
      </div>
      <div>
        <DropDownMenu/>
      </div>

      {nav && <div style={{position:'fixed' , top:'0', left:'0'}}>
        <BlurishNavbar blurishNav={blurishNav}/>
      </div>}
      
    </div>
  );
};

export default SideNavBar;
