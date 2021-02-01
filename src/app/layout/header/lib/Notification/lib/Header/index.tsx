import React, { FC } from "react";
import { Button, Dropdown, Menu, Typography } from "antd";
import { Align } from "@voomsway/react-table/dist";

interface NotificationHeaderProps {
  onSettingsClick: () => void;
}

const NotificationHeader: FC<NotificationHeaderProps> = (props) => {
  const { onSettingsClick } = props;

  const menu = (
    <Menu onSelect={onSettingsClick}>
      <Menu.Item
        icon={
          <span className={"anticon"}>
            <i className="ri-check-line" />
          </span>
        }
      >
        Make all as read
      </Menu.Item>
      <Menu.Item
        icon={
          <span className={"anticon"}>
            <i className="ri-settings-5-line" />
          </span>
        }
      >
        Notification Settings
      </Menu.Item>
    </Menu>
  );
  return (
    <Align alignCenter justifyBetween>
      <Typography.Title
        level={4}
        style={{
          margin: 0,
        }}
      >
        Notifications
      </Typography.Title>
      <Dropdown overlay={menu} arrow>
        <Button
          type={"text"}
          shape={"circle"}
          icon={
            <span className={"anticon"}>
              <i className="ri-more-line" style={{ fontSize: 18 }} />
            </span>
          }
        />
      </Dropdown>
    </Align>
  );
};

export default NotificationHeader;
