import React from 'react';
import { notification} from 'antd';

const Notification = (props) => {
  const [ contextHolder] = notification.useNotification(); //[api, contextHolder]
  // const openNotificationWithIcon = (type) => {
  //   api[type]({
  //     message: props.message,
  //   //   description:
  //   //     'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
  //   });
  // };
  return (
    <>
      {contextHolder}
      {/* <Space>
        <Button onClick={() => openNotificationWithIcon('success')}>Success</Button>
        <Button onClick={() => openNotificationWithIcon('info')}>Info</Button>
        <Button onClick={() => openNotificationWithIcon('warning')}>Warning</Button>
        <Button onClick={() => openNotificationWithIcon('error')}>Error</Button>
      </Space> */}
    </>
  );
};
export default Notification;