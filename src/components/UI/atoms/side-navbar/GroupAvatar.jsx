import { AntDesignOutlined, UserOutlined } from "@ant-design/icons";
import { Avatar, Tooltip } from "antd";
import React from "react";
const GroupAvatar = () => (
  <>
    <Avatar.Group
      maxCount={4}
      maxPopoverTrigger="click"
      size="medium"
    
      maxStyle={{
        color: "white",
        backgroundColor: "#4077EE",
        cursor: "pointer",
      }}
    >
      <Tooltip title="user" placement="top">
        <Avatar
          style={{
           
            backgroundColor: "#87d068",
          }}
          icon={<img src="/images/icons/profile.png" alt="icon" />}
        />
      </Tooltip>

      <Tooltip title="user" placement="top">
        <Avatar
          style={{
            backgroundColor: "#f56a00",
            
          }}
        >
          K
        </Avatar>
      </Tooltip>
      <Tooltip title="user" placement="top">
        <Avatar
          style={{
            backgroundColor: "#87d068",
          }}
          icon={<UserOutlined />}
        />
      </Tooltip>
      <Tooltip title="user" placement="top">
        <Avatar
          style={{
            backgroundColor: "#87d068",
          }}
          icon={<img src="/images/icons/profile.png" alt="icon" />}
        />
      </Tooltip>
      <Tooltip title="user" placement="top">
        <Avatar
          style={{
            backgroundColor: "#87d068",
          }}
          icon={<img src="/images/icons/profile.png" alt="icon" />}
        />
      </Tooltip>

      <Tooltip>
        <Avatar
          style={{
            backgroundColor: "#1890ff",
          }}
          icon={<AntDesignOutlined />}
        />
      </Tooltip>
    </Avatar.Group>
  </>
);
export default GroupAvatar;
