import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { DownOutlined } from "@ant-design/icons";
import { Dropdown, Space } from "antd";
import Login from "./Login";
import "./Header.css";

const items = [
  {
    label: "Sign Out",
    key: "0",
  },
];

const Header = () => {
  let navigate = useNavigate();
  const isAuthenticated = useSelector(
    (state) => state?.appDetails?.isAuthenticated
  );
  return (
    <div className="header-container">
      <span className="text-24 cursor" onClick={() => navigate("journey")}>
        {isAuthenticated ? "JOURNEY" : "DASHBOARD"}
      </span>
      {isAuthenticated ? (
        <Dropdown
          menu={{ items }}
          trigger={["click"]}
          overlayStyle={{ cursor: "pointer" }}
        >
          <a onClick={(e) => e.preventDefault()}>
            <Space>
              User
              <DownOutlined />
            </Space>
          </a>
        </Dropdown>
      ) : (
        <Login isButton />
      )}
    </div>
  );
};

export default Header;
