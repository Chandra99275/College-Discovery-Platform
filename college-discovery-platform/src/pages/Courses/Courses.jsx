import { useMemo, useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import "./Courses.css";

const courses = [
  {
    name: "Computer Science & Engineering",
    category: "Engineering",
    duration: "4 Years",
    level: "Undergraduate",
    colleges: "250+ Colleges",
    icon: "💻",
    description:
      "Build strong foundations in programming, software development, algorithms and modern computing technologies.",
  },
  {
    name: "Artificial Intelligence & Machine Learning",
    category: "Computer Science",
    duration: "4 Years",
    level: "Undergraduate",
    colleges: "180+ Colleges",
    icon: "🤖",
    description:
      "Learn AI, machine learning, deep learning, data analytics and intelligent systems.",
  },
  {
    name: "Information Technology",
    category: "Technology",
    duration: "4 Years",
    level: "Undergraduate",
    colleges: "200+ Colleges",
    icon: "🌐",
    description:
      "Explore software engineering, networking, databases, cloud computing and enterprise technologies.",
  },
  {
    name: "Master of Business Administration",
    category: "Management",
    duration: "2 Years",
    level: "Postgraduate",
    colleges: "300+ Colleges",
    icon: "📈",
    description:
      "Develop leadership, finance, marketing, strategy and business management skills.",
  },
  {
    name: "Bachelor of Medicine & Surgery",
    category: "Medical",
    duration: "5.5 Years",
    level: "Undergraduate",
    colleges: "150+ Colleges",
    icon: "🩺",
    description:
      "Prepare for a career in medicine through clinical training, medical sciences and patient care.",
  },
  {
    name: "Data Science",
    category: "Technology",
    duration: "4 Years",
    level: "Undergraduate",
    colleges: "120+ Colleges",
    icon: "📊",
    description:
      "Learn statistics, Python, data analytics, machine learning and data visualization.",
  },
  {
    name: "Cyber Security",
    category: "Computer Science",
    duration: "4 Years",
    level: "Undergraduate",
    colleges: "140+ Colleges",
    icon: "🔐",
    description:
      "Learn ethical hacking, network security, digital forensics, cryptography and cyber defense.",
  },
  {
    name: "Bachelor of Commerce",
    category: "Commerce",
    duration: "3 Years",
    level: "Undergraduate",
    colleges: "220+ Colleges",
    icon: "💼",
    description:
      "Build knowledge in accounting, finance, taxation, economics and business management.",
  },
];

function Courses() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All Categories");
  const [level, setLevel] = useState("All Levels");
  const [duration, setDuration] = useState("Any Duration");

  const filteredCourses = useMemo(() => {
    const searchTerm = search.trim().toLowerCase();

    return courses.filter((course) => {
      const matchesSearch =
        searchTerm === "" ||
        course.name.toLowerCase().includes(searchTerm) ||
        course.category.toLowerCase().includes(searchTerm) ||
        course.description.toLowerCase().includes(searchTerm);

      const matchesCategory =
        category === "All Categories" ||
        course.category === category;

      const matchesLevel =
        level === "All Levels" ||
        course.level === level;

      const matchesDuration =
        duration === "Any Duration" ||
        course.duration === duration ||
        (duration === "5+ Years" && course.duration.includes("5"));

      return (
        matchesSearch &&
        matchesCategory &&
        matchesLevel &&
        matchesDuration
      );
    });
  }, [search, category, level, duration]);

  const clearFilters = () => {
    setSearch("");
    setCategory("All Categories");
    setLevel("All Levels");
    setDuration("Any Duration");
  };

  return (
    <div className="courses-page">
      <Navbar />

      {/* ================= HERO ================= */}

      <section className="courses-hero">
        <div className="hero-overlay"></div>

        <div className="courses-hero-content">
          <span className="hero-badge">
            🎓 EXPLORE ACADEMIC PROGRAMS
          </span>

          <h1>
            Find the{" "}
            <span>Perfect Course</span>
            <br />
            for Your Future
          </h1>

          <p>
            Discover courses, compare programs and find the
            best colleges for your career goals.
          </p>

          {/* Search */}

          <div className="course-search">
            <span className="search-icon">🔍</span>

            <input
              type="text"
              placeholder="Search courses, technologies or careers..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />

            {search && (
              <button
                className="search-clear"
                onClick={() => setSearch("")}
                type="button"
              >
                ✕
              </button>
            )}

            <button className="search-button">
              Search
            </button>
          </div>

          {/* Quick Categories */}

          <div className="quick-categories">
            <span>Popular:</span>

            <button
              onClick={() => setCategory("Engineering")}
            >
              Engineering
            </button>

            <button
              onClick={() => setCategory("Computer Science")}
            >
              Computer Science
            </button>

            <button
              onClick={() => setCategory("Management")}
            >
              Management
            </button>

            <button
              onClick={() => setCategory("Medical")}
            >
              Medical
            </button>
          </div>
        </div>
      </section>

      {/* ================= MAIN ================= */}

      <main className="courses-content">

        {/* Sidebar */}

        <aside className="course-filters">

          <div className="filter-header">
            <div>
              <span className="filter-small">
                REFINE RESULTS
              </span>

              <h3>Filter Courses</h3>
            </div>

            <span className="filter-icon">⚙️</span>
          </div>

          {/* Category */}

          <div className="course-filter">
            <label>Category</label>

            <select
              value={category}
              onChange={(e) =>
                setCategory(e.target.value)
              }
            >
              <option>All Categories</option>
              <option>Engineering</option>
              <option>Computer Science</option>
              <option>Technology</option>
              <option>Management</option>
              <option>Medical</option>
              <option>Commerce</option>
            </select>
          </div>

          {/* Level */}

          <div className="course-filter">
            <label>Education Level</label>

            <select
              value={level}
              onChange={(e) =>
                setLevel(e.target.value)
              }
            >
              <option>All Levels</option>
              <option>Undergraduate</option>
              <option>Postgraduate</option>
            </select>
          </div>

          {/* Duration */}

          <div className="course-filter">
            <label>Duration</label>

            <select
              value={duration}
              onChange={(e) =>
                setDuration(e.target.value)
              }
            >
              <option>Any Duration</option>
              <option>2 Years</option>
              <option>3 Years</option>
              <option>4 Years</option>
              <option>5+ Years</option>
            </select>
          </div>

          {/* Active Filters */}

          {(category !== "All Categories" ||
            level !== "All Levels" ||
            duration !== "Any Duration") && (
            <div className="active-filters">

              <span>Active Filters</span>

              <div className="filter-tags">

                {category !== "All Categories" && (
                  <button
                    onClick={() =>
                      setCategory("All Categories")
                    }
                  >
                    {category} ✕
                  </button>
                )}

                {level !== "All Levels" && (
                  <button
                    onClick={() =>
                      setLevel("All Levels")
                    }
                  >
                    {level} ✕
                  </button>
                )}

                {duration !== "Any Duration" && (
                  <button
                    onClick={() =>
                      setDuration("Any Duration")
                    }
                  >
                    {duration} ✕
                  </button>
                )}

              </div>
            </div>
          )}

          <button
            className="course-clear"
            onClick={clearFilters}
            type="button"
          >
            Reset All Filters
          </button>
        </aside>

        {/* ================= RESULTS ================= */}

        <section className="course-results">

          <div className="course-results-header">

            <div>
              <span className="results-label">
                COURSE DIRECTORY
              </span>

              <h2>
                Explore Popular Courses
              </h2>

              <p>
                Find programs that match your interests
                and career ambitions.
              </p>
            </div>

            <div className="results-count">
              <strong>
                {filteredCourses.length}
              </strong>

              <span>
                {filteredCourses.length === 1
                  ? "Course"
                  : "Courses"}
              </span>
            </div>

          </div>

          {/* Course Grid */}

          {filteredCourses.length > 0 ? (
            <div className="courses-grid">

              {filteredCourses.map((course) => (
                <article
                  className="course-card"
                  key={course.name}
                >

                  {/* Top */}

                  <div className="course-card-top">

                    <div className="course-icon">
                      {course.icon}
                    </div>

                    <span className="course-category">
                      {course.category}
                    </span>

                  </div>

                  {/* Content */}

                  <h3>{course.name}</h3>

                  <p className="course-description">
                    {course.description}
                  </p>

                  {/* Details */}

                  <div className="course-details">

                    <div>
                      <span>⏱</span>
                      <div>
                        <small>Duration</small>
                        <strong>
                          {course.duration}
                        </strong>
                      </div>
                    </div>

                    <div>
                      <span>🎓</span>
                      <div>
                        <small>Level</small>
                        <strong>
                          {course.level}
                        </strong>
                      </div>
                    </div>

                    <div>
                      <span>🏫</span>
                      <div>
                        <small>Available</small>
                        <strong>
                          {course.colleges}
                        </strong>
                      </div>
                    </div>

                  </div>

                  {/* Button */}

                  <button className="course-view">
                    Explore Course
                    <span>→</span>
                  </button>

                </article>
              ))}

            </div>
          ) : (
            <div className="no-courses">

              <div className="no-course-icon">
                🔍
              </div>

              <h3>No Courses Found</h3>

              <p>
                We couldn't find any courses matching
                your search or filters.
              </p>

              <button
                onClick={clearFilters}
                type="button"
              >
                Clear Filters
              </button>

            </div>
          )}

        </section>
      </main>

      <Footer />
    </div>
  );
}

export default Courses;