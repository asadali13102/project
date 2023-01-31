import React, { useState } from "react";
import ResetForm from "../molecules/ResetForm";
import MessageConfirmation from "../molecules/MessageConfirmation";

const ResetPassword = () => {
  const [check, setCheck] = useState(false);
  const [mail, setMail] = useState("");
  return (
    <div className="page d-flex ">
      <div className="left-side">
        <div className="ml-signUp m-top">
          {!check && <ResetForm setCheck={setCheck} setMail={setMail} />}
          {check && <MessageConfirmation mail={mail} />}
        </div>
      </div>
      <div className="right-side">
        <div className="right-text ml-signUp right-text-div-width m-top">
          <h1 className="text-white">Work Management</h1>
          <p className="font-weight-500 text-lightBlue">
            See project progress, track individual tasks, integrate with other
            tools, and achieve successful lanuches
          </p>
        </div>
        <img
          className="set-image"
          src="/images/icons/screen.png"
          alt="screen"
        />
      </div>
    </div>
  );
};

export default ResetPassword;
