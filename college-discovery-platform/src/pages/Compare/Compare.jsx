import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import "./Compare.css";

const colleges = [
  {
    name: "MLR Institute of Technology",
    location: "Hyderabad",
    rating: "4.5 / 5",
    courses: "25+",
    fees: "₹1.20 Lakhs",
    placement: "₹6.5 LPA",
    students: "5,000+",
  },
  {
    name: "Vasavi College of Engineering",
    location: "Hyderabad",
    rating: "4.4 / 5",
    courses: "20+",
    fees: "₹1.10 Lakhs",
    placement: "₹7.0 LPA",
    students: "4,500+",
  },
];

function Compare() {
  return (
    <div className="compare-page">
      <Navbar />

      {/* Header */}
      <section className="compare-header">
        <span>COMPARE COLLEGES</span>

        <h1>Compare Colleges</h1>

        <p>
          Compare colleges side by side and make a smarter
          decision about your education.
        </p>
      </section>

      {/* Compare Content */}
      <main className="compare-content">

        {/* Select Colleges */}
        <section className="compare-selection">

          <div className="selection-title">
            <h2>Select Colleges</h2>

            <p>
              Choose colleges you want to compare.
            </p>
          </div>

          <div className="college-select-grid">

            <div className="college-select-card">

              <div className="select-icon">
                🎓
              </div>

              <div className="select-content">
                <label>College 1</label>

                <select>
                  <option>
                    MLR Institute of Technology
                  </option>

                  <option>
                    Vasavi College of Engineering
                  </option>

                  <option>
                    CVR College of Engineering
                  </option>
                </select>
              </div>

            </div>

            <div className="college-select-card">

              <div className="select-icon">
                🎓
              </div>

              <div className="select-content">
                <label>College 2</label>

                <select>
                  <option>
                    Vasavi College of Engineering
                  </option>

                  <option>
                    MLR Institute of Technology
                  </option>

                  <option>
                    Gokaraju Rangaraju Institute
                  </option>
                </select>
              </div>

            </div>

          </div>

          <button className="add-college-button">
            + Add Another College
          </button>

        </section>

        {/* Comparison */}
        <section className="comparison-section">

          <div className="comparison-heading">
            <div>
              <span>COMPARISON</span>
              <h2>College Comparison</h2>
            </div>

            <button className="clear-comparison">
              Clear All
            </button>
          </div>

          <div className="comparison-table-wrapper">

            <table className="comparison-table">

              <thead>
                <tr>
                  <th>Category</th>

                  {colleges.map((college) => (
                    <th key={college.name}>
                      <div className="table-college">

                        <div className="table-college-icon">
                          🎓
                        </div>

                        <strong>
                          {college.name}
                        </strong>

                        <span>
                          {college.location}
                        </span>

                      </div>
                    </th>
                  ))}
                </tr>
              </thead>

              <tbody>

                <tr>
                  <td>Rating</td>

                  {colleges.map((college) => (
                    <td key={college.name}>
                      <strong className="rating-value">
                        ⭐ {college.rating}
                      </strong>
                    </td>
                  ))}
                </tr>

                <tr>
                  <td>Courses</td>

                  {colleges.map((college) => (
                    <td key={college.name}>
                      {college.courses}
                    </td>
                  ))}
                </tr>

                <tr>
                  <td>Annual Fees</td>

                  {colleges.map((college) => (
                    <td key={college.name}>
                      {college.fees}
                    </td>
                  ))}
                </tr>

                <tr>
                  <td>Average Placement</td>

                  {colleges.map((college) => (
                    <td key={college.name}>
                      <strong className="placement-value">
                        {college.placement}
                      </strong>
                    </td>
                  ))}
                </tr>

                <tr>
                  <td>Students</td>

                  {colleges.map((college) => (
                    <td key={college.name}>
                      {college.students}
                    </td>
                  ))}
                </tr>

              </tbody>

            </table>

          </div>

        </section>

        {/* Decision Section */}
        <section className="comparison-summary">

          <div>
            <span>QUICK SUMMARY</span>

            <h2>
              Which college is right for you?
            </h2>

            <p>
              Compare fees, courses, ratings and placement
              information to choose the college that best
              matches your goals.
            </p>
          </div>

          <button>
            Explore More Colleges →
          </button>

        </section>

      </main>

      <Footer />
    </div>
  );
}

export default Compare;