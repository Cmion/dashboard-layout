import React, { FC } from "react";
import { Avatar, Button, Tooltip, Typography } from "antd";
import { Align, Padding, Position } from "@voomsway/react-table";
import { isEmpty, startCase } from "lodash";

type UserMenuContentProps = {
  username: string;
  userEmail: string;
  abbreviatedUsername: string;
};
const UserMenuContent: FC<UserMenuContentProps> = (props) => {
  const { username, userEmail, abbreviatedUsername } = props;

  return (
    <Align type={"column"} justifyCenter className={"UserMenu__Content"}>
      <Align
        type={"column"}
        justifyCenter
        alignCenter
        style={{ borderBottom: "1px solid var(--border-color-split)" }}
      >
        <Avatar
          className={"UserMenu__Avatar__Large"}
          style={{
            cursor: "pointer",
            marginTop: -5,
            color: "#f56a00",
            backgroundColor: "#fde3cf",
          }}
        >
          <Align
            style={{ height: "100%", width: "100%" }}
            alignCenter
            justifyCenter
          >
            {abbreviatedUsername}
          </Align>
        </Avatar>
        <Padding vertical={10}>
          <Align type={"column"} alignCenter justifyCenter>
            {startCase(username) === "John Doe" && (
              <Tooltip title={"No valid username was recorded"}>
                <Typography.Text
                  style={{
                    color: "var(--text-color-secondary)",
                    textDecoration: "line-through",
                  }}
                >
                  {startCase(username)}
                </Typography.Text>
              </Tooltip>
            )}
            {startCase(username) !== "John Doe" && (
              <Typography.Text
                strong
                style={{
                  fontSize: "var(--fs-15)",
                  paddingBottom: 5,
                  color: "var(--heading-color)",
                }}
              >
                {startCase(username)}
              </Typography.Text>
            )}
            {isEmpty(userEmail) && (
              <Tooltip title={"No valid email was recorded"}>
                <Typography.Text
                  style={{
                    color: "var(--text-color-secondary)",
                    textDecoration: "line-through",
                  }}
                >
                  {"youremail@example.com"}
                </Typography.Text>
              </Tooltip>
            )}
            {!isEmpty(userEmail) && (
              <Typography.Text
                style={{
                  color: "var(--text-color-secondary)",
                }}
              >
                {userEmail}
              </Typography.Text>
            )}
          </Align>
        </Padding>
      </Align>
      <Padding vertical={10} horizontal={12}>
        <Align alignCenter className={"UserMenu__Selectable"}>
          <Padding right={10}>
            <span className={"anticon"}>
              <i className="ri-medal-line" />
            </span>
          </Padding>
          <Padding className={"UserMenu__Selectable__Text"}>
            See your permissions
          </Padding>
        </Align>
        <Align alignCenter className={"UserMenu__Selectable"}>
          <Padding right={10}>
            <span className={"anticon"}>
              <i className="ri-question-line" />
            </span>
          </Padding>
          <Padding className={"UserMenu__Selectable__Text"}>
            Help & Support
          </Padding>
        </Align>
        <Align
          alignCenter
          className={"UserMenu__Selectable"}
          onClick={() => console.log("Logout")}
        >
          <Padding right={10}>
            <span className={"anticon"}>
              <i className="ri-logout-circle-line" />
            </span>
          </Padding>
          <Padding className={"UserMenu__Selectable__Text"}>Logout</Padding>
        </Align>
      </Padding>

      <Position type={"absolute"} top={10} right={15}>
        <Tooltip title={"User menu"}>
          <Button
            type={"text"}
            shape={"circle"}
            icon={
              <span className={"anticon"}>
                <i className="ri-settings-5-line" style={{ fontSize: 18 }} />
              </span>
            }
          />
        </Tooltip>
      </Position>
    </Align>
  );
};

export default UserMenuContent;
