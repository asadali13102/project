import React from "react";
import { Button } from "antd";
import { Link, useNavigate , } from "react-router-dom";
import { connect } from "react-redux";
import { useDispatch } from "react-redux";
import { resendEmail } from "../../../actions";

const EmailConfirmation = (props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleConfirm = () => {
    props.setSignup(false);
    navigate("/signin");
  };

  const handleResendEmail = (e) => {
    e.preventDefault();
    dispatch(resendEmail({isResendMail:true,email:props.name}));
  };
  

  return (
    <div className="d-flex flex-center-xy h-100vp bg-theme-blue">
      <div className="d-flex flex-center-xy flex-col content-div">
        <div className="d-flex flex-center-xy flex-col px-15">
          <img
            src="/images/icons/open-envelope.svg"
            alt="envelope-icon"
            className="envelope-icon"
          />

          <div className="d-flex flex-center-xy flex-col ">
            <div className="d-flex flex-center-xy flex-col ">
              <h1 className="heading-color">Confirm Your Email</h1>
              <p className="message">
                You've entered <span className="userNameText"> {props.name}</span> as the
                email address for your account.
              </p>
              <p className="message">
                Please verify this email address by clicking button below.
              </p>
              <div className="btn-div">
                <Button
                  type="primary"
                  size="large"
                  className="confirm-btn"
                  onClick={handleConfirm}
                >
                  Confirm Email
                </Button>
              </div>
            </div>

            <div className="no-email-msg">
              <p>
                Did not get the email? <span className="text-lightBlue cursor-pointer" onClick={handleResendEmail}>Send the letter again.</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
const mapStateToProp = (state) => {
  return {
    success: state.signupReducer.response,
  };
};
export default connect(mapStateToProp)(EmailConfirmation);
