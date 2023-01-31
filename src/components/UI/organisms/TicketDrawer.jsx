import React, { useState } from "react";
import { connect, useDispatch } from "react-redux";
import { setTaskProperties } from "../../../actions";
import Button from "../atoms/global/Button";
import Icon from "../atoms/global/Icon";
import IconAndName from "../atoms/side-navbar/IconAndName";
import Col from "antd/es/grid/col";
import { Calendar, Row, Tooltip } from "antd";
import ReviewWrapper from "../../templates/ReviewWrapper";
import ChatTextArea from "../molecules/global/ChatTextArea";
import { getDate } from "../../../js/functions";
import useSound from "use-sound";
import ModelConfirm from "../molecules/global/ModelConfirm";
import { dayMonth } from "../../../js/functions";
import AddSubTask from "../molecules/ticket-drawer/AddSubTask";
import useComponentVisible from "../../../js/useComponentVisible";
import TicketNav from "../molecules/ticket-drawer/TicketNav";
import editSound from "../../../assets/sounds/editSound.mp3";
import ProfileAndName from "../atoms/ticket-drawer/ProfileAndName";
import Select from "react-select";

const TicketDrawer = (props) => {
  const [open, setOpen] = useState(false);
  const [isCalender, setIsCalender] = useState(false);
  const [editPhase, setEditPhase] = useState("");
  const [editedValue, setEditedValue] = useState();
  const [check, setCheck] = useState(false);
  const [assigneeValue, setAssigneeValue] = useState([]);
  const dispatch = useDispatch();
  const [editEffect] = useSound(editSound);
  const task = {};
  const { ref, isComponentVisible, setIsComponentVisible } =
    useComponentVisible(false);
  const deleteHandler = () => {};

  const editHandler = (obj) => {};

  const titleHandler = (e) => {
    e.preventDefault();
    editHandler({
      _id: task._id,
      taskTitle: editedValue,
    });
  };

  const costHandler = (e) => {
    e.preventDefault();
    editHandler(
      {
        _id: task._id,
        cost: editedValue,
      },
      () => {
        setEditPhase("");
        setEditedValue("");
      }
    );
  };

  const descriptionHandler = (e) => {
    e.preventDefault();
    editHandler({
      _id: task._id,
      taskDescription: editedValue,
    });
  };

  const options = [{value:"a", label:"Jhon Doe"}]
  const handleAssignee = (users) => {
    setAssigneeValue(users);
  };

  const handleSubmit = () => {};
  return (
    <>
      <ModelConfirm
        text="Are you sure you want to delete this task?"
        open={open}
        setOpen={setOpen}
        run={deleteHandler}
      />
      {Object.keys(task).length !== 0 ? (
        <div className="open-ticket">
          <TicketNav
            task={task}
            editEffect={editEffect}
            setOpen={setOpen}
            open={open}
          />
          {/* <div className="scroll-y review-height"> */}
          <div className="scroll-y" style={{ height: "54vh" }}>
            <div
              className="d-flex align-center"
              style={{
                height: "34px",
                padding: "0px 20px",
                borderBottom: " 1px solid #D6D6D6",
                background: "#FBFBFB",
              }}
            >
              <IconAndName
                name="This task is private to you"
                src="lock.svg"
                height="16px"
                namePT="4px"
                class="font-12"
              />
            </div>

            {/* Review Section ....................................................................... */}

            {/* Title ....................................................................... */}
            <div className="review-section">
              {editPhase === "title" ? (
                <form onSubmit={titleHandler} onBlur={titleHandler}>
                  <input
                    autoFocus
                    value={editedValue}
                    onChange={(e) => setEditedValue(e.target.value)}
                    className="font-16"
                    style={{
                      width: "100%",
                      border: "none",
                      outline: "none",
                      fontWeight: "600",
                    }}
                    type="text"
                  />
                </form>
              ) : (
                <div
                  className="font-16"
                  onClick={() => {
                    setEditedValue(task.taskTitle);
                    setEditPhase("title");
                  }}
                  style={{ cursor: "pointer", fontWeight: "600" }}
                >
                  <Tooltip title="click to edit">{task.taskTitle}</Tooltip>
                </div>
              )}
              <div>
                {/* Assignee ....................................................................... */}

                <ReviewWrapper>
                  <div className="font-12 review-left-width">Assignee</div>
                  <Row gutter={[1, 3]}>
                    {check && (
                      <Col span={20}>
                        <Select
                          value={assigneeValue}
                          isMulti
                          options={options}
                          onChange={handleAssignee}
                          onBlur={handleSubmit}
                          onKeyDown={(e) => {
                            if (e.key === "Enter") {
                              handleSubmit();
                            }
                          }}
                        />
                      </Col>
                    )}
                    {task.assignee.length !== 0 ? (
                      task.assignee.map((assign) => {
                        return (
                          <>
                            {!check &&
                              options.map((Id, key) => {
                                if (assign.assigneeId === Id.value) {
                                  return (
                                    <Col
                                      span={8}
                                      key={key}
                                      style={{ cursor: "pointer" }}
                                      onClick={() => {
                                        setCheck(true);
                                      }}
                                    >
                                      <ProfileAndName
                                        height="20px"
                                        name={Id.label}
                                        class="font-12"
                                        src="profile.png"
                                      />
                                    </Col>
                                  );
                                } else {
                                  return "";
                                }
                              })}
                          </>
                        );
                      })
                    ) : (
                      <Col span={20}>
                        {editPhase === "assign" ? (
                          <Select
                            isMulti
                            value={assigneeValue}
                            options={options}
                            onChange={handleAssignee}
                            onBlur={handleSubmit}
                            onKeyDown={(e) => {
                              if (e.key === "Enter") {
                                handleSubmit();
                              }
                            }}
                          />
                        ) : (
                          <div
                            className="font-12 review-property"
                            onClick={() => setEditPhase("assign")}
                          >
                            Add assignee
                          </div>
                        )}
                      </Col>
                    )}
                  </Row>
                </ReviewWrapper>

                {/* Date ....................................................................... */}

                <ReviewWrapper>
                  <div className="font-12 review-left-width">Date</div>

                  {task.dueDate && !isCalender ? (
                    <div
                      className="font-12"
                      style={{ cursor: "pointer" }}
                      onClick={() => setIsCalender(true)}
                    >
                      {getDate(task.dueDate)}
                    </div>
                  ) : (
                    <div
                      className="font-12"
                      style={{ color: "#ADADAD", position: "relative" }}
                    >
                      {isCalender ? (
                        <div
                          className="task-card"
                          style={{
                            position: "absolute",
                            width: "300px",
                            top: "36px",
                            right: "46px",
                            zIndex: "5",
                          }}
                        >
                          <div className="site-calendar-demo-card">
                            <Calendar
                              fullscreen={false}
                              onChange={(e) => {
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
                              cursor: "pointer",
                            }}
                            onClick={() => setIsCalender(!isCalender)}
                          >
                            <div className="d-flex align-center">
                              <Tooltip title="Add due date">
                                <svg
                                  width="25"
                                  height="25"
                                  viewBox="0 0 20 20"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M13.6109 5.8335H12.7774V5H12.2219V5.8335H7.77764V5H7.22211V5.8335H6.38907C5.62316 5.8335 5 6.4566 5 7.22249V13.611C5 14.3769 5.62314 15 6.38907 15H13.6109C14.3768 15 15 14.3769 15 13.611V7.22207C14.9995 6.4562 14.3764 5.83358 13.6109 5.83358V5.8335ZM14.444 13.6104C14.444 14.0696 14.0701 14.4434 13.6109 14.4434H6.38907C5.92935 14.4434 5.55553 14.0696 5.55553 13.6104V8.61097H14.444V13.6104ZM14.444 8.05548H5.55553V7.22198C5.55553 6.76229 5.92935 6.38848 6.38907 6.38848H7.22262V6.94398H7.77766V6.38897H12.2219V6.94447H12.7774V6.38897H13.6109C14.0702 6.38897 14.444 6.76229 14.444 7.22196L14.444 8.05548Z"
                                    fill={"black"}
                                  />
                                  <circle
                                    cx="10"
                                    cy="10"
                                    r="9.75"
                                    stroke={"black"}
                                    strokeWidth="0.5"
                                    strokeDasharray="2 2"
                                  />
                                </svg>
                              </Tooltip>
                              <div
                                className="review-property"
                                style={{ marginLeft: "5px" }}
                              >
                                no due date
                              </div>
                            </div>
                          </div>
                        )}
                      </>
                    </div>
                  )}
                </ReviewWrapper>

                {/* Projects ....................................................................... */}

                <ReviewWrapper>
                  <div className="font-12 review-left-width">Project</div>
                  {/* task not for testing purpose */}
                  {!task.projects && (
                    <div className="d-flex">
                      {/* {editPhase === "projects" ? (
                        <div className="font-12">No Project found</div>
                      ) : (
                        <div
                          className="font-12 review-property"
                          onClick={() => setEditPhase("projects")}
                        >
                          Add to projects
                        </div>
                      )} */}
                      <div
                        className="mr-5 mt-4"
                        style={{
                          width: "10px",
                          height: "10px",
                          background: "green",
                          borderRadius: "2px",
                        }}
                      ></div>
                      <div
                        className="font-12 "
                        //onClick={() => setEditPhase("projects")}
                      >
                        {task.project}
                      </div>
                    </div>
                  )}
                </ReviewWrapper>

                {/* Dependence ....................................................................... */}

                <ReviewWrapper>
                  <div className="font-12 review-left-width">Dependencies</div>
                  {!task.dependencis && (
                    <>
                      {editPhase === "dependencies" ? (
                        <div className="font-12">No dependencies found</div>
                      ) : (
                        <div
                          className="font-12 review-property"
                          onClick={() => setEditPhase("dependencies")}
                        >
                          Add dependencies
                        </div>
                      )}
                    </>
                  )}
                </ReviewWrapper>

                {/* Cost ....................................................................... */}

                <ReviewWrapper>
                  <div className="font-12 review-left-width">Cost</div>
                  {task.cost && editPhase !== "cost" ? (
                    <div className="font-12">
                      {
                        <div
                          className="font-12"
                          onClick={() => {
                            //console.log(editPhase);
                            setEditedValue(task.cost);
                            setEditPhase("cost");
                          }}
                          style={{ cursor: "pointer" }}
                        >
                          {task.cost}
                        </div>
                      }
                    </div>
                  ) : editPhase === "cost" ? (
                    <form onSubmit={costHandler} onBlur={costHandler}>
                      <input
                        autoFocus
                        value={editedValue}
                        onChange={(e) => setEditedValue(e.target.value)}
                        className="font-12"
                        style={{
                          width: "100%",
                          border: "none",
                          outline: "none",
                        }}
                        type="text"
                      />
                    </form>
                  ) : (
                    <div
                      className="font-12 review-property"
                      onClick={() => {
                        setEditedValue(task.cost);
                        setEditPhase("cost");
                      }}
                    >
                      Add Cost
                    </div>
                  )}
                </ReviewWrapper>

                {/* Description ....................................................................... */}

                <ReviewWrapper>
                  <div className="font-12 review-left-width">Description</div>
                  <div />
                </ReviewWrapper>
              </div>
              <div
                className="font-12 mt-15"
                style={{
                  border: "1px solid #D6D6D6",
                  padding: "10px 10px",
                  textAlign: "justify",
                  borderRadius: "10px",
                }}
              >
                {task.taskDescription && editPhase !== "taskDescription" ? (
                  <div className="font-12">
                    {
                      <div
                        className="font-12"
                        onClick={() => {
                          //console.log(editPhase);
                          setEditedValue(task.taskDescription);
                          setEditPhase("taskDescription");
                        }}
                        style={{ cursor: "pointer" }}
                      >
                        {task.taskDescription}
                      </div>
                    }
                  </div>
                ) : editPhase === "taskDescription" ? (
                  <form
                    onSubmit={descriptionHandler}
                    onBlur={descriptionHandler}
                  >
                    <input
                      autoFocus
                      value={editedValue}
                      onChange={(e) => setEditedValue(e.target.value)}
                      className="font-12"
                      style={{ width: "100%", border: "none", outline: "none" }}
                      type="text"
                    />
                  </form>
                ) : (
                  <div
                    className="font-12 review-property"
                    onClick={() => {
                      setEditedValue(task.taskDescription);
                      setEditPhase("taskDescription");
                    }}
                  >
                    Add more details to this task
                  </div>
                )}
              </div>

              {/* subTask area ....................................................................... */}
              <>
                {task.subtasks && (
                  <>
                    {task.subtasks.length !== 0 || isComponentVisible ? (
                      <div className="font-12 mt-15 d-flex align-center subject-section">
                        Subtask
                      </div>
                    ) : (
                      <div className="font-12 mt-15">No Sub tasks</div>
                    )}
                  </>
                )}
              </>

              {task.subtasks
                ? task.subtasks.map((subTask, key) => {
                    return (
                      <div key={key}>
                        {subTask.parentTaskId === task._id ? (
                          <div className="d-flex justify-content-between subject-section">
                            <IconAndName
                              name={subTask.taskTitle}
                              src="task.svg"
                              height="14px"
                              mr="24px"
                              class="font-12"
                            />
                            <div className="d-flex ">
                              <div
                                className="font-12"
                                style={{ width: "90px" }}
                              >
                                {dayMonth(subTask.createdAt)}
                              </div>
                              <Icon name="chat2.svg" height="14px" pl="10px" />
                            </div>
                          </div>
                        ) : (
                          ""
                        )}
                      </div>
                    );
                  })
                : ""}

              <div ref={ref}>
                {isComponentVisible && (
                  <AddSubTask
                    id={task._id}
                    setIsComponentVisible={setIsComponentVisible}
                  />
                )}
              </div>

              <div className="d-flex mt-15">
                <Button
                  onClick={() => {
                    dispatch(
                      setTaskProperties({
                        ...props.taskProperties,
                        section: task.section,
                        parentTaskId: task._id,
                      })
                    );
                    setIsComponentVisible(true);
                  }}
                  name="Add subtask"
                  src="addBlack.svg"
                  height="14px"
                  class="font-14"
                />
              </div>

              {/* chat area ....................................................................... */}

              <div className="d-flex mt-15">
                <div className="add-subject-img">
                  <Icon name="addSection.svg" height="100%" />
                </div>
              </div>

              {/* <div style={{ marginTop: "20px" }}>
                {task.comments !== []
                  ? task.comments.map((comment, key) => {
                      return (
                        <CommentSection
                          height="26px"
                          containerWidth="320px"
                          name="James created this task"
                          nameClass="font-14"
                          commentClass="font-12"
                          src="profile.png"
                          hours="3 hours ago"
                          comment=""
                        />
                      );
                    })
                  : "No comments yet!"}
              </div> */}
            </div>
          </div>

          <div className="chat-position">
            <ChatTextArea />
            <div
              style={{
                margin: "9px 0px 15px 15px",
                width: "480px",
              }}
            >
              <div className="d-flex justify-content-between">
                <div className="d-flex align-center">
                  <div
                    className="font-12"
                    style={{
                      marginRight: "13px",
                    }}
                  >
                    Collabotations
                  </div>
                  <Icon name="profile2.png" height="19px" pr="14px" />
                  <Icon name="profile2.png" height="19px" pr="14px" />
                  <Icon name="profile2.png" height="19px" pr="14px" />
                  <Icon name="addBlack.svg" height="12px" />
                </div>
                <div className="d-flex align-center">
                  <IconAndName
                    name=" leave task"
                    src="noti-black.svg"
                    height="12px"
                    mr="13px"
                    class="font-12"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        // "loading..."
        <div className="open-ticket">
          <TicketNav
            task={{ titleIdentifier: "Design-123" }}
            editEffect={editEffect}
            setOpen={setOpen}
            open={open}
          />
          {/* <div className="scroll-y review-height"> */}
          <div className="scroll-y" style={{ height: "54vh" }}>
            <div
              className="d-flex align-center"
              style={{
                height: "34px",
                padding: "0px 20px",
                borderBottom: " 1px solid #D6D6D6",
                background: "#FBFBFB",
              }}
            >
              <IconAndName
                name="This task is private to you"
                src="lock.svg"
                height="16px"
                namePT="4px"
                class="font-12"
              />
            </div>

            {/* Review Section ....................................................................... */}

            {/* Title ....................................................................... */}
            <div className="review-section">
              {editPhase === "title" ? (
                <form>
                  <input
                    autoFocus
                    value={"Task Title"}
                    // onChange={(e) => setEditedValue(e.target.value)}
                    className="font-16"
                    style={{
                      width: "100%",
                      border: "none",
                      outline: "none",
                      fontWeight: "600",
                    }}
                    type="text"
                  />
                </form>
              ) : (
                <div
                  className="font-16"
                  // onClick={() => {
                  //   setEditedValue(task.taskTitle);
                  //   setEditPhase("title");
                  // }}
                  style={{ cursor: "pointer", fontWeight: "600" }}
                >
                  <Tooltip title="click to edit">Task title</Tooltip>
                </div>
              )}
              <div>
                {/* Assignee ....................................................................... */}

                <ReviewWrapper>
                  <div className="font-12 review-left-width">Assignee</div>
                  <Col span={8} style={{ cursor: "pointer" }}>
                    <ProfileAndName
                      height="20px"
                      name="Jhon Doe"
                      class="font-12"
                      src="profile.png"
                    />
                  </Col>
                </ReviewWrapper>

                {/* Date ....................................................................... */}

                <ReviewWrapper>
                  <div className="font-12 review-left-width">Date</div>

                  <div>
                    <div
                      className="font-12 review-property"
                      style={{ marginLeft: "5px" }}
                    >
                      no due date
                    </div>
                  </div>
                </ReviewWrapper>

                {/* Projects ....................................................................... */}

                <ReviewWrapper>
                  <div className="font-12 review-left-width">Project</div>
                  <div className="d-flex">
                    <div
                      className="mr-5 mt-4"
                      style={{
                        width: "10px",
                        height: "10px",
                        background: "green",
                        borderRadius: "2px",
                      }}
                    ></div>
                    <div className="font-12 ">UX/UI software</div>
                  </div>
                </ReviewWrapper>

                {/* Dependence ....................................................................... */}

                <ReviewWrapper>
                  <div className="font-12 review-left-width">Dependencies</div>

                  <div
                    className="font-12 review-property"
                    onClick={() => setEditPhase("dependencies")}
                  >
                    Add dependencies
                  </div>
                </ReviewWrapper>

                {/* Cost ....................................................................... */}

                <ReviewWrapper>
                  <div className="font-12 review-left-width">Cost</div>
                  <div
                    className="font-12 review-property"
                    // onClick={() => {
                    //   setEditedValue(task.cost);
                    //   setEditPhase("cost");
                    // }}
                  >
                    Add Cost
                  </div>
                </ReviewWrapper>

                {/* Description ....................................................................... */}

                <ReviewWrapper>
                  <div className="font-12 review-left-width">Description</div>
                  <div />
                </ReviewWrapper>
              </div>
              <div
                className="font-12 mt-15"
                style={{
                  border: "1px solid #D6D6D6",
                  padding: "10px 10px",
                  textAlign: "justify",
                  borderRadius: "10px",
                }}
              >
                <div className="font-12 review-property">
                  Add more details to this task
                </div>
              </div>

              {/* subTask area ....................................................................... */}
              <>
                <div className="font-12 mt-15">No Sub tasks</div>
              </>

              <div className="d-flex mt-15">
                <Button
                  name="Add subtask"
                  src="addBlack.svg"
                  height="14px"
                  class="font-14"
                />
              </div>

              {/* chat area ....................................................................... */}

              <div className="d-flex mt-15">
                <div className="add-subject-img">
                  <Icon name="addSection.svg" height="100%" />
                </div>
              </div>
            </div>
          </div>

          <div className="chat-position">
            <ChatTextArea />
            <div
              style={{
                margin: "9px 0px 15px 15px",
                width: "480px",
              }}
            >
              <div className="d-flex justify-content-between">
                <div className="d-flex align-center">
                  <div
                    className="font-12"
                    style={{
                      marginRight: "13px",
                    }}
                  >
                    Collabotations
                  </div>
                  <Icon name="profile2.png" height="19px" pr="14px" />
                  <Icon name="profile2.png" height="19px" pr="14px" />
                  <Icon name="profile2.png" height="19px" pr="14px" />
                  <Icon name="addBlack.svg" height="12px" />
                </div>
                <div className="d-flex align-center">
                  <IconAndName
                    name=" leave task"
                    src="noti-black.svg"
                    height="12px"
                    mr="13px"
                    class="font-12"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
function mapStateToProps(state) {
  return {
    singleTask: state.taskReducer.singleTask,
    taskProperties: state.taskReducer.taskProperties,
    tasks: state.taskReducer.tasks,
    successTask: state.taskReducer.success,
  };
}

export default connect(mapStateToProps)(TicketDrawer);
