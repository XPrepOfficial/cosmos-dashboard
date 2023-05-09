import { useNavigate } from "react-router-dom";
import { DownOutlined } from "@ant-design/icons";
import { Dropdown, Space } from "antd";
import "./Header.css";

const items = [
  {
    label: "Sign Out",
    key: "0",
  },
];

const Header = () => {
  let navigate = useNavigate();
  return (
    <div className="header-container">
      <span className="text-24 cursor" onClick={() => navigate("journey")}>
        Journey
      </span>
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
    </div>
  );
};

export default Header;
