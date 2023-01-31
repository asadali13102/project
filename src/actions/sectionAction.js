import axios from "axios";
import { notification } from "antd";
const baseUrl = process.env.REACT_APP_API_URL;
// axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('token')}`
const config = {
  headers: { Authorization: ""}
};
export const getSections = () => {
  return async (dispatch) => {
    try {
      config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`
      const res = await axios.get(`${baseUrl}/sections`, config);
      dispatch({
        type: "getSections",
        payload: res.data.data,
      });
    } catch (error) {
      dispatch({
        type: "error",
        payload: error,
      });
    }
  };
};

export const addSection = (data,callBack) => {
  return async (dispatch) => {
    try {
      config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`
      const res = await axios.post(`${baseUrl}/sections/add`, data ,config);
      await dispatch({
        type: "success",
        payload: res,
      });
      callBack();

      notification.success({
        message: "You just added a new section",
        placement: "topLeft",
      });
    } catch (error) {
      dispatch({
        type: "error",
        payload: error,
      });
      notification.error({
        message: "Section's Title already used",
        placement: "topLeft",
      });
    }
  };
};

export const deleteSection = (id, callBack) => {
  return async (dispatch) => {
    try {
      config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`
      const res = await axios.delete(`${baseUrl}/sections/${id}`, config);
      dispatch({
        type: "success",
        payload: res,
      });
      notification.success({
        message: "You just deleted a section",
        placement: "topLeft",
      });
      callBack();
    } catch (error) {
      dispatch({
        type: "error",
        payload: error,
      });
      notification.error({
        message: "Oops! something went wrong",
        placement: "topLeft",
      });
    }
  };
};

export const editSection = (data, callBack) => {
  return async (dispatch) => {
    try {
      config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`
      const res = await axios.put(`${baseUrl}/sections/edit`, data, config);
      await dispatch({
        type: "success",
        payload: res,
      });
      callBack();
      notification.success({
        message: "You just update a section",
        placement: "topLeft",
      });
    } catch (error) {
      dispatch({
        type: "error",
        payload: error,
      });
      notification.error({
        message: "Section's Title already used",
        placement: "topLeft",
      });
    }
  };
};

export const isDuplicateField = (val) => {
  return {
    type: "isDuplicateField",
    payload: val,
  };
};
