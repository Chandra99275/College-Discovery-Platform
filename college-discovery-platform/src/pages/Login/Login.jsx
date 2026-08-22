import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

import "./Login.css";

function Login() {
  const navigate = useNavigate();

  // ==========================================
  // FORM STATE
  // ==========================================

  const [formData, setFormData] = useState({
    email: "",
    password: "",
    remember: false,
  });

  const [error, setError] = useState("");

  // ==========================================
  // HANDLE INPUT CHANGE
  // ==========================================

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));

    setError("");
  };

  // ==========================================
  // HANDLE LOGIN
  // ==========================================

  const handleSubmit = (e) => {
    e.preventDefault();

    setError("");

    // ==========================================
    // ADMIN CREDENTIALS
    // ==========================================

    const ADMIN_EMAIL = "admin@123";
    const ADMIN_PASSWORD = "admin";

    // ==========================================
    // VALIDATE EMAIL
    // ==========================================

    if (formData.email.trim() !== ADMIN_EMAIL) {
      setError("Invalid email address.");
      return;
    }

    // ==========================================
    // VALIDATE PASSWORD
    // ==========================================

    if (formData.password !== ADMIN_PASSWORD) {
      setError("Invalid password.");
      return;
    }

    // ==========================================
    // CREATE USER DATA
    // ==========================================

    const user = {
      firstName: "Admin",
      lastName: "User",
      email: ADMIN_EMAIL,
      role: "admin",
    };

    // ==========================================
    // SAVE LOGIN INFORMATION
    // ==========================================

    localStorage.setItem("isLoggedIn", "true");

    localStorage.setItem(
      "collegeFinderUser",
      JSON.stringify(user)
    );

    // ==========================================
    // REMEMBER ME
    // ==========================================

    if (formData.remember) {
      localStorage.setItem("rememberMe", "true");
    } else {
      localStorage.removeItem("rememberMe");
    }

    // ==========================================
    // NAVIGATE TO USER DASHBOARD
    // ==========================================

    navigate("/userdashboard");
  };

  // ==========================================
  // LOGIN PAGE UI
  // ==========================================

  return (
    <div className="login-page">

      {/* ========================================
          NAVBAR
      ======================================== */}

      <Navbar />

      {/* ========================================
          LOGIN CONTAINER
      ======================================== */}

      <main className="auth-container">

        <div className="auth-card">

          {/* ======================================
              HEADER
          ====================================== */}

          <div className="auth-header">

            <div className="auth-icon">
              🎓
            </div>

            <h1>
              Welcome Back
            </h1>

            <p>
              Sign in to continue exploring colleges,
              courses and scholarships.
            </p>

          </div>

          {/* ======================================
              ERROR MESSAGE
          ====================================== */}

          {error && (
            <div className="auth-error">
              ⚠️ {error}
            </div>
          )}

          {/* ======================================
              LOGIN FORM
          ====================================== */}

          <form
            className="auth-form"
            onSubmit={handleSubmit}
          >

            {/* ====================================
                EMAIL
            ==================================== */}

            <div className="form-group">

              <label htmlFor="email">
                Email Address
              </label>

              <input
                id="email"
                type="text"
                name="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
                autoComplete="username"
                required
              />

            </div>

            {/* ====================================
                PASSWORD
            ==================================== */}

            <div className="form-group">

              <div className="password-label">

                <label htmlFor="password">
                  Password
                </label>

                <a href="#forgot">
                  Forgot password?
                </a>

              </div>

              <input
                id="password"
                type="password"
                name="password"
                placeholder="Enter your password"
                value={formData.password}
                onChange={handleChange}
                autoComplete="current-password"
                required
              />

            </div>

            {/* ====================================
                REMEMBER ME
            ==================================== */}

            <div className="remember-row">

              <label>

                <input
                  type="checkbox"
                  name="remember"
                  checked={formData.remember}
                  onChange={handleChange}
                />

                <span>
                  Remember me
                </span>

              </label>

            </div>

            {/* ====================================
                LOGIN BUTTON
            ==================================== */}

            <button
              type="submit"
              className="auth-button"
            >
              Sign In
            </button>

          </form>

          {/* ======================================
              DIVIDER
          ====================================== */}

          <div className="auth-divider">
            <span>OR</span>
          </div>

          {/* ======================================
              GOOGLE LOGIN
          ====================================== */}

          <div className="social-login">

            <button
              type="button"
              onClick={() => {
                setError(
                  "Google login is not configured yet."
                );
              }}
            >
              <span>🔵</span>
              Continue with Google
            </button>

          </div>

          {/* ======================================
              SIGNUP LINK
          ====================================== */}

          <p className="auth-footer-text">

            Don't have an account?{" "}

            <Link to="/signup">
              Create an account
            </Link>

          </p>

        </div>

      </main>

      {/* ========================================
          FOOTER
      ======================================== */}

      <Footer />

    </div>
  );
}

export default Login;