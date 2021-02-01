import React, { FC, useState } from "react";
import { motion } from "framer-motion";
import ScrollBar from "react-perfect-scrollbar";
import { Badge, Button } from "antd";
import { Align, Padding, Position } from "@voomsway/react-table/dist";

interface NotificationContentProps {}

const NotificationContent: FC<NotificationContentProps> = () => {
  const [collapsed, setCollapsed] = useState<boolean>(true);
  const toggleCollapsed = (): void => {
    setCollapsed((prev: boolean) => !prev);
  };
  return (
    <motion.div
      initial={{ maxHeight: 400, height: 400, minHeight: 400 }}
      animate={{
        maxHeight: collapsed ? 400 : 700,
        height: collapsed ? 400 : 700,
      }}
      transition={{ ease: "easeIn", duration: 0.1 }}
      className={"Notification__Content "}
    >
      <Align alignCenter type={"column"}>
        <ScrollBar>
          {Array(5)
            .fill(0)
            .map((_, index: number, array: any) => {
              const unread = index % 2 === 0;
              return (
                <Padding
                  key={index}
                  vertical={5}
                  horizontal={16}
                  style={{
                    borderBottom:
                      index !== array.length - 1
                        ? "1px solid var(--border-color-split)"
                        : "none",
                  }}
                  className={"Notification__Item"}
                >
                  <Align type={"column"} justifyCenter>
                    <p
                      className={`Notification__Text ${
                        unread ? "Notification__Text__Unread" : ""
                      }`}
                    >
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Deleniti, laborum.
                    </p>
                    <p className={"Notification__Text__Time"}>30 minutes ago</p>
                  </Align>
                </Padding>
              );
            })}
        </ScrollBar>
      </Align>{" "}
      <Position
        type={"absolute"}
        bottom={0}
        left={0}
        className={"Notification__Footer"}
      >
        <Align alignCenter justifyCenter>
          <Button type={"link"} onClick={toggleCollapsed}>
            {collapsed ? "Expand" : "Shrink"}
          </Button>
        </Align>
      </Position>
    </motion.div>
  );
};

export default NotificationContent;
