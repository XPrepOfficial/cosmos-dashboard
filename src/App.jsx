import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./Components/Header";

const Dashbaord = lazy(() => import("./screens/Dashboard"));
const Journeys = lazy(() => import("./screens/Journeys"));

function App() {
  return (
    <Suspense fallback={<div>Loading</div>} >
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
          <Route path="/" element={<Dashbaord />} />
          <Route path="/journeys" element={<Journeys />} />
        </Routes>
    </Suspense>
  );
}
export default App;
