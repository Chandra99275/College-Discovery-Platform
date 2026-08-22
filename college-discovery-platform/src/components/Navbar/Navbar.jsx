import { Link, NavLink, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import "./Navbar.css";

function Navbar() {
  const navigate = useNavigate();

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState("");

  // Check login state
  useEffect(() => {
    const loggedIn = localStorage.getItem("isLoggedIn");
    const storedUser = localStorage.getItem("user");

    if (loggedIn === "true") {
      setIsLoggedIn(true);

      if (storedUser) {
        try {
          const user = JSON.parse(storedUser);

          setUserName(
            user.firstName ||
            user.name ||
            "User"
          );
        } catch (error) {
          console.error("Error reading user data:", error);
          setUserName("User");
        }
      }
    }
  }, []);

  // Logout
  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("user");

    setIsLoggedIn(false);
    setUserName("");

    navigate("/");
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">

        {/* =========================
            LOGO
        ========================= */}
        <Link to="/" className="navbar-logo">

          <div className="logo-icon">
            🎓
          </div>

          <div className="logo-text">
            <h2>CollegeFinder</h2>
            <span>Discover Your Future</span>
          </div>

        </Link>


        {/* =========================
            NAVIGATION LINKS
        ========================= */}
        <div className="navbar-links">

          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              isActive
                ? "nav-item active"
                : "nav-item"
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/colleges"
            className={({ isActive }) =>
              isActive
                ? "nav-item active"
                : "nav-item"
            }
          >
            Colleges
          </NavLink>

          <NavLink
            to="/courses"
            className={({ isActive }) =>
              isActive
                ? "nav-item active"
                : "nav-item"
            }
          >
            Courses
          </NavLink>

          <NavLink
            to="/scholarships"
            className={({ isActive }) =>
              isActive
                ? "nav-item active"
                : "nav-item"
            }
          >
            Scholarships
          </NavLink>

          <NavLink
            to="/compare"
            className={({ isActive }) =>
              isActive
                ? "nav-item active"
                : "nav-item"
            }
          >
            Compare
          </NavLink>

        </div>


        {/* =========================
            RIGHT SIDE
        ========================= */}
        <div className="navbar-actions">

          {isLoggedIn ? (

            <>
              {/* Dashboard */}
              <Link to="/dashboard">
                <button className="dashboard-btn">
                  📊 Dashboard
                </button>
              </Link>

              {/* User */}
              <Link
                to="/dashboard"
                className="navbar-user"
              >
                <div className="user-avatar">
                  {userName
                    ? userName.charAt(0).toUpperCase()
                    : "U"}
                </div>

                <span>
                  {userName || "User"}
                </span>
              </Link>

              {/* Logout */}
              <button
                className="logout-btn"
                onClick={handleLogout}
              >
                Logout
              </button>
            </>

          ) : (

            <>
              {/* Login */}
              <Link to="/login">
                <button className="login-btn">
                  Login
                </button>
              </Link>

              {/* Signup */}
              <Link to="/signup">
                <button className="signup-btn">
                  Sign Up
                </button>
              </Link>
            </>

          )}

        </div>

      </div>
    </nav>
  );
}

export default Navbar;