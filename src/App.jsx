import { lazy, Suspense } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import { Spin } from "antd";
import Header from "./Components/Header";

const Dashbaord = lazy(() => import("./screens/Dashboard"));
const Journey = lazy(() => import("./screens/Journey"));

function App() {
  return (
    <Suspense
      fallback={
        <>
          <Header />
          <Spin
            style={{ position: "absolute", top: "50%", left: "50%" }}
            size="large"
          />
        </>
      }
    >
      <Header />
      <Routes>
        {/* <Route
            path="/login"
            element={
              <SemanticUIWrapper>
                <Login />
              </SemanticUIWrapper>
            }
          /> */}
        <Route path="/" element={<Navigate to="/journey" />} />
        <Route path="/journey" element={<Journey />} />
        <Route path="/dashboard/:id" element={<Dashbaord />} />
      </Routes>
    </Suspense>
  );
}
export default App;
