import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { sendOTP } from "../../../actions";

const ResetForm = (props) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [emailAddress, setEmailAddress] = useState("");
  const [checkMail, setCheckMail] = useState(false);

  const emailHandler = (e) => {
    let regex = new RegExp(
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z-]+(?:\.[a-zA-Z0-9-]+)*$/
    );
    let mail = e.target.value;
    setEmailAddress(mail);
    regex.test(mail) ? setCheckMail(false) : setCheckMail(true);
    if (e.target.value.length === 0) {
      setCheckMail(false);
    }
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    props.setMail(emailAddress);
    dispatch(sendOTP(emailAddress,()=>{
      props.setCheck(true);
    },
    ()=>{
      setCheckMail(true);
    }));
  };

  return (
    <>
      <h1 className="text-darkGray">Reset Password</h1>
      <div className="form-div">
        <form onSubmit={submitHandler}>
          <label className={"font-weight-500 text-darkGray"}>Email</label>
          <br />
          <div className="pos-relative  mt-10">
            <input
              className={
                checkMail ? "inputTag border-red mt-0" : "inputTag mt-0"
              }
              type="email"
              name="email"
              value={emailAddress}
              onChange={emailHandler}
              placeholder="name@company.com"
              required
            />
            {checkMail && (
              <img
                className="exclamation-error-icon"
                src="/images/icons/exclamationMarkError.svg"
                alt="img"
              />
            )}
          </div>
          <div className={checkMail ? "d-error" : "d-none"}>
            <img src="/images/icons/error.svg" alt="error" />
            <label className={"font-12"}> This email is invalid!</label>
          </div>

          <button
            type="submit"
            className={"button-tag font-18px font-weight-500 text-white"}
          >
            Send me the link
          </button>
          <br />
          <div className="d-flex font-weight-500 text-darkGray">
            <label>
              Don't have an account? <Link to={"/signup"}>Sign up</Link>
            </label>
          </div>
        </form>
      </div>
    </>
  );
};

export default ResetForm;
