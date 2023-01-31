import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { updatePassword } from "../../../actions";

const NewPasswordForm = (props) => {
  const dispatch = useDispatch();
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [seePassword, setSeePassword] = useState(false);
  const [seeConfirmPassword, setSeeConfirmPassword] = useState(false);

  const [isPasswordValid, setIsPasswordValid] = useState(false);
  const [passwordErrorMsg, setPasswordErrorMsg] = useState("");

  const [showConfirmPasswordValidation, setShowConfirmPasswordValidation] =
    useState(false);
  const [showNewPasswordValidation, setShowNewConfirmPasswordValidation] =
    useState(false);

  const handlePasswordToggle = () => {
    setSeePassword((seePassword) => !seePassword);
  };
  const handleConfirmPasswordToggle = () => {
    setSeeConfirmPassword((seeConfirmPassword) => !seeConfirmPassword);
  };

  const handlePassword = (e) => {
    let regex = new RegExp(
      /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,16}$/
    );
    let passwordString = e.target.value;
    setPassword(passwordString);
    setPasswordErrorMsg("");
    if (regex.test(passwordString)) {
      setIsPasswordValid(true);
      setShowNewConfirmPasswordValidation(false);
    } else {
      setIsPasswordValid(false);
      setPasswordErrorMsg(
        "The password should be atleast 8 characters long, contains an alphabet, a number, and a special character"
      );

      setShowNewConfirmPasswordValidation(true);
    }
    if (e.target.value.length === 0) {
      setShowNewConfirmPasswordValidation(false);
    }

    if (e.target.value === confirmPassword) {
      setShowConfirmPasswordValidation(false);
    }
  };

  const handleConfirmPassword = (e) => {
    let firstPassword = password;
    if (firstPassword !== e.target.value) {
      setShowConfirmPasswordValidation(true);
    } else {
      setShowConfirmPasswordValidation(false);
    }
    setConfirmPassword(e.target.value);
  };

  const userData = useSelector(state=>state.signupReducer.response)

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password === confirmPassword && isPasswordValid) {
      const data = {
        id: userData.userId,
        password: confirmPassword
      }
      dispatch(updatePassword(data));
      props.setIsPasswordReset(true);
    }
  };

  return (
    <div className="form-div">
      <h1 className="text-darkGray">Create new password</h1>
      <form onSubmit={handleSubmit}>
        <div className="mt-10">
          <label className={"font-weight-500 text-darkGray"}>
            Choose new password
          </label>
          <br />
        </div>

        <div className="set-icon">
          <input
            className={
              showNewPasswordValidation ? "passTag border-red" : "passTag"
            }
            type={seePassword ? "text" : "password"}
            name="password"
            value={password}
            onChange={handlePassword}
            placeholder="8+ charaters required"
            required
          />

          {showNewPasswordValidation ? (
            <img
              className="exclamation-error-icon"
              src="/images/icons/exclamationMarkError.svg"
              alt="img"
            />
          ) : (
            <img
              className="password-eye"
              src={
                seePassword
                  ? "/images/icons/noEye.svg"
                  : "/images/icons/eye.svg"
              }
              alt="img"
              onClick={handlePasswordToggle}
            />
          )}
        </div>
        <div className={showNewPasswordValidation ? "d-error" : "d-none"}>
          <img src="/images/icons/error.svg" alt="error" />
          <label className={"font-12"}> {passwordErrorMsg}</label>
        </div>
        <div className="mt-10">
          <label className={"font-weight-500 text-darkGray"}>
            Confirm password
          </label>
          <br />
        </div>

        <div className="set-icon">
          <input
            className={
              showConfirmPasswordValidation ? "passTag border-red" : "passTag"
            }
            type={seeConfirmPassword ? "text" : "password"}
            name="password"
            value={confirmPassword}
            onChange={handleConfirmPassword}
            placeholder="8+ charaters required"
            required
          />
          {showConfirmPasswordValidation ? (
            <img
              className="exclamation-error-icon"
              src="/images/icons/exclamationMarkError.svg"
              alt="img"
            />
          ) : (
            <img
              className="password-eye"
              src={
                seeConfirmPassword
                  ? "/images/icons/noEye.svg"
                  : "/images/icons/eye.svg"
              }
              alt="img"
              onClick={handleConfirmPasswordToggle}
            />
          )}
        </div>
        <div className={showConfirmPasswordValidation ? "d-error" : "d-none"}>
          <img src="/images/icons/error.svg" alt="error" />
          <label className={"font-12"}>
            The password does not match with the password above!
          </label>
        </div>
        <br />

        <button
          type="submit"
          className={"button-tag font-18px font-weight-500 text-white mt-0"}
        >
          <img
            className="lock-icon"
            src="/images/icons/padLock.svg"
            alt="lock-icon"
          />{" "}
          Create Password
        </button>
        <br />
        <div className="d-flex font-weight-500 text-darkGray forgottenPasswordDiv">
          <label>
            Don't have an account? <Link to={"/signup"}>Sign up</Link>
          </label>
        </div>
      </form>
    </div>
  );
};

export default NewPasswordForm;
