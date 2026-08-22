import { useMemo, useState } from "react";
import { Link } from "react-router-dom";

import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import { colleges } from "../../data/colleges";

import "./UserDashboard.css";

function UserDashboard() {
  const [activeTab, setActiveTab] = useState("overview");

  // Demo user
  const [user, setUser] = useState({
    name: "Chandra Mahesh",
    email: "mahesh@example.com",
    phone: "+91 98765 43210",
    city: "Hyderabad",
    course: "B.Tech Computer Science",
    graduationYear: "2027",
  });

  // Demo saved colleges
  const [savedCollegeIds, setSavedCollegeIds] = useState([1, 3, 9]);

  const savedColleges = useMemo(() => {
    return colleges.filter((college) =>
      savedCollegeIds.includes(college.id)
    );
  }, [savedCollegeIds]);

  // Recommended colleges
  const recommendedColleges = useMemo(() => {
    return colleges
      .filter((college) => college.category === "Engineering")
      .slice(0, 6);
  }, []);

  // Remove saved college
  const removeSavedCollege = (collegeId) => {
    setSavedCollegeIds((previous) =>
      previous.filter((id) => id !== collegeId)
    );
  };

  // Add college to saved
  const saveCollege = (collegeId) => {
    setSavedCollegeIds((previous) => {
      if (previous.includes(collegeId)) {
        return previous;
      }

      return [...previous, collegeId];
    });
  };

  // Edit profile
  const handleProfileChange = (event) => {
    const { name, value } = event.target;

    setUser((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  return (
    <div className="dashboard-page">
      <Navbar />

      {/* =========================================
          DASHBOARD HEADER
      ========================================= */}

      <section className="dashboard-header">
        <div className="dashboard-header-content">
          <div>
            <span className="dashboard-badge">
              🎓 College Finder
            </span>

            <h1>Welcome back, {user.name}! 👋</h1>

            <p>
              Manage your profile, explore colleges and keep track
              of your saved colleges.
            </p>
          </div>

          <div className="profile-avatar">
            {user.name.charAt(0).toUpperCase()}
          </div>
        </div>
      </section>

      {/* =========================================
          DASHBOARD BODY
      ========================================= */}

      <main className="dashboard-container">

        {/* SIDEBAR */}

        <aside className="dashboard-sidebar">

          <div className="sidebar-profile">
            <div className="large-avatar">
              {user.name.charAt(0).toUpperCase()}
            </div>

            <h3>{user.name}</h3>

            <p>{user.email}</p>
          </div>

          <nav className="dashboard-menu">

            <button
              className={activeTab === "overview" ? "active" : ""}
              onClick={() => setActiveTab("overview")}
            >
              📊
              <span>Overview</span>
            </button>

            <button
              className={activeTab === "profile" ? "active" : ""}
              onClick={() => setActiveTab("profile")}
            >
              👤
              <span>My Profile</span>
            </button>

            <button
              className={activeTab === "colleges" ? "active" : ""}
              onClick={() => setActiveTab("colleges")}
            >
              🏫
              <span>My Colleges</span>
            </button>

            <button
              className={activeTab === "saved" ? "active" : ""}
              onClick={() => setActiveTab("saved")}
            >
              ❤️
              <span>Saved Colleges</span>

              <span className="menu-count">
                {savedColleges.length}
              </span>
            </button>

          </nav>

          <Link
            to="/colleges"
            className="explore-colleges-btn"
          >
            🔍 Explore Colleges
          </Link>

        </aside>

        {/* MAIN CONTENT */}

        <section className="dashboard-main">

          {/* =====================================
              OVERVIEW
          ===================================== */}

          {activeTab === "overview" && (
            <>
              <div className="section-heading">
                <div>
                  <h2>Dashboard Overview</h2>
                  <p>
                    Here's what's happening with your college search.
                  </p>
                </div>
              </div>

              {/* STATS */}

              <div className="dashboard-stats">

                <div className="dashboard-stat-card">
                  <div className="stat-icon blue">
                    🏫
                  </div>

                  <div>
                    <span>Colleges Explored</span>
                    <strong>40</strong>
                  </div>
                </div>

                <div className="dashboard-stat-card">
                  <div className="stat-icon red">
                    ❤️
                  </div>

                  <div>
                    <span>Saved Colleges</span>
                    <strong>{savedColleges.length}</strong>
                  </div>
                </div>

                <div className="dashboard-stat-card">
                  <div className="stat-icon green">
                    ⭐
                  </div>

                  <div>
                    <span>Avg. College Rating</span>
                    <strong>4.6</strong>
                  </div>
                </div>

                <div className="dashboard-stat-card">
                  <div className="stat-icon orange">
                    🎯
                  </div>

                  <div>
                    <span>Applications</span>
                    <strong>0</strong>
                  </div>
                </div>

              </div>

              {/* PROFILE SUMMARY */}

              <div className="dashboard-card profile-summary">

                <div className="card-header">
                  <div>
                    <h3>My Profile</h3>
                    <p>Your basic student information</p>
                  </div>

                  <button
                    onClick={() => setActiveTab("profile")}
                    className="edit-btn"
                  >
                    ✏️ Edit
                  </button>
                </div>

                <div className="profile-info-grid">

                  <div>
                    <span>Full Name</span>
                    <strong>{user.name}</strong>
                  </div>

                  <div>
                    <span>Email</span>
                    <strong>{user.email}</strong>
                  </div>

                  <div>
                    <span>Phone</span>
                    <strong>{user.phone}</strong>
                  </div>

                  <div>
                    <span>City</span>
                    <strong>{user.city}</strong>
                  </div>

                  <div>
                    <span>Interested Course</span>
                    <strong>{user.course}</strong>
                  </div>

                  <div>
                    <span>Graduation Year</span>
                    <strong>{user.graduationYear}</strong>
                  </div>

                </div>

              </div>

              {/* SAVED COLLEGES */}

              <div className="dashboard-card">

                <div className="card-header">

                  <div>
                    <h3>Saved Colleges</h3>
                    <p>Colleges you've bookmarked</p>
                  </div>

                  <button
                    className="view-all-btn"
                    onClick={() => setActiveTab("saved")}
                  >
                    View All →
                  </button>

                </div>

                {savedColleges.length > 0 ? (
                  <div className="mini-college-grid">

                    {savedColleges.slice(0, 3).map((college) => (
                      <SavedCollegeCard
                        key={college.id}
                        college={college}
                        removeSavedCollege={removeSavedCollege}
                      />
                    ))}

                  </div>
                ) : (
                  <EmptySavedState />
                )}

              </div>

              {/* RECOMMENDATIONS */}

              <div className="dashboard-card">

                <div className="card-header">

                  <div>
                    <h3>Recommended Colleges</h3>
                    <p>Colleges you may be interested in</p>
                  </div>

                  <Link
                    to="/colleges"
                    className="view-all-btn"
                  >
                    Explore All →
                  </Link>

                </div>

                <div className="mini-college-grid">

                  {recommendedColleges.slice(0, 3).map((college) => (
                    <RecommendedCollegeCard
                      key={college.id}
                      college={college}
                      savedCollegeIds={savedCollegeIds}
                      saveCollege={saveCollege}
                    />
                  ))}

                </div>

              </div>
            </>
          )}

          {/* =====================================
              PROFILE
          ===================================== */}

          {activeTab === "profile" && (
            <div className="dashboard-card profile-page">

              <div className="section-heading">
                <div>
                  <h2>My Profile</h2>
                  <p>Manage your personal information.</p>
                </div>
              </div>

              <div className="profile-edit-header">

                <div className="profile-edit-avatar">
                  {user.name.charAt(0).toUpperCase()}
                </div>

                <div>
                  <h3>{user.name}</h3>
                  <p>{user.email}</p>
                </div>

              </div>

              <div className="profile-form">

                <div className="form-group">
                  <label>Full Name</label>

                  <input
                    type="text"
                    name="name"
                    value={user.name}
                    onChange={handleProfileChange}
                  />
                </div>

                <div className="form-group">
                  <label>Email</label>

                  <input
                    type="email"
                    name="email"
                    value={user.email}
                    onChange={handleProfileChange}
                  />
                </div>

                <div className="form-group">
                  <label>Phone</label>

                  <input
                    type="text"
                    name="phone"
                    value={user.phone}
                    onChange={handleProfileChange}
                  />
                </div>

                <div className="form-group">
                  <label>City</label>

                  <input
                    type="text"
                    name="city"
                    value={user.city}
                    onChange={handleProfileChange}
                  />
                </div>

                <div className="form-group">
                  <label>Interested Course</label>

                  <input
                    type="text"
                    name="course"
                    value={user.course}
                    onChange={handleProfileChange}
                  />
                </div>

                <div className="form-group">
                  <label>Graduation Year</label>

                  <input
                    type="text"
                    name="graduationYear"
                    value={user.graduationYear}
                    onChange={handleProfileChange}
                  />
                </div>

              </div>

              <button className="save-profile-btn">
                Save Profile
              </button>

            </div>
          )}

          {/* =====================================
              MY COLLEGES
          ===================================== */}

          {activeTab === "colleges" && (
            <div className="dashboard-card">

              <div className="section-heading">
                <div>
                  <h2>My Colleges</h2>
                  <p>
                    Explore colleges available on College Finder.
                  </p>
                </div>
              </div>

              <div className="college-list">

                {colleges.slice(0, 10).map((college) => (
                  <CollegeListItem
                    key={college.id}
                    college={college}
                    savedCollegeIds={savedCollegeIds}
                    saveCollege={saveCollege}
                    removeSavedCollege={removeSavedCollege}
                  />
                ))}

              </div>

            </div>
          )}

          {/* =====================================
              SAVED COLLEGES
          ===================================== */}

          {activeTab === "saved" && (
            <div className="dashboard-card">

              <div className="section-heading">

                <div>
                  <h2>Saved Colleges ❤️</h2>

                  <p>
                    {savedColleges.length} colleges saved to your account.
                  </p>
                </div>

                <Link
                  to="/colleges"
                  className="explore-btn"
                >
                  + Add College
                </Link>

              </div>

              {savedColleges.length > 0 ? (
                <div className="saved-colleges-grid">

                  {savedColleges.map((college) => (
                    <SavedCollegeCard
                      key={college.id}
                      college={college}
                      removeSavedCollege={removeSavedCollege}
                    />
                  ))}

                </div>
              ) : (
                <EmptySavedState />
              )}

            </div>
          )}

        </section>
      </main>

      <Footer />
    </div>
  );
}


/* =====================================================
   SAVED COLLEGE CARD
===================================================== */

function SavedCollegeCard({
  college,
  removeSavedCollege,
}) {
  return (
    <article className="saved-college-card">

      <div className="saved-college-image">

        <img
          src={college.image}
          alt={college.name}
        />

        <button
          className="remove-save-btn"
          onClick={() => removeSavedCollege(college.id)}
          title="Remove from saved colleges"
        >
          ❤️
        </button>

      </div>

      <div className="saved-college-content">

        <span className="college-category">
          {college.category}
        </span>

        <h3>{college.name}</h3>

        <p className="college-location">
          📍 {college.location}
        </p>

        <div className="college-meta">

          <span>
            ⭐ {college.rating}
          </span>

          <span>
            📊 {college.placementRate}
          </span>

        </div>

        <div className="college-package">

          <span>Average Package</span>

          <strong>
            {college.averagePackage}
          </strong>

        </div>

        <Link
          to={`/colleges/${college.id}`}
          className="details-btn"
        >
          View Details
        </Link>

      </div>

    </article>
  );
}


/* =====================================================
   RECOMMENDED COLLEGE CARD
===================================================== */

function RecommendedCollegeCard({
  college,
  savedCollegeIds,
  saveCollege,
}) {
  const isSaved = savedCollegeIds.includes(college.id);

  return (
    <article className="saved-college-card">

      <div className="saved-college-image">

        <img
          src={college.image}
          alt={college.name}
        />

      </div>

      <div className="saved-college-content">

        <span className="college-category">
          {college.category}
        </span>

        <h3>{college.name}</h3>

        <p className="college-location">
          📍 {college.location}
        </p>

        <div className="college-meta">

          <span>
            ⭐ {college.rating}
          </span>

          <span>
            💰 {college.fees}
          </span>

        </div>

        <div className="recommend-actions">

          <Link
            to={`/colleges/${college.id}`}
            className="details-btn"
          >
            View Details
          </Link>

          <button
            className={`save-small-btn ${
              isSaved ? "saved" : ""
            }`}
            onClick={() => saveCollege(college.id)}
          >
            {isSaved ? "❤️ Saved" : "♡ Save"}
          </button>

        </div>

      </div>

    </article>
  );
}


/* =====================================================
   COLLEGE LIST ITEM
===================================================== */

function CollegeListItem({
  college,
  savedCollegeIds,
  saveCollege,
  removeSavedCollege,
}) {
  const isSaved = savedCollegeIds.includes(college.id);

  return (
    <div className="college-list-item">

      <img
        src={college.image}
        alt={college.name}
      />

      <div className="college-list-info">

        <span>{college.category}</span>

        <h3>{college.name}</h3>

        <p>
          📍 {college.location}
        </p>

        <div className="list-meta">
          ⭐ {college.rating}
          &nbsp; • &nbsp;
          📊 {college.placementRate}
          &nbsp; • &nbsp;
          💰 {college.fees}
        </div>

      </div>

      <div className="college-list-actions">

        <Link
          to={`/colleges/${college.id}`}
          className="details-btn"
        >
          Details
        </Link>

        <button
          className={`save-small-btn ${
            isSaved ? "saved" : ""
          }`}
          onClick={() =>
            isSaved
              ? removeSavedCollege(college.id)
              : saveCollege(college.id)
          }
        >
          {isSaved ? "❤️" : "♡"}
        </button>

      </div>

    </div>
  );
}


/* =====================================================
   EMPTY SAVED STATE
===================================================== */

function EmptySavedState() {
  return (
    <div className="empty-saved">

      <div className="empty-icon">
        ❤️
      </div>

      <h3>No Saved Colleges</h3>

      <p>
        You haven't saved any colleges yet.
        Start exploring colleges and save the ones
        you are interested in.
      </p>

      <Link
        to="/colleges"
        className="explore-btn"
      >
        Explore Colleges
      </Link>

    </div>
  );
}

export default UserDashboard;