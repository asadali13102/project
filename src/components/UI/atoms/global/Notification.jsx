import React from "react";
import { notification } from "antd";

const Notification = (props) => {
  const [contextHolder] = notification.useNotification();
  return <>{contextHolder}</>;
};
export default Notification;
