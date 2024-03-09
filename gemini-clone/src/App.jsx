import { Suspense, lazy } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";

const LazySignIn = lazy(() => import("./pages/SignIn"));
const LazySignUp = lazy(() => import("./pages/SignUp"));
const LazyPricing = lazy(() => import("./pages/PricingPage"));
const LazySuccess = lazy(() => import("./pages/Success"));
const LazyCancel = lazy(() => import("./pages/Cancel"));

function App() {
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/sign-in"
          element={
            <Suspense
              fallback={<div className="flex items-center justify-center h-[90vh]">Loading...</div>}
            >
              <LazySignIn />
            </Suspense>
          }
        />
        <Route
          path="/sign-up"
          element={
            <Suspense
              fallback={<div className="flex items-center justify-center h-[90vh]">Loading...</div>}
            >
              <LazySignUp />
            </Suspense>
          }
        />

        <Route
          path="/pricing"
          element={
            <Suspense
              fallback={<div className="flex items-center justify-center h-[90vh]">Loading...</div>}
            >
              <LazyPricing />
            </Suspense>
          }
        />

      
        <Route
          path="/success"
          element={
            <Suspense
              fallback={<div className="flex items-center justify-center h-[90vh]">Loading...</div>}
            >
              <LazySuccess />
            </Suspense>
          }
        />
        <Route
          path="/cancel"
          element={
            <Suspense
              fallback={<div className="flex items-center justify-center h-[90vh]">Loading...</div>}
            >
              <LazyCancel />
            </Suspense>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
