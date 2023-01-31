import React, { useState } from "react";
import OtpInput from "react18-input-otp";
import { useNavigate, Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { sendOTP, verifyOTP } from "../../../actions";

const MessageConfirmation = (props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [otp, setOtp] = useState("");
  const [showError, setShowError] = useState(false);
  const handleChange = (enteredOtp) => {
    setOtp(enteredOtp);
  };
  const handleSubmit = () => {
    if (otp.length === 6) {
      const data ={
        email: props.mail,
        otp: otp
      }
      dispatch(verifyOTP(data, ()=>{navigate("/createpassword")}));
      setShowError(false);
    } else {
      setShowError(true);
    }
  };

  
  const handleResend = () => {
    dispatch(sendOTP(props.mail));
  };
  return (
    <>
      <h1 className="text-darkGray ">Please check your email</h1>
      <p className="text-dark font-weight-500">
        We sent a code to <span className="text-darkGray">{props.mail}</span>
      </p>
      <br />

      <OtpInput
        value={otp}
        onChange={handleChange}
        onSubmit={handleSubmit}
        numInputs={6}
        isInputNum={true}
        hasErrored={showError}
        errorStyle="border-red"
        separator={<span>&nbsp;&nbsp;&nbsp;</span>}
        inputStyle="otp-input"
        shouldAutoFocus={true}
      />
      <div className="d-flex font-weight-500 text-dark mt-10">
        <label>
          Didn't get a code?&nbsp;
          <Link className="underline" onClick={handleResend}>
            Click to resend
          </Link>
        </label>
      </div>
    </>
  );
};

export default MessageConfirmation;
