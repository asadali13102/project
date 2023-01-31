import axios from "axios";
import { notification } from "antd";

const baseUrl = process.env.REACT_APP_API_URL;
const config = {
  headers: { Authorization: "" },
};

export const addRoom = (data) => {
  return async (dispatch) => {
    try {
      config.headers.Authorization = `Bearer ${localStorage.getItem("token")}`;
      const res = await axios.post(`${baseUrl}/rooms/add`, data);
      dispatch({
        type: "room-success",
        payload: res,
      });
      notification.success({
        message: "Room created",
        placement: "topLeft",
      });
    } catch (error) {
      dispatch({
        type: "room-error",
        payload: error,
      });
      notification.error({
        message: "Oops! somthing Went Wrong",
        placement: "topLeft",
      });
    }
  };
};

export const getRooms = () => {
  return async (dispatch) => {
    try {
      config.headers.Authorization = `Bearer ${localStorage.getItem("token")}`;
      const res = await axios.get(`${baseUrl}/rooms`);
      // console.log(res.data.status);
      if (res.data.status !== "Not Found") {
        dispatch({
          type: "room",
          payload: res.data.data,
        });
      }
    } catch (error) {
      dispatch({
        type: "room-error",
        payload: error,
      });
    }
  };
};
