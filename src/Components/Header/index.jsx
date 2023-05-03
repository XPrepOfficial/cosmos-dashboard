import { useNavigate } from "react-router-dom";
import Login from "../Login";
import "./Header.css";

const Header = () => {
  let navigate = useNavigate();
  return (
    <div className="header-container">
      <span className="text-24 cursor" onClick={() => navigate("journey")}>
        Journey
      </span>
      <Login />
    </div>
  );
};

export default Header;
