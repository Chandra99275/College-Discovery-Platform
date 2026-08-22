import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

// ======================================================
// COMPONENTS
// ======================================================

import Navbar from "./components/Navbar/Navbar";

// ======================================================
// PAGES
// ======================================================

import Home from "./pages/Home/Home";
import Colleges from "./pages/Colleges/Colleges";
import CollegeDetails from "./pages/CollegeDetails/CollegeDetails";
import Courses from "./pages/Courses/Courses";
import Scholarships from "./pages/Scholarships/Scholarships";
import Compare from "./pages/Compare/Compare";
import Login from "./pages/Login/Login";
import Signup from "./pages/Signup/Signup";
import UserDashboard from "./pages/userdashboard/UserDashboard";

// ======================================================
// APP
// ======================================================

function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* ==================================================
            MAIN PAGES
        ================================================== */}

        <Route
          path="/"
          element={<Home />}
        />

        <Route
          path="/colleges"
          element={<Colleges />}
        />

        <Route
          path="/colleges/:id"
          element={<CollegeDetails />}
        />

        <Route
          path="/courses"
          element={<Courses />}
        />

        <Route
          path="/scholarships"
          element={<Scholarships />}
        />

        <Route
          path="/compare"
          element={<Compare />}
        />

        {/* ==================================================
            AUTHENTICATION
        ================================================== */}

        <Route
          path="/login"
          element={<Login />}
        />

        <Route
          path="/signup"
          element={<Signup />}
        />

        {/* ==================================================
            USER DASHBOARD
        ================================================== */}

        <Route
          path="/userdashboard"
          element={<UserDashboard />}
        />

        {/* ==================================================
            FALLBACK
        ================================================== */}

        <Route
          path="*"
          element={
            <Navigate
              to="/"
              replace
            />
          }
        />

      </Routes>
    </BrowserRouter>
  );
}

export default App;