import { useSelector } from "react-redux";
import Header from "../Components/Header";
import Login from "../Components/Header/Login";

const Protected = ({ children }) => {
  const isAuthenticated = useSelector(
    (state) => state?.appDetails?.isAuthenticated
  );
  if (!isAuthenticated) {
    return (
      <>
        <Header />
        <Login />
      </>
    );
  }
  return (
    <>
      <Header />
      {children}
    </>
  );
};
export default Protected;
