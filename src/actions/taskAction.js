import axios from "axios"
import { notification } from "antd";

const baseUrl = process.env.REACT_APP_API_URL;

const config = {
  headers: { Authorization: ""}
};

export const getTasks = () => {
    return async (dispatch) => {
      try {
        config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`
        const res = await axios.get(`${baseUrl}/tasks`,config);
        dispatch({
          type: "tasks",
          payload: res.data.data,
        });
      } catch (error) {
        dispatch({
            type: "task-error",
            payload: error,
          });
      }
    };
  };

export const getSingleTask = (id) => {
    return async (dispatch) => {
      try {
        config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`
        const res = await axios.get(`${baseUrl}/tasks/${id}`,config);
        dispatch({
          type: "singleTask",
          payload: res.data.data[0],
        });
      } catch (error) {
        dispatch({
            type: "task-error",
            payload: error,
          });
      }
    };
  };

export const addTask = (data, callBack) => {
    return async (dispatch) => {
      try {
        config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`
        let alphaId = await data.taskTitle.slice(0, 3).toUpperCase();
        let betaId = Math.floor(Math.random() * 999) + 100;
        let titleIdentifier = await alphaId + "-" + betaId;
        let taskProperties = {
          ...data,
          titleIdentifier: titleIdentifier
        }

        const res = await axios.post(`${baseUrl}/tasks/add`, taskProperties,config);
        dispatch({
          type: "task-success",
          payload: res,
        });
        callBack()
        notification.success({
          message: "You just added a new task",
          placement: "topLeft",
        });
      } catch (error) {
        dispatch({
          type: "task-error",
          payload: error,
        });
        notification.error({
          message: "Oops! somthing Went Wrong",
          placement: "topLeft",
        });
      }
    };
  };

  export const deleteTask = (id) => {
    return async (dispatch) => {
      try {
        config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`
        const res = await axios.delete(`${baseUrl}/tasks/${id}`, config);
        // console.log(id, "delete id");
        dispatch({
          type: "task-success",
          payload: res,
        });
        notification.success({
          message: "You just deleted a task",
          placement: "topLeft",
        });
      } catch (error) {
        dispatch({
          type: "task-error",
          payload: error,
        });
        notification.error({
          message: "Oops! somthing Went Wrong",
          placement: "topLeft",
        });
      }
    };
  };
  export const editTask = (data, callBack) => {
    return async (dispatch) => {
      try {
        const res = await axios.put(`${baseUrl}/tasks/edit`, data, config);
        await dispatch({
          type: "task-success",
          payload: res,
        });
        callBack();
        notification.success({
          message: "Task update successfully",
          placement: "topLeft",
        });
      } catch (error) {
        console.log(error);
        dispatch({
          type: "task-errorr",
          payload: error,
        });
        notification.error({
          message: "Oops! somthing Went Wrong",
          placement: "topLeft",
        });
      }
    };
  };

  export const setTaskProperties = (val) => {
    return{
      type: "taskProperties",
      payload: val
    }
  }
