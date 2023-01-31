
import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {  useDispatch, connect } from "react-redux";
import { signIn } from "../../../actions";
import { verifyUser } from "../../../actions/userAction";

const SigninForm = (props) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [emailAddress, setEmailAddress] = useState("");
  const [password, setPassword] = useState("");

  const [check, setCheck] = useState(false);
  const [checkMail, setCheckMail] = useState(false);
  const [checkPass, setCheckPass] = useState(false);
  const [passError, setPassError] = useState(false);

  const [isVerifiedError, setIsVerifiedError] = useState(false);

  const location = useLocation();
  const userId = location.search.substring(1);
  useEffect(() => {
    navigate("/signin");
  }, [props.verificationRes, navigate]);

  useEffect(() => {
    if (userId) {
      const user = {
        _id: userId,
        isVerified: true,
      };
      dispatch(verifyUser(user));
    }
  }, [dispatch, userId]);

  const handlePass = () => {
    setCheck((check) => !check);
  };

  const emailHandler = (e) => {
    let regex = new RegExp(
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z-]+(?:\.[a-zA-Z0-9-]+)*$/
    );
    let mail = e.target.value;
    setEmailAddress(mail);
    regex.test(mail) ? setCheckMail(false) : setCheckMail(true);
    if (e.target.value.length === 0) {
      setCheckMail(false);
      setIsVerifiedError(false);
    }
  };

  const passwordHandler = (e) => {
    let regex = new RegExp(
      /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,16}$/
    );
    let passWord = e.target.value;
    setPassword(passWord);
    setPassError(false);
    regex.test(passWord) ? setCheckPass(false) : setCheckPass(true);
    if (e.target.value.length === 0) {
      setCheckPass(false);
    }
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    const fetchdata = await {
      email: emailAddress,
      password: password,
    };
    dispatch(
      signIn(
        fetchdata,
        () => {
          // console.log("working.................");
          navigate("/");
          setCheckMail(false);
          setPassError(false);
        },
        //add call back
        () => {
          setCheckMail(true);
          setIsVerifiedError(true);
        },
        (data) => {
          if (data.response.status === 404) {
            emailAddress ? setCheckMail(true) : setCheckMail(false);
          } else if (data.response.status === 400) {
            password ? setCheckPass(true) : setCheckPass(false);
            setPassError(true);
          }
        }
      )
    );
  };

  return (
    <div className="form-div">
      <form onSubmit={submitHandler}>
        <label className={"font-weight-500 text-darkGray"}>Email</label>
        <br />
        <div className="pos-relative mt-10">
          <input
            className={checkMail ? "inputTag border-red mt-0" : "inputTag mt-0"}
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
          <label className={"font-12"}>
            {" "}
            {isVerifiedError
              ? "This user doesnt exist. Please verify the email filled. Try another account or Sign up instead"
              : "This email is invalid!"}
          </label>
        </div>

        <div className="mt-10">
          <label className={"font-weight-500 text-darkGray"}>Password</label>
          <br />
        </div>

        <div className="set-icon">
          <input
            className={checkPass ? "passTag border-red " : "passTag "}
            type={check ? "text" : "password"}
            name="password"
            value={password}
            onChange={passwordHandler}
            placeholder="minimum 8 charaters"
            required
          />
          {checkPass ? (
            <img
              className="exclamation-error-icon"
              src="/images/icons/exclamationMarkError.svg"
              alt="img"
            />
          ) : (
            <img
              className="password-eye"
              src={check ? "/images/icons/noEye.svg" : "/images/icons/eye.svg"}
              alt="img"
              onClick={handlePass}
            />
          )}

        </div>
        <div className={checkPass ? "d-error" : "d-none"}>
          <img src="/images/icons/error.svg" alt="error" />
          <label className={"font-12"}>
            {" "}
            {passError
              ? " This password in invalid!"
              : "Please use at least one number or special character!"}
          </label>
        </div>
        <br />

        <div className="d-flex forgottenPasswordDiv">
          <span>
            <label className={"checkBox"}>
              <input className="check-mark" type="checkbox" id="check" />{" "}
              <span className="mark"></span>
            </label>
            <label className={"font-weight-500 text-darkGray ml-10"}>
              Remember password
            </label>
          </span>
          <span>
            <Link className={"text-dark font-weight-500"} to={"/resetpassword"}>
              Forgotten password?
            </Link>
          </span>
        </div>
        <button
          type="submit"
          className={"button-tag font-18px font-weight-500 text-white"}
        >
          <img
            className="lock-icon"
            src="/images/icons/padLock.svg"
            alt="lock-icon"
          />{" "}
          Log in!
        </button>
        <br />
        <div className="d-flex font-weight-500 text-darkGray">
          <label>
            Don't have an account? <Link to={"/signup"}>Sign up</Link>
          </label>
        </div>
      </form>
    </div>
  );
};
const mapStateToProp = (state) => {
  return {
    verificationRes: state.userReducer.success,
  };
};
export default connect(mapStateToProp)(SigninForm);
