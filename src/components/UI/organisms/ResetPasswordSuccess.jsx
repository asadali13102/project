import React from "react";
import { useNavigate } from "react-router-dom";

const ResetPasswordSuccess = (props) => {
  const navigate = useNavigate();
  return (
    <div className="form-div">
      <h1 className="text-darkGray">Password reset</h1>
      <p className="font-weight-500 text-darkGray">
        Your password has been successfully reset
      </p>
      <button
        className={"button-tag font-18px font-weight-500 text-white"}
        onClick={() => navigate("/signin")}
      >
        <img
          className="lock-icon"
          src="/images/icons/tickCircle.svg"
          alt="checked-icon"
        />{" "}
        Continue
      </button>
    </div>
  );
};

export default ResetPasswordSuccess;
