import React, { useState } from "react";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";

const DropDownMenu = (props) => {
  const navigate = useNavigate();

  const [chatCollaps, setChatCollaps] = useState(true);
  const [workSpaceCollaps, setWorkSpaceCollaps] = useState({
    isWorkSpace: true,
    phase: "key1",
  });

  const handleChatRoom = () => {};

  const handleWorkspace = () => {};

  const handleSections = (id) => {
    navigate(`/project/${id}`);
  };

  return (
    <div className="DropDownMenu">
      {/* static workspace collasps start .................................................... */}
      <div
        className={
          workSpaceCollaps.isWorkSpace ? "dropDownShow" : "dropDownCollaps"
        }
      >
        {props.toggle ? (
          <div className="d-flex align-center justify-content-between">
            <div
              className="d-flex align-center cursor-pointer"
              onClick={() =>
                setWorkSpaceCollaps({
                  ...workSpaceCollaps,
                  isWorkSpace: !workSpaceCollaps.isWorkSpace,
                })
              }
            >
              <img
                src="/images/icons/workSpace.png"
                style={{ height: "20px", marginRight: "12px" }}
                alt="icon"
              />
              <div className="heading-nav ">WorkSpaces</div>
            </div>
            <div className="d-flex align-center cursor-pointer">
              <img
                src="/images/icons/search.svg"
                style={{ marginRight: "10px" }}
                alt="icon"
              />
              <img
                src="/images/icons/add.png"
                style={{ marginRight: "10px" }}
                alt="icon"
                onClick={handleWorkspace}
              />
              <img
                src="/images/icons/fullArrowDown.svg"
                style={{ marginRight: "10px" }}
                alt="icon"
                onClick={() =>
                  setWorkSpaceCollaps({
                    ...workSpaceCollaps,
                    isWorkSpace: !workSpaceCollaps.isWorkSpace,
                  })
                }
              />
            </div>
          </div>
        ) : (
          <div
            className="align-center cursor-pointer"
            onClick={() =>
              setWorkSpaceCollaps({
                ...workSpaceCollaps,
                isWorkSpace: !workSpaceCollaps.isWorkSpace,
              })
            }
            style={{ lineHeight: "10px", textAlign: "center" }}
          >
            <img
              src="/images/icons/workSpace.png"
              style={{ height: "20px" }}
              alt="icon"
            />
            <img
              src={`/images/icons/${
                workSpaceCollaps.isWorkSpace
                  ? "whiteArrowUp.svg"
                  : "whiteArrowDown.svg"
              }`}
              alt="icon"
            />
          </div>
        )}

        {/* workspace sub start ................................................... */}

        <div
          className={
            workSpaceCollaps.phase === `key${1}`
              ? "dropDownShow mt-14"
              : "subDropDown mt-14"
          }
        >
          {props.toggle ? (
            <div className="d-flex align-center justify-content-between cursor-pointer ">
              <div>
                <img
                  src="/images/icons/uiux.png"
                  style={{ height: "25px", marginRight: "10px" }}
                  alt="icon"
                  // onClick={() => projectHandler(1)}
                />
                <span
                  className="font-16"
                  //onClick={() => projectHandler(workspace._id)}
                >
                  Design
                </span>
              </div>
              <div>
                <img
                  src={`/images/icons/${
                    workSpaceCollaps.phase === `key${1}`
                      ? "whiteArrowUp.svg"
                      : "whiteArrowDown.svg"
                  }`}
                  style={{ marginRight: "10px" }}
                  alt="icon"
                  onClick={() =>
                    setWorkSpaceCollaps({
                      ...workSpaceCollaps,
                      phase:
                        workSpaceCollaps.phase === `key${1}` ? "" : `key${1}`,
                    })
                  }
                />
              </div>
            </div>
          ) : (
            <div
              className="cursor-pointer"
              style={{ lineHeight: "10px", textAlign: "center" }}
            >
              <img
                src="/images/icons/uiux.png"
                style={{ height: "25px" }}
                alt="icon"
                //onClick={() => projectHandler(workspace._id)}
              />
              <img
                src={`/images/icons/${
                  workSpaceCollaps.phase === `key${1}`
                    ? "whiteArrowUp.svg"
                    : "whiteArrowDown.svg"
                }`}
                alt="icon"
                onClick={() =>
                  setWorkSpaceCollaps({
                    ...workSpaceCollaps,
                    phase:
                      workSpaceCollaps.phase === `key${1}` ? "" : `key${1}`,
                  })
                }
              />
            </div>
          )}

          {/* ................Project Start................. */}
          <div style={{ marginLeft: "3px" }}>
            <div
              className="d-flex align-center cursor-pointer mt-14"
              onClick={() => handleSections("63a5804ab053074d8874678e")}
            >
              <img src="/images/icons/US.png" alt="icon" className="mr-10" />
              <div className={props.toggle ? "font-16" : "display-none"}>
                UX/UI Software
              </div>
            </div>
            <div
              className="d-flex align-center cursor-pointer mt-14"
              onClick={() => handleSections("63a5804ab053074d8874678e")}
            >
              <img src="/images/icons/SC.png" alt="icon" className="mr-10" />
              <div className={props.toggle ? "font-16" : "display-none"}>
                Site creation
              </div>
            </div>
            <div
              className="d-flex align-center cursor-pointer mt-14"
              onClick={() => handleSections("63a5804ab053074d8874678e")}
            >
              <img src="/images/icons/SA.png" alt="icon" className="mr-10" />
              <div className={props.toggle ? "font-16" : "display-none"}>
                Sport App
              </div>
            </div>
            <div
              className="d-flex align-center cursor-pointer mt-14"
              onClick={() => handleSections("63a5804ab053074d8874678e")}
            >
              <img src="/images/icons/PN.png" alt="icon" className="mr-10" />
              <div className={props.toggle ? "font-16" : "display-none"}>
                Portal Niles
              </div>
            </div>
            <div
              className="d-flex align-center cursor-pointer mt-14"
              onClick={() => handleSections("63a5804ab053074d8874678e")}
            >
              <img src="/images/icons/DR.png" alt="icon" className="mr-10" />
              <div className={props.toggle ? "font-16" : "display-none"}>
                Warframe
              </div>
            </div>
          </div>
        </div>

        {/* ///////////////////////////////// */}

        <div
          className={
            workSpaceCollaps.phase === `key${2}`
              ? "dropDownShow mt-14"
              : "subDropDown mt-14"
          }
        >
          {props.toggle ? (
            <div className="d-flex align-center justify-content-between cursor-pointer ">
              <div>
                <img
                  src="/images/icons/siteCreation.png"
                  style={{ height: "25px", marginRight: "10px" }}
                  alt="icon"
                  //onClick={() => projectHandler(workspace._id)}
                />
                <span
                  className="font-16"
                  //onClick={() => projectHandler(workspace._id)}
                >
                  Prototype
                </span>
              </div>
              <div>
                <img
                  src={`/images/icons/${
                    workSpaceCollaps.phase === `key${2}`
                      ? "whiteArrowUp.svg"
                      : "whiteArrowDown.svg"
                  }`}
                  style={{ marginRight: "10px" }}
                  alt="icon"
                  onClick={() =>
                    setWorkSpaceCollaps({
                      ...workSpaceCollaps,
                      phase:
                        workSpaceCollaps.phase === `key${2}` ? "" : `key${2}`,
                    })
                  }
                />
              </div>
            </div>
          ) : (
            <div
              className="cursor-pointer"
              style={{ lineHeight: "10px", textAlign: "center" }}
            >
              <img
                src="/images/icons/siteCreation.png"
                style={{ height: "25px" }}
                alt="icon"
                //onClick={() => projectHandler(workspace._id)}
              />
              <img
                src={`/images/icons/${
                  workSpaceCollaps.phase === `key${2}`
                    ? "whiteArrowUp.svg"
                    : "whiteArrowDown.svg"
                }`}
                alt="icon"
                onClick={() =>
                  setWorkSpaceCollaps({
                    ...workSpaceCollaps,
                    phase:
                      workSpaceCollaps.phase === `key${2}` ? "" : `key${2}`,
                  })
                }
              />
            </div>
          )}

          {/* ................Project Start................. */}
          <div style={{ marginLeft: "3px" }}>
            <div
              className="d-flex align-center cursor-pointer mt-14"
              onClick={() => handleSections("63a5804ab053074d8874678e")}
            >
              <img src="/images/icons/US.png" alt="icon" className="mr-10" />
              <div className={props.toggle ? "font-16" : "display-none"}>
                UX/UI Software
              </div>
            </div>
            <div
              className="d-flex align-center cursor-pointer mt-14"
              onClick={() => handleSections("63a5804ab053074d8874678e")}
            >
              <img src="/images/icons/SC.png" alt="icon" className="mr-10" />
              <div className={props.toggle ? "font-16" : "display-none"}>
                Site creation
              </div>
            </div>
            <div
              className="d-flex align-center cursor-pointer mt-14"
              onClick={() => handleSections("63a5804ab053074d8874678e")}
            >
              <img src="/images/icons/SA.png" alt="icon" className="mr-10" />
              <div className={props.toggle ? "font-16" : "display-none"}>
                Sport App
              </div>
            </div>
            <div
              className="d-flex align-center cursor-pointer mt-14"
              onClick={() => handleSections("63a5804ab053074d8874678e")}
            >
              <img src="/images/icons/PN.png" alt="icon" className="mr-10" />
              <div className={props.toggle ? "font-16" : "display-none"}>
                Portal Niles
              </div>
            </div>
            <div
              className="d-flex align-center cursor-pointer mt-14"
              onClick={() => handleSections("63a5804ab053074d8874678e")}
            >
              <img src="/images/icons/DR.png" alt="icon" className="mr-10" />
              <div className={props.toggle ? "font-16" : "display-none"}>
                Warframe
              </div>
            </div>
          </div>
        </div>

        {/* ///////////////////////////////////////////// */}

        <div
          className={
            workSpaceCollaps.phase === `key${3}`
              ? "dropDownShow mt-14"
              : "subDropDown mt-14"
          }
        >
          {props.toggle ? (
            <div className="d-flex align-center justify-content-between cursor-pointer ">
              <div>
                <img
                  src="/images/icons/sports.png"
                  style={{ height: "25px", marginRight: "10px" }}
                  alt="icon"
                  //onClick={() => projectHandler(workspace._id)}
                />
                <span
                  className="font-16"
                  //onClick={() => projectHandler(workspace._id)}
                >
                  Warframe
                </span>
              </div>
              <div>
                <img
                  src={`/images/icons/${
                    workSpaceCollaps.phase === `key${3}`
                      ? "whiteArrowUp.svg"
                      : "whiteArrowDown.svg"
                  }`}
                  style={{ marginRight: "10px" }}
                  alt="icon"
                  onClick={() =>
                    setWorkSpaceCollaps({
                      ...workSpaceCollaps,
                      phase:
                        workSpaceCollaps.phase === `key${3}` ? "" : `key${3}`,
                    })
                  }
                />
              </div>
            </div>
          ) : (
            <div
              className="cursor-pointer"
              style={{ lineHeight: "10px", textAlign: "center" }}
            >
              <img
                src="/images/icons/sports.png"
                style={{ height: "25px" }}
                alt="icon"
                //onClick={() => projectHandler(workspace._id)}
              />
              <img
                src={`/images/icons/${
                  workSpaceCollaps.phase === `key${3}`
                    ? "whiteArrowUp.svg"
                    : "whiteArrowDown.svg"
                }`}
                alt="icon"
                onClick={() =>
                  setWorkSpaceCollaps({
                    ...workSpaceCollaps,
                    phase:
                      workSpaceCollaps.phase === `key${3}` ? "" : `key${3}`,
                  })
                }
              />
            </div>
          )}

          {/* ................Project Start................. */}
          <div style={{ marginLeft: "3px" }}>
            <div
              className="d-flex align-center cursor-pointer mt-14"
              onClick={() => handleSections("63a5804ab053074d8874678e")}
            >
              <img src="/images/icons/US.png" alt="icon" className="mr-10" />
              <div className={props.toggle ? "font-16" : "display-none"}>
                UX/UI Software
              </div>
            </div>
            <div
              className="d-flex align-center cursor-pointer mt-14"
              onClick={() => handleSections("63a5804ab053074d8874678e")}
            >
              <img src="/images/icons/SC.png" alt="icon" className="mr-10" />
              <div className={props.toggle ? "font-16" : "display-none"}>
                Site creation
              </div>
            </div>
            <div
              className="d-flex align-center cursor-pointer mt-14"
              onClick={() => handleSections("63a5804ab053074d8874678e")}
            >
              <img src="/images/icons/SA.png" alt="icon" className="mr-10" />
              <div className={props.toggle ? "font-16" : "display-none"}>
                Sport App
              </div>
            </div>
            <div
              className="d-flex align-center cursor-pointer mt-14"
              onClick={() => handleSections("63a5804ab053074d8874678e")}
            >
              <img src="/images/icons/PN.png" alt="icon" className="mr-10" />
              <div className={props.toggle ? "font-16" : "display-none"}>
                Portal Niles
              </div>
            </div>
            <div
              className="d-flex align-center cursor-pointer mt-14"
              onClick={() => handleSections("63a5804ab053074d8874678e")}
            >
              <img src="/images/icons/DR.png" alt="icon" className="mr-10" />
              <div className={props.toggle ? "font-16" : "display-none"}>
                Warframe
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* chat collaps .................................................................*/}
      <div
        style={{ marginTop: "23px" }}
        className={chatCollaps ? "dropDownShow" : "dropDownCollaps"}
      >
        {props.toggle ? (
          <div className="d-flex align-center justify-content-between">
            <div
              className="d-flex align-center cursor-pointer"
              onClick={() => setChatCollaps(!chatCollaps)}
            >
              <img
                src="/images/icons/chat.png"
                style={{ height: "20px", marginRight: "12px" }}
                alt="icon"
              />
              <div className="heading-nav ">Chat</div>
            </div>
            <div className="d-flex align-center cursor-pointer">
              <img
                src="/images/icons/search.svg"
                style={{ marginRight: "10px" }}
                alt="icon"
              />
              <img
                src="/images/icons/add.png"
                style={{ marginRight: "10px" }}
                alt="icon"
                onClick={handleChatRoom}
              />
              <img
                src="/images/icons/fullArrowDown.svg"
                style={{ marginRight: "10px" }}
                alt="icon"
                onClick={() => setChatCollaps(!chatCollaps)}
              />
            </div>
          </div>
        ) : (
          <div
            className="align-center cursor-pointer"
            onClick={() => setChatCollaps(!chatCollaps)}
            style={{ lineHeight: "10px", textAlign: "center" }}
          >
            <img
              src="/images/icons/chat.png"
              style={{ height: "20px" }}
              alt="icon"
            />
            <img
              src={`/images/icons/${
                chatCollaps ? "whiteArrowUp.svg" : "whiteArrowDown.svg"
              }`}
              alt="icon"
            />
          </div>
        )}

        {/* .........................Chat area.......................... */}

        <div style={{ marginTop: "23px" }}>
          {/* .......................static chat................. */}
          <div
            className="d-flex align-center cursor-pointer mt-13"
            onClick={() => {
              navigate(`/chat/${"63a5804ab053074d8874678e"}`);
            }}
          >
            <img src="/images/icons/profile.png" className="mr-10" alt="icon" />
            <div className={props.toggle ? "font-16" : "display-none"}>
              Jhone Doe
            </div>
          </div>

          <div
            className="d-flex align-center cursor-pointer mt-13"
            onClick={() => {
              navigate(`/chat/${"63a5804ab053074d8874678e"}`);
            }}
          >
            <img
              src="/images/icons/profile2.png"
              className="mr-10"
              alt="icon"
            />
            <div className={props.toggle ? "font-16" : "display-none"}>
              James
            </div>
          </div>

          <div
            className="d-flex align-center cursor-pointer mt-13"
            onClick={() => {
              navigate(`/chat/${"63a5804ab053074d8874678e"}`);
            }}
          >
            <img src="/images/icons/G.png" className="mr-10" alt="icon" />
            <div className={props.toggle ? "font-16" : "display-none"}>
              Grane
            </div>
          </div>

          <div
            className="d-flex align-center cursor-pointer mt-13"
            onClick={() => {
              navigate(`/chat/${"63a5804ab053074d8874678e"}`);
            }}
          >
            <img src="/images/icons/profile.png" className="mr-10" alt="icon" />
            <div className={props.toggle ? "font-16" : "display-none"}>
              Richard
            </div>
          </div>

          <div
            className="d-flex align-center cursor-pointer mt-13"
            onClick={() => {
              navigate(`/chat/${"63a5804ab053074d8874678e"}`);
            }}
          >
            <img src="/images/icons/S.png" className="mr-10" alt="icon" />
            <div className={props.toggle ? "font-16" : "display-none"}>
              Sara
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

function mapStateToProps(state) {
  return {
    toggle: state.navReducer.toggle,
  };
}

export default connect(mapStateToProps)(DropDownMenu);
