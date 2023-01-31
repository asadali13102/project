import React, { useState } from "react";
import EmailConfirmation from "../molecules/EmailConfirmation";
import SignUpForm from "../molecules/SignUpForm";

const SignUp = () => {
  const [signup, setSignup] = useState(false);
  const [email, setEmail] = useState("");
  
  return (
    <>
      <div className={!signup ? "" : "d-none"}>
        <div className="page d-flex ">
          <div className="left-side scroll-y">
            <div className="ml-signUp m-top">
              <h1 className="text-darkGray">Let's go!</h1>
              <SignUpForm setSignup={setSignup} setEmail={setEmail}/>
            </div>
          </div>
          <div className="right-side">
            <div className="right-text ml-signUp right-text-div-width m-top">
              <h1 className="text-white">Work Management</h1>
              <p className="font-weight-500 text-lightBlue">
                See project progress, track individual tasks, integrate with
                other tools, and achieve successful lanuches
              </p>
            </div>
            <img
              className="set-image"
              src="/images/icons/screen.png"
              alt="screen"
            />
          </div>
        </div>
      </div>
      <div className={signup ? "" : "d-none"}>
        <EmailConfirmation name={email} setSignup={setSignup} />
      </div>
    </>
  );
};

export default SignUp;
