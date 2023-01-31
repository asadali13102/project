import axios from "axios";
import { notification } from "antd";
const baseUrl = process.env.REACT_APP_API_URL;

export const getProjects = () => {
  return async (dispatch) => {
    try {
      const res = await axios.get(`${baseUrl}/projects`);
      dispatch({
        type: "get-projects",
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

export const getProjectById = (id,callBack) => {
  return async (dispatch) => {
    try {
      const res = await axios.get(`${baseUrl}/projects/${id}`);
      // console.log(res.data.status)
      if(res.data.status !== "Not Found"){
        dispatch({
          type: "get-projects",
          payload: res.data.data,
        });
      }
      // callBack(res.data.data.workspace);
    } catch (error) {
      dispatch({
        type: "error",
        payload: error,
      });
    }
  };
};

export const addProject = (data, callback) => {
  return async (dispatch) => {
    try {
      const res = await axios.post(`${baseUrl}/projects/add`, data );
      await dispatch({
        type: "project-success",
        payload: res.data.data,
      });
      notification.success({
        message: "You just added a new project",
        placement: "topLeft",
      });
      callback();
    } catch (error) {
      dispatch({
        type: "workspace-error",
        payload: error,
      });
      notification.error({
        message: "Oops! something went wrong",
        placement: "topLeft",
      });
    }
  };
};

export const deleteProject = (id) => {
  return async (dispatch) => {
    try {
      const res = await axios.delete(`${baseUrl}/projects/${id}`);
      dispatch({
        type: "success",
        payload: res,
      });
      notification.success({
        message: "You just deleted a project",
        placement: "topLeft",
      });
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

