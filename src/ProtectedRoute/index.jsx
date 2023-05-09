import { useSelector } from "react-redux";
import Header from "../Components/Header";

const Protected = ({ children }) => {
  const isAuthenticated = useSelector(
    (state) => state?.appDetails?.isAuthenticated
  );
  if (!isAuthenticated) {
    return <Header />;
  }
  return (
    <>
      <Header />
      {children}
    </>
  );
};
export default Protected;
