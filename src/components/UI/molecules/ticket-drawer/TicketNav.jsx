import { Dropdown } from "antd";
import React from "react";
import { connect, useDispatch } from "react-redux";
import { editTask, isTicketOpen } from "../../../../actions";
import Icon from "../../atoms/global/Icon";

const TicketNav = (props) => {
  const dispatch = useDispatch();
  const items = [
    {
      key: "1",
      label: <div>Edit Task</div>,
    },
    {
      key: "2",
      label: (
        <div
          onClick={() => {
            props.setOpen(true);
          }}
        >
          Delete Task
        </div>
      ),
    },
  ];

  const closeTicket = () => {
    dispatch(isTicketOpen(false));
  };
  return (
    <>
      <div className="sub-nav-area d-flex justify-content-between">
        <div className="font-20">{props.task && props.task.titleIdentifier}</div>
        <div onClick={closeTicket}>
          <img src="/images/icons/close.svg" alt="close" />
        </div>
      </div>

      <div
        className="d-flex justify-content-between align-center"
        style={{
          height: "39px",
          padding: "0px 20px",
          borderBottom: " 1px solid #D6D6D6",
        }}
      >
        <div className="d-flex align-center">
          <div
            className="btn-2"
            onClick={() => {
              dispatch(
                editTask(
                  {
                    _id: props.singleTask._id,
                    isCompleted: !props.singleTask.isCompleted,
                  },
                  () => props.editEffect()
                )
              );
            }}
            style={{ cursor: "pointer" }}
          >
            <div className="d-flex align-center">
              <img
                style={{ height: "10px" }}
                src={"/images/icons/tick.svg"}
                alt="icon"
              />
              <div className="font-12" style={{ paddingLeft: "8px" }}>
                {props.singleTask.isCompleted ? "Completed" : "Mark Complete"}
              </div>
            </div>
          </div>

          <div className="number-box">5</div>
        </div>
        <div className="d-flex align-center">
          <Icon name="ticket-pin.svg" height="16px" pr="13px" />
          <Icon name="ticket-pin2.svg" height="16px" pr="13px" />
          <Icon name="like.svg" height="16px" pr="13px" />
          <Icon name="alarm.svg" height="16px" pr="13px" />
          <Icon name="share.svg" height="11px" pr="13px" />
          <Icon name="double-arrow.svg" height="13px" pr="13px" />
          <Dropdown
            menu={{
              items,
            }}
            placement="bottomRight"
            arrow
          >
            <div>
              <img
                src={"/images/icons/threeDots.svg"}
                style={{
                  cursor: "pointer",
                  height: "16px",
                  width: "20px",
                }}
                alt="icon"
              />
            </div>
          </Dropdown>
        </div>
      </div>
    </>
  );
};
function mapStateToProps(state) {
  return {
    singleTask: state.taskReducer.singleTask,
    taskProperties: state.taskReducer.taskProperties,
  };
}

export default connect(mapStateToProps)(TicketNav);
