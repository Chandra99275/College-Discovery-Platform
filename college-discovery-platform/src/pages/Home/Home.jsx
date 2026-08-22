import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import SearchBar from "../../components/SearchBar/SearchBar";
import "./Home.css";

const featuredColleges = [
  {
    id: 1,
    name: "Marri Laxman Reddy Institute of Technology",
    location: "Hyderabad, Telangana",
    rating: "4.5",
    image:
      "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 2,
    name: "Vasavi College of Engineering",
    location: "Hyderabad, Telangana",
    rating: "4.6",
    image:
      "https://th.bing.com/th/id/OIP.oPE5iFhpE0SPDMSnlUleVQHaFT?w=181&h=150&c=6&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
  },
  {
    id: 3,
    name: "CBIT Hyderabad",
    location: "Hyderabad, Telangana",
    rating: "4.7",
    image:
      "https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?auto=format&fit=crop&w=800&q=80",
  },
];

function Home() {
  return (
    <div className="home-page">
      <Navbar />

      {/* HERO SECTION */}
      <section className="hero-section">
        <div className="hero-overlay"></div>

        <img
          src="https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=1600&q=80"
          alt="College Campus"
          className="hero-image"
        />

        <div className="hero-content">
          <span className="hero-tag">🎓 INDIA'S COLLEGE DISCOVERY PLATFORM</span>

          <h1>
            Find Your Dream <span>College & Course</span>
          </h1>

          <p>
            Explore 500+ colleges, compare fees, placements, scholarships and
            student reviews to make the best career decision.
          </p>

          <SearchBar />

          <div className="hero-buttons">
            <Link to="/colleges">
              <button className="primary-btn">Explore Colleges</button>
            </Link>

            <Link to="/compare">
              <button className="secondary-btn">Compare Colleges</button>
            </Link>
          </div>

          <div className="hero-stats">
            <div>
              <h3>500+</h3>
              <p>Colleges</p>
            </div>

            <div>
              <h3>1200+</h3>
              <p>Courses</p>
            </div>

            <div>
              <h3>10K+</h3>
              <p>Reviews</p>
            </div>

            <div>
              <h3>250+</h3>
              <p>Scholarships</p>
            </div>
          </div>
        </div>
      </section>

      {/* CATEGORIES */}
      <section className="categories-section">
        <div className="section-heading">
          <span>EXPLORE BY STREAM</span>
          <h2>Popular Categories</h2>
        </div>

        <div className="category-grid">
          <Link to="/colleges" className="category-card engineering">
            ⚙️
            <h3>Engineering</h3>
            <p>Top Engineering Colleges</p>
          </Link>

          <Link to="/courses" className="category-card medical">
            🩺
            <h3>Medical</h3>
            <p>MBBS, BDS & More</p>
          </Link>

          <Link to="/courses" className="category-card management">
            📊
            <h3>MBA / Management</h3>
            <p>Business Schools</p>
          </Link>

          <Link to="/courses" className="category-card science">
            💻
            <h3>Computer Science</h3>
            <p>AI, Data Science, Cyber Security</p>
          </Link>
        </div>
      </section>

      {/* FEATURED COLLEGES */}
      <section className="colleges-section">
        <div className="section-heading">
          <span>TOP RATED COLLEGES</span>
          <h2>Featured Colleges</h2>
        </div>

        <div className="featured-grid">
          {featuredColleges.map((college) => (
            <div className="featured-card" key={college.id}>
              <img src={college.image} alt={college.name} />

              <div className="featured-content">
                <span className="rating">⭐ {college.rating}</span>

                <h3>{college.name}</h3>

                <p>📍 {college.location}</p>

                <Link to={`/colleges/${college.id}`}>
                  <button>View Details</button>
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="view-all-btn">
          <Link to="/colleges">
            <button className="primary-btn">View All Colleges</button>
          </Link>
        </div>
      </section>

      {/* WHY CHOOSE */}
      <section className="why-section">
        <div className="section-heading">
          <span>WHY CHOOSE US?</span>
          <h2>Everything You Need in One Platform</h2>
        </div>

        <div className="features-grid">
          <div className="feature-card">
            <h1>🔍</h1>
            <h3>Explore Colleges</h3>
            <p>Find colleges based on location, fees, placements and rankings.</p>
          </div>

          <div className="feature-card">
            <h1>⚖️</h1>
            <h3>Compare Colleges</h3>
            <p>Compare multiple colleges side by side with detailed insights.</p>
          </div>

          <div className="feature-card">
            <h1>🎓</h1>
            <h3>Scholarships</h3>
            <p>Discover scholarships based on eligibility and category.</p>
          </div>

          <div className="feature-card">
            <h1>💬</h1>
            <h3>Student Reviews</h3>
            <p>Read genuine reviews from thousands of students.</p>
          </div>
        </div>
      </section>

      {/* RECRUITERS */}
      <section className="recruiters-section">
        <div className="section-heading">
          <span>TOP RECRUITERS</span>
          <h2>Companies Hiring Students</h2>
        </div>

        <div className="recruiters-grid">
          {["Google", "Amazon", "Microsoft", "TCS", "Infosys", "Accenture", "Wipro", "Capgemini"].map((company) => (
            <div className="recruiter-box" key={company}>
              {company}
            </div>
          ))}
        </div>
      </section>

      {/* STUDENT REVIEWS */}
      <section className="review-section">
        <div className="section-heading">
          <span>STUDENT EXPERIENCES</span>
          <h2>What Students Say</h2>
        </div>

        <div className="review-grid">
          <div className="review-card">
            <h3>Rahul Kumar ⭐⭐⭐⭐⭐</h3>
            <p>
              CollegeFinder helped me compare colleges and choose the best CSE
              college based on placements and fees.
            </p>
          </div>

          <div className="review-card">
            <h3>Priya Reddy ⭐⭐⭐⭐☆</h3>
            <p>
              The scholarship section made it easy to find government and private
              scholarships in Telangana.
            </p>
          </div>

          <div className="review-card">
            <h3>Mahesh Goud ⭐⭐⭐⭐⭐</h3>
            <p>
              I liked the detailed placement statistics and student reviews. Very
              useful platform for admissions.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section">
        <h2>Start Your College Journey Today 🚀</h2>

        <p>
          Join thousands of students discovering colleges, scholarships and
          placements across India.
        </p>

        <div className="cta-buttons">
          <Link to="/signup">
            <button className="primary-btn">Create Account</button>
          </Link>

          <Link to="/login">
            <button className="secondary-btn">Login</button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default Home;