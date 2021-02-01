import React, { FC } from "react";
import { Avatar, Image, Popover, Tooltip } from "antd";
import UserMenuContent from "./lib/Content";
import "./styles.less";
import { isEmpty, startCase } from "lodash";

type UserMenuProps = {};

const UserMenu: FC<UserMenuProps> = () => {
  const firstName = "John";
  const lastName = "Doe";
  const username = `${firstName}, ${lastName}`;
  const userEmail = "johndoe@gmail.com";
  const abbreviatedUsername = startCase(firstName);
  return (
    <Popover
      placement="topLeft"
      content={() => (
        <UserMenuContent
          username={username}
          userEmail={userEmail}
          abbreviatedUsername={abbreviatedUsername}
        />
      )}
      trigger="click"
      overlayClassName={"UserMenu__Popover"}
    >
      <Tooltip title={`${username}`} placement="topLeft">
        <Avatar
          style={{
            cursor: "pointer",
            marginTop: -5,
            color: "#f56a00",
            backgroundColor: "#fde3cf",
          }}
        >
          {abbreviatedUsername}
        </Avatar>
      </Tooltip>
    </Popover>
  );
};

export default UserMenu;
