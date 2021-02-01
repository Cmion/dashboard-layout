import "remixicon/fonts/remixicon.css";
import "../assets/css/ant-custom.css";
import "@voomsway/react-table/dist/index.css";
import "../assets/less/override.less";
import "./layout.less";
import { Layout } from "antd";
import Header from "./header";
import Menu from "./menu";
import Content from "./content";
import React from "react";

const Main = () => {
  return (
    <Layout className={"Layout"}>
      <Menu />
      <Header />
      <Content />
    </Layout>
  );
};

export default Main;
