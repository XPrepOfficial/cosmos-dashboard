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
        dispatch(appActionCreators.appLogin(credentialResponse));
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
  const { isAuthenticated, user } = useSelector((state) => state?.appDetails);

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
          <div className="login-wrap">
            {user?.name ? user.name : ""}
            {user?.picture ? (
              <img className="user-img" src={user.picture} alt="" />
            ) : (
              <Avatar size="large" icon={<UserOutlined />} />
            )}
          </div>
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
