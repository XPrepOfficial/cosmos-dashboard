import { DownOutlined } from "@ant-design/icons";
import { Dropdown, Space } from "antd";
import "./Login.css";

const Login = () => {
  const items = [
    {
      label: "Sign Out",
      key: "0",
    },
  ];

  return (
    <Dropdown
      menu={{ items }}
      trigger={["click"]}
      overlayStyle={{ cursor: "pointer" }}
    >
      <a onClick={(e) => e.preventDefault()}>
        <Space>
          Siddharth Jain
          <DownOutlined />
        </Space>
      </a>
    </Dropdown>
  );
};

export default Login;
