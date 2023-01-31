import axios from "axios";
import { notification } from "antd";
const baseUrl = process.env.REACT_APP_API_URL;

// const config = {
//   headers: { Authorization: ""}
// };

export const getWorkspaces = () => {
  return async (dispatch) => {
    try {
    //   config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`
      const res = await axios.get(`${baseUrl}/workspaces`);
      dispatch({
        type: "get-workspaces",
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

export const getWorkspaceById = (id, callBack) => {
  return async (dispatch) => {
    try {
    //   config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`
      const res = await axios.get(`${baseUrl}/workspaces`);
      dispatch({
        type: "get-workspace",
        payload: res.data.data,
      });
      console.log(res)
      callBack(res.data.data.title);
    } catch (error) {
      dispatch({
        type: "error",
        payload: error,
      });
    }
  };
};

export const addWorkspace = (data, callback) => {
  return async (dispatch) => {
    try {
    //   config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`
      const res = await axios.post(`${baseUrl}/workspaces/add`, data );
      // console.log(res);
      await dispatch({
        type: "workspace-success",
        payload: res.data.data,
      });
      notification.success({
        message: "You just added a new workspace",
        placement: "topLeft",
      });
      callback();
    } catch (error) {
      dispatch({
        type: "workspace-error",
        payload: error,
      });
      notification.error({
        message: "Workspace's Title already used",
        placement: "topLeft",
      });
    }
  };
};

export const deleteWorkspace = (id) => {
  return async (dispatch) => {
    try {
    //   config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`
      const res = await axios.delete(`${baseUrl}/workspaces/${id}`);
      dispatch({
        type: "success",
        payload: res,
      });
      notification.success({
        message: "You just deleted a workspace",
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

