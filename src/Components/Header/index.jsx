import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Login from "./Login";
import "./Header.css";

const Header = (props) => {
  let navigate = useNavigate();
  const isAuthenticated = useSelector(
    (state) => state?.appDetails?.isAuthenticated
  );
  return (
    <div style={{ ...props.style }} className="header-container">
      <span className="text-24 cursor">
        {isAuthenticated ? props?.label : "DASHBOARD"}
      </span>
      <Login isButton />
    </div>
  );
};

export default Header;
