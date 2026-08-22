import { Link } from "react-router-dom";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-container">

        {/* =========================
            BRAND
        ========================= */}
        <div className="footer-brand">

          <Link to="/" className="footer-logo">
            <span>🎓</span>
            College<span>Finder</span>
          </Link>

          <p>
            Discover colleges, courses and scholarships
            to build your future with confidence.
          </p>

          <Link to="/colleges" className="footer-explore-btn">
            Explore Colleges →
          </Link>

        </div>


        {/* =========================
            EXPLORE
        ========================= */}
        <div className="footer-column">

          <h4>Explore</h4>

          <Link to="/colleges">
            Colleges
          </Link>

          <Link to="/courses">
            Courses
          </Link>

          <Link to="/scholarships">
            Scholarships
          </Link>

          <Link to="/compare">
            Compare Colleges
          </Link>

        </div>


        {/* =========================
            ACCOUNT
        ========================= */}
        <div className="footer-column">

          <h4>Account</h4>

          <Link to="/login">
            Login
          </Link>

          <Link to="/signup">
            Create Account
          </Link>

          <Link to="/dashboard">
            User Dashboard
          </Link>

          <Link to="/dashboard">
            Saved Colleges
          </Link>

        </div>


        {/* =========================
            COMPANY
        ========================= */}
        <div className="footer-column">

          <h4>Company</h4>

          <Link to="/about">
            About Us
          </Link>

          <Link to="/contact">
            Contact
          </Link>

          <Link to="/reviews">
            Reviews
          </Link>

          <Link to="/help">
            Help Center
          </Link>

        </div>


        {/* =========================
            LEGAL
        ========================= */}
        <div className="footer-column">

          <h4>Legal</h4>

          <Link to="/privacy">
            Privacy Policy
          </Link>

          <Link to="/terms">
            Terms & Conditions
          </Link>

          <Link to="/cookies">
            Cookie Policy
          </Link>

        </div>

      </div>


      {/* =========================
          BOTTOM
      ========================= */}
      <div className="footer-bottom">

        <p>
          © 2026 CollegeFinder. All rights reserved.
        </p>


        <div className="footer-socials">

          <a
            href="https://www.linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>

          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Instagram
          </a>

          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Twitter
          </a>

        </div>

      </div>

    </footer>
  );
}

export default Footer;