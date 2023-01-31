import axios from "axios";
import { notification } from "antd";

const baseUrl = process.env.REACT_APP_API_URL;
// axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('token')}`
const config = {
  headers: { Authorization: "" },
};

export const verifyUser = (data, callBack) => {
  return async (dispatch) => {
    try {
      config.headers.Authorization = `Bearer ${localStorage.getItem("token")}`;
      const res = await axios.put(`${baseUrl}/users/edit`, data, config);
      dispatch({
        type: "successUser",
        payload: res,
      });
    //   callBack();
      notification.success({
        message: "User Verified",
        placement: "topLeft",
      });
    } catch (error) {
      console.log(error);
      dispatch({
        type: "error",
        payload: error,
      });
      notification.error({
        message: "Failed to verify user",
        placement: "topLeft",
      });
    }
  };
};

export const getUsers = () => {
  return async (dispatch) => {
    try {
      const res = await axios.get(`${baseUrl}/users`);
      dispatch({
        type: "success-get",
        payload: res.data.data,
      });
    } catch (error) {
      console.log(error);
      dispatch({
        type: "error",
        payload: error,
      });
    }
  };
};
