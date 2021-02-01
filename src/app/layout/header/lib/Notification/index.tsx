import React, { FC } from "react";
import { Badge, Button, Popover, Tooltip } from "antd";
import NotificationHeader from "./lib/Header";
import NotificationContent from "./lib/Content";
import "./styles.less";

interface NotificationProps {}

const Notifications: FC<NotificationProps> = () => {
  const handleSettingsClick = () => {
    console.log("settings clicked");
  };
  return (
    <Popover
      placement="topLeft"
      title={() => <NotificationHeader onSettingsClick={handleSettingsClick} />}
      content={() => <NotificationContent />}
      trigger="click"
      overlayClassName={"Notification__Popover"}
    >
      <Tooltip title={"Notification"}>
        <Button type={"text"} shape={"circle"}>
          <Badge dot>
            <span className="anticon">
              <i className="ri-notification-4-line" style={{ fontSize: 19 }} />
            </span>
          </Badge>
        </Button>
      </Tooltip>
    </Popover>
  );
};

export default Notifications;
