import React, { useState } from "react";
import { Tooltip } from "antd";
import { setTaskProperties } from "../../../../actions";
import { connect, useDispatch } from "react-redux";
import { Calendar } from "antd";

const AddTask = (props) => {
  const [isCalender, setIsCalender] = useState(false);
  const [hover, setHover] = useState("");
  const dispatch = useDispatch();
  
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      setTaskProperties({
        ...props.taskProperties,
        taskTitle: "",
        dueDate: "",
      })
    );
  };

  const handleChange = (e) => {
    return dispatch(
      setTaskProperties({
        ...props.taskProperties,
        [e.target.name]: e.target.value,
      })
    );
  };
  return (
    <div className="task-card">
      <div>
        <form onSubmit={handleSubmit}>
          <div className={"d-flex align-center"} style={{ cursor: "pointer" }}>
            <img
              style={{ height: "16px" }}
              src={"/images/icons/task.svg"}
              alt="icon"
            />
            <div className="font-14" style={{ paddingLeft: "8px" }}>
              <input
                name="taskTitle"
                value={props.taskProperties.taskTitle}
                onChange={handleChange}
                required
                autoFocus
                type="text"
                style={{ width: "300px", border: "none", outline: "none" }}
              />
            </div>
          </div>
          <div
            className="d-flex"
            style={{ marginTop: "15px", position: "relative" }}
          >
            {isCalender ? (
              <div
                className="task-card"
                style={{
                  position: "absolute",
                  width: "300px",
                  top: "35px",
                  right: "15px",
                }}
              >
                <div className="site-calendar-demo-card">
                  <Calendar
                    fullscreen={false}
                    onChange={(e) => {
                      dispatch(
                        setTaskProperties({
                          ...props.taskProperties,
                          dueDate: e.format("YYYY-MM-DD"),
                        })
                      );
                      setIsCalender(false);
                    }}
                  />
                </div>
              </div>
            ) : props.taskProperties.dueDate !== "" ? (
              <div
                style={{ color: "#ED3934", cursor: "pointer" }}
                onClick={() => {
                  dispatch(
                    setTaskProperties({
                      ...props.taskProperties,
                      dueDate: "",
                    })
                  );
                  setIsCalender(true);
                }}
              >
                {props.taskProperties.dueDate}
              </div>
            ) : (
              ""
            )}
            <>
              {props.taskProperties.dueDate === "" && (
                <div
                  style={{
                    marginLeft: "-4px",
                    cursor: "pointer",
                    height: "30px",
                    paddingRight: "20px",
                  }}
                  onClick={() => setIsCalender(!isCalender)}
                  onMouseEnter={() => setHover("calender")}
                  onMouseLeave={() => setHover("")}
                >
                  <Tooltip title="Add due date">
                    <svg
                      width="30"
                      height="30"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M13.6109 5.8335H12.7774V5H12.2219V5.8335H7.77764V5H7.22211V5.8335H6.38907C5.62316 5.8335 5 6.4566 5 7.22249V13.611C5 14.3769 5.62314 15 6.38907 15H13.6109C14.3768 15 15 14.3769 15 13.611V7.22207C14.9995 6.4562 14.3764 5.83358 13.6109 5.83358V5.8335ZM14.444 13.6104C14.444 14.0696 14.0701 14.4434 13.6109 14.4434H6.38907C5.92935 14.4434 5.55553 14.0696 5.55553 13.6104V8.61097H14.444V13.6104ZM14.444 8.05548H5.55553V7.22198C5.55553 6.76229 5.92935 6.38848 6.38907 6.38848H7.22262V6.94398H7.77766V6.38897H12.2219V6.94447H12.7774V6.38897H13.6109C14.0702 6.38897 14.444 6.76229 14.444 7.22196L14.444 8.05548Z"
                        fill={hover === "calender" ? "black" : "#ADADAD"}
                      />
                      <circle
                        cx="10"
                        cy="10"
                        r="9.75"
                        stroke={hover === "calender" ? "black" : "#ADADAD"}
                        strokeWidth="0.5"
                        strokeDasharray="2 2"
                      />
                    </svg>
                  </Tooltip>
                </div>
              )}
            </>
          </div>
        </form>
      </div>
    </div>
  );
};
function mapStateToProps(state) {
  return {
    taskProperties: state.taskReducer.taskProperties,
  };
}
export default connect(mapStateToProps)(AddTask);
