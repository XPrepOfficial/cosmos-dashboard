import { lazy, Suspense } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import { Spin } from "antd";
import Protected from "./ProtectedRoute";
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
      <Routes>
        <Route path="/" element={<Navigate to="/journey" />} />
        <Route
          path="/journey"
          element={
            <Protected>
              <Journey />
            </Protected>
          }
        />
        <Route
          path="/dashboard/:id"
          element={
            <Protected>
              <Dashbaord />
            </Protected>
          }
        />
        <Route path="*" element={<Navigate to="/journey" />} />
      </Routes>
    </Suspense>
  );
}
export default App;
