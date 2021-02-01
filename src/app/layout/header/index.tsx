import React from "react";
import Notifications from "./lib/Notification";
import UserMenu from "./lib/User";
import { Space, Layout, Button, Tooltip, Badge, Popover } from "antd";

const { Header } = Layout;

const Main = () => {
  return (
    <Header
      className="Layout-header"
      style={{ position: "fixed", zIndex: 5, width: "100%" }}
    >
      <div className="logo">KolaCredit</div>
      <Space size={25} align={"center"}>
        <Tooltip title={"Message"}>
          <Button type={"text"} shape={"circle"}>
            <Badge dot>
              <span className="anticon">
                <i className="ri-message-3-line" style={{ fontSize: 19 }} />
              </span>
            </Badge>
          </Button>
        </Tooltip>
        <Notifications />
        <UserMenu />
      </Space>
    </Header>
  );
};

export default Main;
