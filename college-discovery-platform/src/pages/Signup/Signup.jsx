import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import "./Signup.css";

function Signup() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    terms: false,
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setError("");

    // Validate password
    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    // Validate terms
    if (!formData.terms) {
      setError("Please accept the Terms & Conditions.");
      return;
    }

    // Save user information locally
    const user = {
      firstName: formData.firstName,
      lastName: formData.lastName,
      email: formData.email,
    };

    localStorage.setItem("collegeFinderUser", JSON.stringify(user));

    // Save login state
    localStorage.setItem("isLoggedIn", "true");

    // Navigate to User Dashboard
    navigate("/userdashboard");
  };

  return (
    <div className="signup-page">
      <Navbar />

      <main className="auth-container">
        <div className="auth-card">

          {/* Header */}
          <div className="auth-header">
            <div className="auth-icon">🎓</div>

            <h1>Create Your Account</h1>

            <p>
              Join our college discovery platform and
              start exploring your future.
            </p>
          </div>

          {/* Error */}
          {error && (
            <div className="auth-error">
              {error}
            </div>
          )}

          {/* Signup Form */}
          <form
            className="auth-form"
            onSubmit={handleSubmit}
          >

            {/* First + Last Name */}
            <div className="form-row">

              <div className="form-group">
                <label>First Name</label>

                <input
                  type="text"
                  name="firstName"
                  placeholder="First name"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label>Last Name</label>

                <input
                  type="text"
                  name="lastName"
                  placeholder="Last name"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                />
              </div>

            </div>

            {/* Email */}
            <div className="form-group">
              <label>Email Address</label>

              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            {/* Password */}
            <div className="form-group">
              <label>Password</label>

              <input
                type="password"
                name="password"
                placeholder="Create a password"
                value={formData.password}
                onChange={handleChange}
                required
                minLength={6}
              />
            </div>

            {/* Confirm Password */}
            <div className="form-group">
              <label>Confirm Password</label>

              <input
                type="password"
                name="confirmPassword"
                placeholder="Confirm your password"
                value={formData.confirmPassword}
                onChange={handleChange}
                required
              />
            </div>

            {/* Terms */}
            <div className="terms-row">
              <label>

                <input
                  type="checkbox"
                  name="terms"
                  checked={formData.terms}
                  onChange={handleChange}
                />

                <span>
                  I agree to the{" "}
                  <a href="#terms">
                    Terms & Conditions
                  </a>{" "}
                  and{" "}
                  <a href="#privacy">
                    Privacy Policy
                  </a>
                </span>

              </label>
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="auth-button"
            >
              Create Account
            </button>

          </form>

          {/* Divider */}
          <div className="auth-divider">
            <span>OR</span>
          </div>

          {/* Google */}
          <div className="social-login">
            <button type="button">
              Continue with Google
            </button>
          </div>

          {/* Login */}
          <p className="auth-footer-text">
            Already have an account?{" "}

            <Link to="/login">
              Sign in
            </Link>
          </p>

        </div>
      </main>

      <Footer />
    </div>
  );
}

export default Signup;