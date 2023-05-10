import { GoogleLogin } from "@react-oauth/google";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { UserOutlined } from "@ant-design/icons";
import { Dropdown, Avatar } from "antd";
import { appActionCreators } from "../../../actions/appActions";
import "./Login.css";

const LoginJSX = () => {
  const dispatch = useDispatch();
  return (
    <GoogleLogin
      onSuccess={(credentialResponse) => {
        dispatch(appActionCreators.appLoginSuccess(credentialResponse));
        console.log(credentialResponse);
      }}
      onError={(err) => {
        dispatch(appActionCreators.appLoginError(err));
        console.log("Login Failed");
      }}
      useOneTap
    />
  );
};

const Login = ({ isButton = false }) => {
  const items = [
    {
      label: <div onClick={() => handleLogout()}>Sign Out</div>,
      key: "0",
    },
  ];
  const dispatch = useDispatch();
  const isAuthenticated = useSelector(
    (state) => state?.appDetails?.isAuthenticated
  );

  const handleLogout = () => {
    dispatch(appActionCreators.appLogout());
  };

  if (isButton) {
    if (!isAuthenticated) {
      return <LoginJSX />;
    }
    return (
      <Dropdown
        menu={{ items }}
        trigger={["click"]}
        overlayStyle={{ cursor: "pointer" }}
      >
        <div onClick={(e) => e.preventDefault()}>
          <Avatar size="large" icon={<UserOutlined />} />
        </div>
      </Dropdown>
    );
  }

  return (
    <div className="login-container">
      <div className="login-left" />
      <div className="login-right">
        <div className="text-24-light-blue">Login to Dashboard</div>
        <LoginJSX />
      </div>
    </div>
  );
};

export default Login;
