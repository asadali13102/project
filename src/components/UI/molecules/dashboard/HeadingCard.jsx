import React, { useState } from "react";
import Icon from "../../atoms/global/Icon";
import { Dropdown } from "antd";
import { useDispatch } from "react-redux";
import {
  editSection,
  isTicketOpen,
  setTaskProperties,
} from "../../../../actions";
import ModelConfirm from "../global/ModelConfirm";
import useSound from "use-sound";
import deleteSound from "../../../../assets/sounds/deleteSound.mp3";
import editSound from '../../../../assets/sounds/editSound.mp3'

const HeadingCard = (props) => {
  const [open, setOpen] = useState(false);
 
  const dispatch = useDispatch();
  const [play] = useSound(deleteSound);
  const [editEffect] = useSound(editSound)

  const enableEditting = () => {
    props.setSectionTitle(props.title);
    props.setphase(props.id);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    let obj = {
      _id: props.id,
      title: props.sectionTitle,
    };
    dispatch(
      editSection(obj, () => {
        props.setSectionTitle("");
        editEffect();
        props.setphase("display");
        props.editSection();
      })
    );
  };

  const deleteHandler = () => {
    setOpen(false);
    props.sectionHandler("deleteSection", props.id);
    dispatch(isTicketOpen(false));
    play();
  };

  const items = [
    {
      key: "1",
      label: (
        <div
          onClick={enableEditting}
        >
          Edit Section
        </div>
      ),
    },
    {
      key: "2",
      label: <div onClick={() => setOpen(true)}>Delete Section</div>,
    },
  ];

  return (
    <div
      className="heading-card"
      style={{ borderTop: `1px solid ${props.color}` }}
    >
      <ModelConfirm
        text="Are you sure you want to delete this section?"
        open={open}
        setOpen={setOpen}
        run={deleteHandler}
      />
      <div
        className="d-flex justify-content-between"
        style={{ alignItems: "center" }}
      >
        <div className="d-flex align-center">
          { props.phase === props.id ? (
            <form onSubmit={handleSubmit} onBlur={handleSubmit}>
              <input
                autoFocus
                value={props.sectionTitle}
                onChange={(e) => props.setSectionTitle(e.target.value)}
                className="font-18"
                style={{ width: "237px", border: "none", outline: "none" }}
                type="text"
              />
            </form>
          ): (
            <>
            <div className="font-18" onClick={enableEditting} >{props.title}</div>
            <div className="card-number">{props.number}</div>
          </>
          )}
        </div>
        <div className="d-flex align-center">
          <Icon name="showLess.svg" height="16px" pr="20px" />
          <Icon
            name="addBlack.svg"
            height="16px"
            pr="20px"
            onClick={() => {
              dispatch(
                setTaskProperties({
                  ...props.taskProperties,
                  section: props.id,
                  project: props.projectTitle,
                  workspace: props.workspaceTitle
                })
              );
              props.addTaskHadler(props.sectionKey, "top");
            }}
          />
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
                  height: "20px",
                  width: "20px",
                }}
                alt="icon"
              />
            </div>
          </Dropdown>
        </div>
      </div>
    </div>
  );
};

export default HeadingCard;
