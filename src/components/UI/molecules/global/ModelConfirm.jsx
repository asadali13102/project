import React from "react";
import { Modal } from "antd";

const ModelConfirm = (props) => {
  const handleOk = () => {
    props.run();
  };
  const handleCancel = () => {
    props.setOpen(false);
  };
  return (
    <>
      <Modal
        open={props.open}
        onOk={handleOk}
        onCancel={handleCancel}
        okText={"Delete"}
        style={{
          position: "absolute",
          top: "30vh",
          left: "35vw",
        }}
      >
        <p style={{ fontWeight: "500", fontSize: "17px" }}>{props.text}</p>
      </Modal>
    </>
  );
};
export default ModelConfirm;
