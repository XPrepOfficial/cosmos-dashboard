import { useSelector } from "react-redux";
import Header from "../Components/Header";
import Login from "../Components/Header/Login";
import LayoutContainer from "../Components/LayoutContainer";

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
      {/* <Header style={{ marginLeft: 200 }} /> */}
      <LayoutContainer>{children}</LayoutContainer>
    </>
  );
};
export default Protected;
