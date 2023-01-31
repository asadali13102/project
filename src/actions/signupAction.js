import axios from "axios";
import { notification } from "antd";

const baseUrl = process.env.REACT_APP_API_URL;

export const signUp = (data, callBack) => {
  return async (dispatch) => {
    try {
      let fullName = await data.fullName;
      let email = await data.emailAddress;
      let password = await data.password;

      const res = await axios.post(`${baseUrl}/register`, {
        fullName: fullName,
        email: email,
        password: password,
      });
      dispatch({
        type: "signUp-success",
        payload: res,
      });
      //callBack();
    } catch (error) {
      dispatch({
        type: "signUp-error",
        payload: error,
      });
    }
  };
};

export const resendEmail = (data) => {
  return async (dispatch) => {
    try {
      const res = await axios.post(`${baseUrl}/register`, data);
      dispatch({
        type: "signUp-success",
        payload: res,
      });
    } catch (error) {
      dispatch({
        type: "signUp-error",
        payload: error,
      });
    }
  };
};

export const signIn = (data, callBack, callBackNotVerified, callBackError) => {
  return async (dispatch) => {
    try {
      const res = await axios.post(`${baseUrl}/login`, data);
      //if verified
      if (res.data.isVerified) {
        dispatch({
          type: "signin-success",
          payload: res,
        });
        localStorage.setItem("token", res.data.token);

        callBack();
      } else {
        callBackNotVerified();
      }
      //else
      //error handle //verify your email
    } catch (err) {
      dispatch({
        type: "signin-error",
        payload: err,
      });
      callBackError(err);
    }
  };
};

export const sendOTP = (data, callback, callBackError) => {
  return async (dispatch) => {
    try {
      const res = await axios.put(`${baseUrl}/register/resetpassword`, {
        email: data,
      });
      console.log(res.status)
      if(res.status===200){
        dispatch({
          type: "OTP-success",
          payload: res,
        });
        callback();
        notification.success({
          message: "OTP sent",
          placement: "topLeft",
        });
      }else{
        callBackError();
        notification.error({
          message: "Oops! somthing Went Wrong",
          placement: "topLeft",
        });
      }
    } catch (error) {
      dispatch({
        type: "OTP-error",
        payload: error,
      });
      callBackError();
      notification.error({
        message: "Oops! somthing Went Wrong",
        placement: "topLeft",
      });
    }
  };
};

export const verifyOTP = (data, callBack) => {
  return async (dispatch) => {
    try {
      const res = await axios.post(`${baseUrl}/register/verifyotp`, {
        email: data.email,
        otp: data.otp
      });
      dispatch({
        type: "OTP-verified",
        payload: res.data.data,
      });
      if(res.data.data.isOTPConfirmed){
        callBack();
      }
    } catch (error) {
      dispatch({
        type: "OTP-error",
        payload: error,
      });
    }
  };
};

export const updatePassword = (data) => {
  return async (dispatch) => {
    try {
      const res = await axios.put(`${baseUrl}/register/update-password`, {
        _id: data.id,
        password: data.password
      });
      dispatch({
        type: "password-update",
        payload: res,
      });
    } catch (error) {
      dispatch({
        type: "password-error",
        payload: error,
      });
    }
  };
};




