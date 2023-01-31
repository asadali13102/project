import { AntDesignOutlined } from "@ant-design/icons";
import { Avatar, Tooltip } from "antd";
import React from "react";
const ReplyAvatar = () => (
  <>
    <Avatar.Group
      maxCount={2}
      maxPopoverTrigger="click"
      size="small"
    
      maxStyle={{
        color: "white",
        backgroundColor: "#4077EE",
        cursor: "pointer",
        fontSize:"12px",
       
      }}
    >
    

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
export default ReplyAvatar;
