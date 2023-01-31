import React, { useState } from "react";
import HeadingCard from "../molecules/dashboard/HeadingCard";
import TaskCard from "../molecules/dashboard/TaskCard";
import IconAndName from "../atoms/side-navbar/IconAndName";
import Button from "../atoms/global/Button";
import LeftChatIcon from "../molecules/global/LeftChatIcon";
import { connect } from "react-redux";
import AddSection from "../molecules/dashboard/AddSection";
import useAddSectionVisible from "../../../js/useAddSectionVisible";

const DashBoard = (props) => {
  const [sectionTitle, setSectionTitle] = useState("");
  const [sectionDescription, setsectionDescription] = useState("");
  const phase = "display";

  const { sectionRef, isAddSectionVisible, setIsAddSectionVisible } =
    useAddSectionVisible(false);

  const sectionHandler = (req, payload = []) => {};

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
