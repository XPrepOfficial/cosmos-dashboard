import { GoogleLogin } from "@react-oauth/google";
import "./Login.css";

const LoginJSX = () => (
  <GoogleLogin
    onSuccess={(credentialResponse) => {
      console.log(credentialResponse);
    }}
    onError={() => {
      console.log("Login Failed");
    }}
    useOneTap
  />
);

const Login = ({ isButton = false }) => {
  if (isButton) {
    return <LoginJSX />;
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
