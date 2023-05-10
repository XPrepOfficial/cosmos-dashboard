import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Login from "./Login";
import "./Header.css";

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
      <Login isButton />
    </div>
  );
};

export default Header;
