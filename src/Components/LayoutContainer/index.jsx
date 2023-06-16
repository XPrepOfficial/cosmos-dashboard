import React, { useEffect, useState } from "react";
import "./styles.css";
import { Layout, Menu } from "antd";
import { TeamOutlined, StarOutlined } from "@ant-design/icons";
import WhiteLogo from "../../assets/whiteLogo.svg";
import { useDispatch } from "react-redux";
import { userActionCreators } from "../../actions/userActions";
import { useNavigate } from "react-router-dom";
import Header from "../Header";

const items = [
  { icon: TeamOutlined, label: "Users", path: "users" },
  { icon: StarOutlined, label: "Events", path: "events" },
].map((data, index) => ({
  key: String(index + 1),
  icon: React.createElement(data.icon),
  label: data.label,
  path: data.path,
}));
const { Sider } = Layout;

const LayoutContainer = (props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [headerText, setHeaderText] = useState("Users");

  useEffect(() => {
    dispatch(userActionCreators.fetchGraphCardsData());
  }, []);
  return (
    <Layout
      style={{
        minHeight: "100vh",
      }}
      hasSider
    >
      <Sider
        style={{
          overflow: "auto",
          height: "100vh",
          position: "fixed",
          left: 0,
          top: 0,
          bottom: 0,
        }}
      >
        <img src={WhiteLogo} />
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={["1"]}
          items={items}
          onClick={({ key }) => {
            navigate(`/${items[+key - 1]?.path}`);
            setHeaderText(items[+key - 1]?.label);
          }}
        />
      </Sider>
      <Layout
        className="site-layout"
        style={{
          marginLeft: 200,
          height: "100%",
        }}
      >
        <Header
          style={{
            background: "white",
          }}
          label={headerText}
        />
        {props.children}
      </Layout>
    </Layout>
  );
};

export default LayoutContainer;
