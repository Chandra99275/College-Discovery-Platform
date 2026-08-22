import { useMemo, useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import "./Scholarships.css";

const scholarships = [
  {
    id: 1,
    title: "National Scholarship Program",
    provider: "Government of India",
    amount: "₹50,000",
    amountValue: 50000,
    category: "Merit Based",
    eligibility: "Undergraduate Students",
    level: "Undergraduate",
    deadline: "30 September 2026",
  },
  {
    id: 2,
    title: "Central Sector Scholarship",
    provider: "Ministry of Education",
    amount: "₹20,000",
    amountValue: 20000,
    category: "Merit Based",
    eligibility: "UG Students",
    level: "Undergraduate",
    deadline: "15 October 2026",
  },
  {
    id: 3,
    title: "AICTE Pragati Scholarship",
    provider: "AICTE",
    amount: "₹50,000 / Year",
    amountValue: 50000,
    category: "Technical Education",
    eligibility: "Women Students",
    level: "Undergraduate",
    deadline: "31 October 2026",
  },
  {
    id: 4,
    title: "AICTE Saksham Scholarship",
    provider: "AICTE",
    amount: "₹50,000 / Year",
    amountValue: 50000,
    category: "Technical Education",
    eligibility: "Students with Disabilities",
    level: "Undergraduate",
    deadline: "31 October 2026",
  },
  {
    id: 5,
    title: "State Government Scholarship",
    provider: "Telangana Government",
    amount: "₹35,000",
    amountValue: 35000,
    category: "State Scholarship",
    eligibility: "Telangana Students",
    level: "Undergraduate",
    deadline: "30 November 2026",
  },
  {
    id: 6,
    title: "Merit Excellence Scholarship",
    provider: "Education Foundation",
    amount: "₹1,00,000",
    amountValue: 100000,
    category: "Merit Based",
    eligibility: "High Achieving Students",
    level: "Postgraduate",
    deadline: "15 December 2026",
  },
];

function Scholarships() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All Categories");
  const [level, setLevel] = useState("All Levels");
  const [amount, setAmount] = useState("Any Amount");

  const filteredScholarships = useMemo(() => {
    const searchTerm = search.trim().toLowerCase();

    return scholarships.filter((scholarship) => {
      const matchesSearch =
        searchTerm === "" ||
        scholarship.title.toLowerCase().includes(searchTerm) ||
        scholarship.provider.toLowerCase().includes(searchTerm) ||
        scholarship.category.toLowerCase().includes(searchTerm) ||
        scholarship.eligibility.toLowerCase().includes(searchTerm);

      const matchesCategory =
        category === "All Categories" ||
        scholarship.category === category;

      const matchesLevel =
        level === "All Levels" ||
        scholarship.level === level;

      let matchesAmount = true;

      if (amount === "Below ₹25,000") {
        matchesAmount = scholarship.amountValue < 25000;
      }

      if (amount === "₹25,000 - ₹50,000") {
        matchesAmount =
          scholarship.amountValue >= 25000 &&
          scholarship.amountValue <= 50000;
      }

      if (amount === "Above ₹50,000") {
        matchesAmount = scholarship.amountValue > 50000;
      }

      return (
        matchesSearch &&
        matchesCategory &&
        matchesLevel &&
        matchesAmount
      );
    });
  }, [search, category, level, amount]);

  const clearFilters = () => {
    setSearch("");
    setCategory("All Categories");
    setLevel("All Levels");
    setAmount("Any Amount");
  };

  const hasFilters =
    search !== "" ||
    category !== "All Categories" ||
    level !== "All Levels" ||
    amount !== "Any Amount";

  return (
    <div className="scholarships-page">
      <Navbar />

      {/* =========================================
          HERO SECTION
      ========================================= */}
      <section className="scholarships-hero">
        <div className="scholarships-hero-overlay"></div>

        <div className="scholarships-hero-content">
          <div className="hero-badge">
            <span>🎓</span>
            SCHOLARSHIP DISCOVERY
          </div>

          <h1>
            Fund Your
            <span> Education Journey</span>
          </h1>

          <p>
            Discover scholarships, financial aid and funding
            opportunities designed to help you achieve your
            academic goals.
          </p>

          <div className="scholarship-search">
            <span className="search-icon">🔍</span>

            <input
              type="text"
              placeholder="Search scholarships, providers or eligibility..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />

            {search && (
              <button
                className="search-clear"
                type="button"
                onClick={() => setSearch("")}
              >
                ✕
              </button>
            )}

            <button
              type="button"
              className="search-button"
            >
              Search
            </button>
          </div>

          <div className="hero-stats">
            <div className="hero-stat">
              <strong>500+</strong>
              <span>Scholarships</span>
            </div>

            <div className="hero-stat">
              <strong>₹10Cr+</strong>
              <span>Total Funding</span>
            </div>

            <div className="hero-stat">
              <strong>100+</strong>
              <span>Providers</span>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================
          MAIN CONTENT
      ========================================= */}
      <main className="scholarships-content">

        {/* =========================================
            FILTER SIDEBAR
        ========================================= */}
        <aside className="scholarship-filters">

          <div className="filter-header">
            <div>
              <span className="filter-icon">⚙️</span>
              <h3>Filter Scholarships</h3>
            </div>

            {hasFilters && (
              <button
                type="button"
                onClick={clearFilters}
                className="reset-link"
              >
                Reset
              </button>
            )}
          </div>

          <div className="filter-divider"></div>

          {/* Category */}
          <div className="scholarship-filter">
            <label htmlFor="category">
              Scholarship Category
            </label>

            <select
              id="category"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              <option>All Categories</option>
              <option>Merit Based</option>
              <option>Technical Education</option>
              <option>State Scholarship</option>
            </select>
          </div>

          {/* Level */}
          <div className="scholarship-filter">
            <label htmlFor="level">
              Education Level
            </label>

            <select
              id="level"
              value={level}
              onChange={(e) => setLevel(e.target.value)}
            >
              <option>All Levels</option>
              <option>Undergraduate</option>
              <option>Postgraduate</option>
              <option>Diploma</option>
            </select>
          </div>

          {/* Amount */}
          <div className="scholarship-filter">
            <label htmlFor="amount">
              Scholarship Amount
            </label>

            <select
              id="amount"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
            >
              <option>Any Amount</option>
              <option>Below ₹25,000</option>
              <option>₹25,000 - ₹50,000</option>
              <option>Above ₹50,000</option>
            </select>
          </div>

          <button
            type="button"
            className="clear-scholarship-filter"
            onClick={clearFilters}
          >
            Clear All Filters
          </button>

          {/* Sidebar Info */}
          <div className="filter-tip">
            <div className="tip-icon">💡</div>

            <div>
              <strong>Tip</strong>
              <p>
                Apply early to increase your chances of
                receiving financial support.
              </p>
            </div>
          </div>
        </aside>

        {/* =========================================
            RESULTS
        ========================================= */}
        <section className="scholarship-results">

          <div className="scholarship-results-header">

            <div>
              <span className="results-label">
                SCHOLARSHIP OPPORTUNITIES
              </span>

              <h2>
                Available Scholarships
              </h2>

              <p>
                Find financial opportunities that match
                your education and eligibility.
              </p>
            </div>

            <div className="results-count">
              <strong>
                {filteredScholarships.length}
              </strong>

              <span>
                {filteredScholarships.length === 1
                  ? "Scholarship"
                  : "Scholarships"}
              </span>
            </div>
          </div>

          {/* Active filters */}
          {hasFilters && (
            <div className="active-filters">
              <span>Active filters:</span>

              {search && (
                <button onClick={() => setSearch("")}>
                  Search: {search} ✕
                </button>
              )}

              {category !== "All Categories" && (
                <button onClick={() => setCategory("All Categories")}>
                  {category} ✕
                </button>
              )}

              {level !== "All Levels" && (
                <button onClick={() => setLevel("All Levels")}>
                  {level} ✕
                </button>
              )}

              {amount !== "Any Amount" && (
                <button onClick={() => setAmount("Any Amount")}>
                  {amount} ✕
                </button>
              )}
            </div>
          )}

          {/* Cards */}
          {filteredScholarships.length > 0 ? (
            <div className="scholarship-grid">

              {filteredScholarships.map((scholarship) => (
                <article
                  className="scholarship-card"
                  key={scholarship.id}
                >

                  {/* Top */}
                  <div className="scholarship-card-top">

                    <div className="scholarship-icon">
                      🎓
                    </div>

                    <span className="scholarship-category">
                      {scholarship.category}
                    </span>
                  </div>

                  {/* Title */}
                  <h3>
                    {scholarship.title}
                  </h3>

                  <p className="scholarship-provider">
                    <span>✓</span>
                    {scholarship.provider}
                  </p>

                  {/* Amount */}
                  <div className="scholarship-amount">
                    <span>Scholarship Amount</span>
                    <strong>{scholarship.amount}</strong>
                  </div>

                  {/* Info */}
                  <div className="scholarship-info">

                    <div className="info-item">
                      <div className="info-icon">
                        👨‍🎓
                      </div>

                      <div>
                        <span>Eligibility</span>
                        <strong>
                          {scholarship.eligibility}
                        </strong>
                      </div>
                    </div>

                    <div className="info-item">
                      <div className="info-icon">
                        📅
                      </div>

                      <div>
                        <span>Application Deadline</span>
                        <strong>
                          {scholarship.deadline}
                        </strong>
                      </div>
                    </div>

                  </div>

                  {/* Button */}
                  <button
                    type="button"
                    className="scholarship-view-button"
                  >
                    <span>View Scholarship</span>
                    <span className="arrow">→</span>
                  </button>

                </article>
              ))}

            </div>
          ) : (
            <div className="no-scholarships">

              <div className="no-scholarships-icon">
                🔍
              </div>

              <h3>
                No Scholarships Found
              </h3>

              <p>
                We couldn't find scholarships matching
                your selected filters.
              </p>

              <button
                type="button"
                onClick={clearFilters}
              >
                Reset Filters
              </button>

            </div>
          )}

        </section>
      </main>

      <Footer />
    </div>
  );
}

export default Scholarships;