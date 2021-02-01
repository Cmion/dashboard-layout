import React from "react";
import { Layout, Progress, Menu } from "antd";

const { Sider } = Layout;
const Main = () => {
  return (
    <Sider
      theme={"light"}
      style={{
        overflow: "auto",
        height: "100vh",
        position: "fixed",
        left: 0,
      }}
      id={"Layout-sider"}
    >
      <div className="Sider-header">
        <span>Lender's Dashboard</span>
      </div>
      <div className="Sider-message">
        <span>
          Your profile is only{" "}
          <span
            style={{
              fontWeight: 600,
            }}
          >
            45%
          </span>{" "}
          complete,{" "}
          <span
            style={{
              fontWeight: 600,
            }}
          >
            Complete your profile{" "}
          </span>{" "}
          to rank in searches
        </span>
        <div>
          <Progress percent={45} status="active" showInfo={false} />
        </div>
      </div>
      <Menu
        theme="light"
        mode="inline"
        defaultSelectedKeys={["4"]}
        style={{ width: 300, border: 0 }}
      >
        <Menu.Item
          key="1"
          icon={
            <span className="anticon">
              <i className="ri-user-6-line" />
            </span>
          }
        >
          nav 1
        </Menu.Item>
        <Menu.Item
          key="4"
          icon={
            <span className="anticon">
              <i className="ri-bar-chart-line" />
            </span>
          }
        >
          nav 4
        </Menu.Item>
        <Menu.Item
          key="5"
          icon={
            <span className="anticon">
              <i className="ri-cloud-line" />
            </span>
          }
        >
          nav 5
        </Menu.Item>
        <Menu.Item
          key="7"
          icon={
            <span className="anticon">
              <i className="ri-team-line" />
            </span>
          }
        >
          nav 7
        </Menu.Item>
        <Menu.Item
          key="8"
          icon={
            <span className="anticon">
              <i className="ri-shopping-bag-line" />
            </span>
          }
        >
          nav 8
        </Menu.Item>
      </Menu>
    </Sider>
  );
};

export default Main;
