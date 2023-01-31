import axios from "axios";
import { notification } from "antd";

const baseUrl = process.env.REACT_APP_API_URL;
const config = {
    headers: { Authorization: ""}
  };

export const addComment = (msg, id) => {
    return async (dispatch) => {
      try {
        const data={
            messageDescription:msg,
            messageId: id,
        }
        config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`
        const res = await axios.post(`${baseUrl}/messages/add`, data, config );
        dispatch({
          type: "comment-success",
          payload: res.data.data,
        });
        notification.success({
            message: "Message Sent",
            placement: "topLeft",
          });
      } catch (error) {
        dispatch({
          type: "comment-error",
          payload: error,
        });
        notification.error({
          message: "Oops! somthing Went Wrong",
          placement: "topLeft",
        });
      }
    };
};

export const getComments = () => {
    return async (dispatch) => {
      try {
        config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`
        const res = await axios.get(`${baseUrl}/messages`,config);
        dispatch({
          type: "comments",
          payload: res.data.data,
        });
      } catch (error) {
        dispatch({
            type: "comment-error",
            payload: error,
          });
      }
    };
  };
