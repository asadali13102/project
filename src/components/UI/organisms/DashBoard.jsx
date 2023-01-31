import React, { useState, useEffect } from "react";
import HeadingCard from "../molecules/dashboard/HeadingCard";
import TaskCard from "../molecules/dashboard/TaskCard";
import IconAndName from "../atoms/side-navbar/IconAndName";
import Button from "../atoms/global/Button";
import LeftChatIcon from "../molecules/global/LeftChatIcon";
import { connect, useDispatch, useSelector } from "react-redux";
import {
  addSection,
  getProjectById,
  getTasks,
  getWorkspaceById,
  getWorkspaces,
  setTaskProperties,
} from "../../../actions";
import socket from "../../../js/socket";
import { deleteSection } from "../../../actions";
import useSound from "use-sound";
import noti from "../../../assets/sounds/noti.mp3";
import AddTask from "../molecules/dashboard/AddTask";
import useComponentVisible from "../../../js/useComponentVisible";
import AddSection from "../molecules/dashboard/AddSection";
import useAddSectionVisible from "../../../js/useAddSectionVisible";
import { useParams } from "react-router-dom";

const DashBoard = (props) => {
  const [workspaceTitle, setworkspaceTitle] = useState("");
  const [sectionTitle, setSectionTitle] = useState("");
  const [sectionDescription, setsectionDescription] = useState("");
  const [phase, setphase] = useState("display");

  const [addTaskObj, setAddTaskObj] = useState({
    addTaskPosition: "",
  });
  const dispatch = useDispatch();

  const params = useParams();
  // const callbackTitle = (id)=>{
  //   // dispatch(getWorkspaceById(id,(title)=>{
  //   //   setworkspaceTitle(title)
  //   // }))
  // }
  useEffect(() => {
    dispatch(getProjectById(params.projectid));
  }, [dispatch, params.projectid]);

  const [play] = useSound(noti);
  const { ref, isComponentVisible, setIsComponentVisible } =
    useComponentVisible(false);

  const { sectionRef, isAddSectionVisible, setIsAddSectionVisible } =
    useAddSectionVisible(false);

  // useEffect(() => {
  //   dispatch(getSections());
  //   console.log("use effect section.......");
  // }, [dispatch]);

  useEffect(() => {
    dispatch(getTasks());
    //console.log("use effect task.......");
  }, [dispatch]);

  // Section handler.....................................................................
  useEffect(() => {
    socket.on("TaskEvent", function () {
      //console.log("task.......");
      dispatch(getTasks());
      dispatch(getProjectById(params.projectid));
    });

    // socket.on("SectionEvent", function () {
    //   console.log("section.......");
    //   dispatch(getSections());
    // });
  }, [dispatch, params.projectid]);

  const callback = () => {
    setSectionTitle("");
    play();
    setIsAddSectionVisible(false);
    dispatch(getProjectById(params.projectid));
  };

  const sectionHandler = (req, payload = []) => {
    switch (req) {
      case "addSection":
        return dispatch(
          addSection(
            {
              title: sectionTitle,
              description: sectionDescription,
              project: params.projectid,
            },
            callback
          )
        );

      case "deleteSection":
        return dispatch(
          deleteSection(payload, () => {
            dispatch(getProjectById(params.projectid));
          })
        );

      default:
        break;
    }
  };

  const editSection = () => {
    dispatch(getProjectById(params.projectid));
  };

  // Task handler.....................................................................

  const addTaskHadler = (sectionKey, position) => {
    setIsComponentVisible(true);
    setAddTaskObj({
      ...addTaskObj,
      selectedSection: sectionKey,
      addTaskPosition: position,
    });
  };

  const projectData = useSelector((state) => state.projectReducer.getProjects);
  // const workspaceData = useSelector(state=>state.workspaceReducer.getWorkspaces)

  // useEffect(() => {
  //   workspaceData.forEach(workspace=>(workspace._id===projectData.workspace)?(setworkspaceTitle(workspace.title)):'')
  // }, [params.projectid, dispatch])

  return (
    <div className=" container-padding" style={{ background: "#FBFBFB" }}>
      {/* ....................................................................................... */}
      <div
        style={{ display: "flex", justifyContent: "end", marginBottom: "14px" }}
      >
        <Button
          name="Add section"
          src="addBlack.svg"
          height="16px"
          class="font-16"
          onClick={() => setIsAddSectionVisible(true)}
        />
      </div>
      <div
        className={
          props.toggle
            ? props.isTicketOpen
              ? "d-flex scroll-x TicketOpem"
              : "d-flex scroll-x sidwbarOpen"
            : props.isTicketOpen
            ? "d-flex scroll-x TicketClose"
            : "d-flex scroll-x sidwbarClose"
        }
      >
        {/* ..........................Static sections and task................................. */}
        <div style={{ marginRight: "40px" }}>
          <HeadingCard
            phase={phase}
            editSection={editSection}
            setphase={setphase}
            // sectionKey={sectionKey}
            addTaskHadler={addTaskHadler}
            setTaskProperties={setTaskProperties}
            // projectTitle={projectData.title}
            // workspaceTitle={workspaceTitle}
            taskProperties={props.taskProperties}
            sectionTitle={sectionTitle}
            setSectionTitle={setSectionTitle}
            sectionHandler={sectionHandler}
            play={play}
            // id={section._id}
            title="Todo"
            description="section"
            number="3"
            color="#24CF73"
          />

          <div className="scroll-y" style={{ height: "calc(100vh - 300px)" }}>
            {/* .................Tasks.................... */}
            <div>
              <TaskCard
                heading="Edit customer testimonial"
                date="11/15/2022"
                chatNumber="5"
                shareNumber="17"
                color={"#F4BF00"}
              />
            </div>

            <div>
              <TaskCard
                heading="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi, tempore?"
                date="09/26/2022"
                chatNumber="3"
                shareNumber="8"
                color={"#0077EE"}
                image="demo"
              />
            </div>

            <div>
              <TaskCard
                heading="Work automation system"
                date="09/26/2022"
                chatNumber="9"
                shareNumber="35"
                color={"#F4BF00"}
              />
            </div>

            <div className="task-btn">
              <IconAndName
                name="Add task"
                src="addBlack.svg"
                height="16px"
                class="font-16"
                color="#434343"
              />
            </div>
          </div>
        </div>

        <div style={{ marginRight: "40px" }}>
          <HeadingCard
            phase={phase}
            editSection={editSection}
            setphase={setphase}
            addTaskHadler={addTaskHadler}
            setTaskProperties={setTaskProperties}
            taskProperties={props.taskProperties}
            sectionTitle={sectionTitle}
            setSectionTitle={setSectionTitle}
            sectionHandler={sectionHandler}
            play={play}
            title="Overdue"
            description="Overdue"
            number="4"
            color="#F4BF00"
          />

          <div className="scroll-y" style={{ height: "calc(100vh - 300px)" }}>
            {/* .................Tasks.................... */}
            <div>
              <TaskCard
                heading="Edit customer testimonial"
                date="11/15/2022"
                chatNumber="4"
                shareNumber="2"
                color={"#0077EE"}
              />
            </div>

            <div>
              <TaskCard
                heading="Denner Working Group"
                date="12/03/2022"
                chatNumber="4"
                shareNumber="2"
                color={"#F4BF00"}
              />
            </div>

            <div>
              <TaskCard
                heading="Work automation system"
                date="12/26/2022"
                chatNumber="12"
                shareNumber="20"
                color={"#24CF73"}
              />
            </div>

            <div>
              <TaskCard
                heading="Accumlation of systematization"
                date="12/5/2022"
                chatNumber="12"
                shareNumber="2"
                color={"#0077EE"}
              />
            </div>

            <div className="task-btn">
              <IconAndName
                name="Add task"
                src="addBlack.svg"
                height="16px"
                class="font-16"
                color="#434343"
              />
            </div>
          </div>
        </div>

        <div style={{ marginRight: "40px" }}>
          <HeadingCard
            phase={phase}
            editSection={editSection}
            setphase={setphase}
            // sectionKey={sectionKey}
            addTaskHadler={addTaskHadler}
            setTaskProperties={setTaskProperties}
            // projectTitle={projectData.title}
            // workspaceTitle={workspaceTitle}
            taskProperties={props.taskProperties}
            sectionTitle={sectionTitle}
            setSectionTitle={setSectionTitle}
            sectionHandler={sectionHandler}
            play={play}
            // id={section._id}
            title="Next Week"
            description="section"
            number="3"
            color="#24CF73"
          />

          <div className="scroll-y" style={{ height: "calc(100vh - 300px)" }}>
            {/* .................Tasks.................... */}
            <div>
              <TaskCard
                heading="Edit customer testimonial"
                date="11/15/2022"
                chatNumber="4"
                shareNumber="2"
                color={"#24CF73"}
                image="demo"
              />
            </div>

            <div>
              <TaskCard
                heading="Denner Working Group"
                date="12/03/2022"
                chatNumber="4"
                shareNumber="2"
                color={"#24CF73"}
              />
            </div>

            <div>
              <TaskCard
                heading="Work automation system"
                date="12/26/2022"
                chatNumber="12"
                shareNumber="20"
                color={"#0077EE"}
              />
            </div>

            <div className="task-btn">
              <IconAndName
                name="Add task"
                src="addBlack.svg"
                height="16px"
                class="font-16"
                color="#434343"
              />
            </div>
          </div>
        </div>

        {/* ..........................Dynamic sections and task................................. */}

        {(projectData.sections !== 0)
          ? projectData.sections.map((section, sectionKey) => {
              return (
                <div key={sectionKey} style={{ marginRight: "40px" }}>
                  <HeadingCard
                    phase={phase}
                    editSection={editSection}
                    setphase={setphase}
                    sectionKey={sectionKey}
                    addTaskHadler={addTaskHadler}
                    setTaskProperties={setTaskProperties}
                    projectTitle={projectData.title}
                    workspaceTitle={workspaceTitle}
                    taskProperties={props.taskProperties}
                    sectionTitle={sectionTitle}
                    setSectionTitle={setSectionTitle}
                    sectionHandler={sectionHandler}
                    play={play}
                    id={section._id}
                    title={section.title}
                    description={section.description}
                    number={section.tasks.length}
                    color="#24CF73"
                  />

                  <div
                    className="scroll-y"
                    style={{ height: "calc(100vh - 300px)" }}
                  >
                    <>
                      {isComponentVisible &&
                      addTaskObj.addTaskPosition === "top" &&
                      sectionKey === addTaskObj.selectedSection ? (
                        <div ref={ref}>
                          <AddTask
                            setIsComponentVisible={setIsComponentVisible}
                          />
                        </div>
                      ) : (
                        ""
                      )}
                    </>
                    {props.tasks
                      ? props.tasks.map((task, taskKey) => {
                          return (
                            <div key={taskKey}>
                              {task.section === section._id ? (
                                <TaskCard
                                  sectionId={section._id}
                                  taskId={task._id}
                                  isCompleted={task.isCompleted}
                                  heading={task.taskTitle}
                                  date={task.createdAt}
                                  chatNumber={task.comments.length}
                                  shareNumber={task.subtasks.length}
                                  color={"#F4BF00"}
                                  // image={task.image}
                                />
                              ) : (
                                ""
                              )}
                            </div>
                          );
                        })
                      : ""}
                    <>
                      {isComponentVisible &&
                      addTaskObj.addTaskPosition === "bottom" &&
                      sectionKey === addTaskObj.selectedSection ? (
                        <div ref={ref}>
                          <AddTask
                            setIsComponentVisible={setIsComponentVisible}
                          />
                        </div>
                      ) : (
                        <div className="task-btn">
                          <IconAndName
                            iconFuction={() => {
                              dispatch(
                                setTaskProperties({
                                  ...props.taskProperties,
                                  section: section._id,
                                  project: projectData.title,
                                  workspace: workspaceTitle,
                                })
                              );
                              addTaskHadler(sectionKey, "bottom");
                            }}
                            name="Add task"
                            src="addBlack.svg"
                            height="16px"
                            class="font-16"
                            color="#434343"
                          />
                        </div>
                      )}
                    </>
                  </div>
                </div>
              );
            })
          : ""}
        <div ref={sectionRef}>
          {isAddSectionVisible && (
            <AddSection
              color="#24CF73"
              sectionHandler={sectionHandler}
              sectionTitle={sectionTitle}
              setSectionTitle={setSectionTitle}
              sectionDescription={sectionDescription}
              setsectionDescription={setsectionDescription}
              setIsAddSectionVisible={setIsAddSectionVisible}
            />
          )}
        </div>
      </div>
      {props.isTicketOpen ? "" : <LeftChatIcon />}
    </div>
  );
};

function mapStateToProps(state) {
  return {
    sections: state.sectionReducer.getSections,
    successSection: state.sectionReducer.success,
    error: state.sectionReducer.error,
    toggle: state.navReducer.toggle,
    isTicketOpen: state.toggleReducer.isTicketOpen,
    successTask: state.taskReducer.success,
    tasks: state.taskReducer.tasks,
    isTaskModalOpen: state.toggleReducer.isTaskModalOpen,
    taskProperties: state.taskReducer.taskProperties,
  };
}

export default connect(mapStateToProps)(DashBoard);
