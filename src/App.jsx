import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./Components/Header";

const Dashbaord = lazy(() => import("./screens/Dashboard"));
const Journey = lazy(() => import("./screens/Journey"));

function App() {
  return (
    <Suspense fallback={<Header/>} >
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
          <Route path="/" element={<Journey />} />
          <Route path="/dashboard/:id" element={<Dashbaord />} />
        </Routes>
    </Suspense>
  );
}
export default App;
