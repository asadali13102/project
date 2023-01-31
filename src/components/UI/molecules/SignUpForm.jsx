import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { signUp } from "../../../actions";
import { useEffect } from "react";

const SignUpForm = (props) => {
  const dispatch = useDispatch();
  const [fullName, setFullName] = useState("");
  const [emailAddress, setEmailAddress] = useState("");
  const [password, setPassword] = useState("");
  const [check, setCheck] = useState(false);
  const [checkName, setCheckName] = useState(false);
  const [checkMail, setCheckMail] = useState(false);
  const [checkPass, setCheckPass] = useState(false);
  const [checkError, setCheckError] = useState(false);

  const handlePass = () => {
    setCheck((check) => !check);
  };

  const nameHandler = (e) => {
    let regex = new RegExp(/^[a-zA-Z ]+$/);
    let name = e.target.value;
    setFullName(name);
    regex.test(name) ? setCheckName(false) : setCheckName(true);
    if (e.target.value.length === 0) {
      setCheckName(false);
    }
  };

  const emailHandler = (e) => {
    let regex = new RegExp(
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z-]+(?:\.[a-zA-Z0-9-]+)*$/
    );
    let mail = e.target.value;
    setEmailAddress(mail);
    setCheckError(false);
    regex.test(mail) ? setCheckMail(false) : setCheckMail(true);
    if (e.target.value.length === 0) {
      setCheckMail(false);
    }
  };

  const passwordHandler = (e) => {
    let regex = new RegExp(
      /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,16}$/
    );
    let passWord = e.target.value;
    setPassword(passWord);
    regex.test(passWord) ? setCheckPass(false) : setCheckPass(true);
    if (e.target.value.length === 0) {
      setCheckPass(false);
    }
  };

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(signUp({ fullName, emailAddress, password }));
    props.setEmail(emailAddress);
  };

  const data = useSelector((state) => state.signupReducer);

  useEffect(() => {
    try {
      if (data.error) {
        emailAddress ? setCheckMail(true) : setCheckMail(false);
        setCheckError(true);
      } else if (data.response) {
        setCheckMail(false);
        setCheckError(false);
        props.setSignup(true);
      }
    } catch (error) {
      console.log(error);
    }
  }, [data.error, data.response]);

  return (
    <div className="form-div">
      <form onSubmit={submitHandler}>
        <label className={"font-weight-500 text-darkGray"}>Full name</label>
        <br />
        <div className="pos-relative">
          <input
            className={checkName ? "inputTag border-red mt-0" : "inputTag mt-0"}
            type="text"
            name="fullName"
            value={fullName}
            onChange={nameHandler}
            placeholder="John Doe"
            required
          />
          {checkName && (
            <img
              className="exclamation-error-icon"
              src="/images/icons/exclamationMarkError.svg"
              alt="img"
            />
          )}
        </div>
        <div className={checkName ? "d-error" : "d-none"}>
          <img src="/images/icons/error.svg" alt="error" />
          <label className={"font-12"}>
            {!fullName ? "Full name required!" : "Name contains only alphabets"}
          </label>
        </div>

        <div className="mt-10">
          <label className={"font-weight-500 text-darkGray"}>
            Email adress
          </label>
          <br />
        </div>
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
            {checkError ? " User already exist" : " This email is invalid!"}{" "}
          </label>
        </div>

        <div className="mt-10">
          <label className={"font-weight-500 text-darkGray"}>
            Choose password
          </label>
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
            Please use at least one number or special character!
          </label>
        </div>
        <br />

        <div>
          <label className={"checkBox"}>
            <input className="check-mark" type="checkbox" id="check" />
            <span className="mark"></span>
          </label>
          <label className={"font-weight-500 text-darkGray ml-10"}>
            Remember password
          </label>
          <br />
        </div>

        <button
          type="submit"
          className={"button-tag font-18px font-weight-500 text-white"}
        >
          Sign up!
        </button>
        <br />
        <label className={"font-weight-500 text-darkGray"}>
          Have account? <Link to={"/signin"}>Log in</Link>
        </label>
        <br />
      </form>
    </div>
  );
};

export default SignUpForm;
