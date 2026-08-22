import { useParams, Link } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import { colleges } from "../../data/colleges";
import "./CollegeDetails.css";

function CollegeDetails() {
  const { id } = useParams();

  const college = colleges.find((item) => item.id === Number(id));

  if (!college) {
    return (
      <>
        <Navbar />
        <div className="not-found">
          <h1>College Not Found</h1>
          <Link to="/colleges">
            <button>← Back to Colleges</button>
          </Link>
        </div>
        <Footer />
      </>
    );
  }

  const galleryImages = [
    college.image,
    "https://images.unsplash.com/photo-1682854494783-bd851a8c4c62?auto=format&fit=crop&w=700&h=450&q=80",
    "https://images.unsplash.com/photo-1719159381981-1327b22aff9b?auto=format&fit=crop&w=700&h=450&q=80",
    "https://images.unsplash.com/photo-1622470190232-81df3782484b?auto=format&fit=crop&w=700&h=450&q=80",
    "https://images.unsplash.com/photo-1592280771190-3e2e4d571952?auto=format&fit=crop&w=700&h=450&q=80",
    "https://images.unsplash.com/photo-1641160616553-a9d21a846e49?auto=format&fit=crop&w=700&h=450&q=80",
  ];

  return (
    <div className="college-details-page">
      <Navbar />

      {/* HERO SECTION */}
      <section className="hero-section-details">
        <img src={college.image} alt={college.name} className="hero-banner" />
        <div className="hero-overlay"></div>

        <div className="hero-content-details">
          <span className="college-type">{college.category.toUpperCase()}</span>

          <h1>{college.name}</h1>

          <p>📍 {college.location}</p>

          <div className="rating-row">
            <span>⭐ {college.rating} Rating</span>
            <span>🎓 {college.courses}+ Courses</span>
            <span>🏛 Established {college.established}</span>
          </div>

          <div className="hero-buttons">
            <button className="apply-btn">Apply Now</button>
            <button className="save-btn">♡ Save College</button>
          </div>
        </div>
      </section>

      {/* QUICK STATS */}
      <section className="stats-section">
        <div className="stat-box">
          <h3>{college.established}</h3>
          <p>Established</p>
        </div>

        <div className="stat-box">
          <h3>{college.students}</h3>
          <p>Students</p>
        </div>

        <div className="stat-box">
          <h3>{college.campus}</h3>
          <p>Campus</p>
        </div>

        <div className="stat-box">
          <h3>{college.fees}</h3>
          <p>Annual Fees</p>
        </div>

        <div className="stat-box">
          <h3>{college.averagePackage}</h3>
          <p>Average Package</p>
        </div>

        <div className="stat-box">
          <h3>{college.highestPackage}</h3>
          <p>Highest Package</p>
        </div>
      </section>

      {/* ABOUT */}
      <section className="details-section">
        <h2>About {college.name}</h2>

        <p>{college.about}</p>

        <p>
          {college.name} is one of the top {college.category.toLowerCase()}{" "}
          colleges located in {college.location}. The institute provides quality
          education, experienced faculty members, industry collaborations,
          research opportunities, internship programs and excellent placement
          support for students.
        </p>

        <div className="about-grid">
          <div className="about-card">
            <h4>🏆 Rating</h4>
            <p>{college.rating} / 5</p>
          </div>

          <div className="about-card">
            <h4>🎓 Courses Offered</h4>
            <p>{college.courses}+ UG & PG Courses</p>
          </div>

          <div className="about-card">
            <h4>👨‍🎓 Students</h4>
            <p>{college.students}</p>
          </div>

          <div className="about-card">
            <h4>🌳 Campus Size</h4>
            <p>{college.campus}</p>
          </div>
        </div>
      </section>

      {/* CAMPUS GALLERY */}
      <section className="details-section">
        <h2>{college.name} Campus Gallery</h2>

        <div className="gallery-grid">
          {galleryImages.map((image, index) => (
            <img key={index} src={image} alt="Campus" />
          ))}
        </div>
      </section>

      {/* COURSES */}
      <section className="details-section">
        <h2>Courses & Fees</h2>

        <table className="course-table">
          <thead>
            <tr>
              <th>Course</th>
              <th>Duration</th>
              <th>Annual Fees</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>B.Tech Computer Science Engineering</td>
              <td>4 Years</td>
              <td>{college.fees}</td>
            </tr>

            <tr>
              <td>B.Tech Artificial Intelligence & ML</td>
              <td>4 Years</td>
              <td>{college.fees}</td>
            </tr>

            <tr>
              <td>B.Tech Information Technology</td>
              <td>4 Years</td>
              <td>{college.fees}</td>
            </tr>

            <tr>
              <td>B.Tech Electronics & Communication</td>
              <td>4 Years</td>
              <td>{college.fees}</td>
            </tr>

            <tr>
              <td>MBA</td>
              <td>2 Years</td>
              <td>₹90,000 / Year</td>
            </tr>

            <tr>
              <td>M.Tech</td>
              <td>2 Years</td>
              <td>₹80,000 / Year</td>
            </tr>
          </tbody>
        </table>
      </section>

      {/* PLACEMENTS */}
      <section className="details-section">
        <h2>Placement Highlights</h2>

        <div className="placement-grid">
          <div className="placement-card">
            <h3>{college.averagePackage}</h3>
            <p>Average Package</p>
          </div>

          <div className="placement-card">
            <h3>{college.highestPackage}</h3>
            <p>Highest Package</p>
          </div>

          <div className="placement-card">
            <h3>{college.placementRate}</h3>
            <p>Placement Rate</p>
          </div>

          <div className="placement-card">
            <h3>250+</h3>
            <p>Recruiters</p>
          </div>
        </div>

        <h3 className="sub-heading">Top Recruiters</h3>

        <div className="recruiters">
          {[
            "Google",
            "Microsoft",
            "Amazon",
            "TCS",
            "Infosys",
            "Accenture",
            "Capgemini",
            "Cognizant",
            "Deloitte",
            "Wipro",
          ].map((company) => (
            <div className="company" key={company}>
              {company}
            </div>
          ))}
        </div>
      </section>

      {/* FACILITIES */}
      <section className="details-section">
        <h2>Campus Facilities</h2>

        <div className="facility-grid">
          {[
            ["📚", "Central Library"],
            ["💻", "Computer Labs"],
            ["🏠", "Hostel Facility"],
            ["⚽", "Sports Complex"],
            ["📶", "High-Speed Wi-Fi"],
            ["🍴", "Cafeteria"],
            ["🚌", "Bus Transport"],
            ["🏥", "Medical Center"],
            ["🎭", "Auditorium"],
            ["🧪", "Research Labs"],
            ["📖", "Digital Library"],
            ["🏋️", "Gymnasium"],
          ].map((facility, index) => (
            <div className="facility-card" key={index}>
              <span>{facility[0]}</span>
              <p>{facility[1]}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ADMISSION */}
      <section className="details-section">
        <h2>Admission Process</h2>

        <div className="admission-box">
          <div className="admission-item">
            <h4>Entrance Exam</h4>
            <p>{college.entranceExam}</p>
          </div>

          <div className="admission-item">
            <h4>Eligibility</h4>
            <p>10+2 with PCM / PCB from a recognized board.</p>
          </div>

          <div className="admission-item">
            <h4>Application Mode</h4>
            <p>Online & Counselling</p>
          </div>

          <div className="admission-item">
            <h4>Admission Type</h4>
            <p>Entrance Exam + Merit Based</p>
          </div>
        </div>

        <ol className="timeline">
          <li>Register for {college.entranceExam} examination.</li>
          <li>Appear for the entrance examination.</li>
          <li>Participate in counselling.</li>
          <li>Select {college.name} during counselling.</li>
          <li>Document verification & fee payment.</li>
          <li>Admission confirmation.</li>
        </ol>
      </section>

      {/* REVIEWS */}
      <section className="details-section">
        <h2>Student Reviews</h2>

        <div className="review-card">
          <div className="review-header">
            <strong>Rahul Kumar</strong>
            <span>★★★★★</span>
          </div>

          <p>
            Excellent campus infrastructure and placement opportunities. Faculty
            members are supportive and laboratories are well equipped.
          </p>
        </div>

        <div className="review-card">
          <div className="review-header">
            <strong>Priya Reddy</strong>
            <span>★★★★☆</span>
          </div>

          <p>
            Good learning environment with technical clubs, hackathons,
            internships and industry exposure.
          </p>
        </div>

        <div className="review-card">
          <div className="review-header">
            <strong>Arjun Sharma</strong>
            <span>★★★★★</span>
          </div>

          <p>
            Placement training starts from second year. Many students get offers
            from top companies like TCS, Infosys and Amazon.
          </p>
        </div>
      </section>

      {/* CONTACT */}
      <section className="details-section">
        <h2>Contact Information</h2>

        <div className="contact-grid">
          <div className="contact-card">
            <h4>📍 Address</h4>
            <p>{college.location}</p>
          </div>

          <div className="contact-card">
            <h4>📞 Phone</h4>
            <p>+91 98765 43210</p>
          </div>

          <div className="contact-card">
            <h4>📧 Email</h4>
            <p>admissions@collegefinder.in</p>
          </div>

          <div className="contact-card">
            <h4>🌐 Website</h4>
            <p>www.collegefinder.in</p>
          </div>
        </div>
      </section>

      {/* SIMILAR COLLEGES */}
      <section className="details-section">
        <h2>Similar Colleges</h2>

        <div className="similar-grid">
          {colleges
            .filter(
              (item) =>
                item.category === college.category && item.id !== college.id
            )
            .slice(0, 3)
            .map((item) => (
              <div className="similar-card" key={item.id}>
                <img src={item.image} alt={item.name} />

                <div className="similar-content">
                  <h3>{item.name}</h3>

                  <p>{item.location}</p>

                  <span>⭐ {item.rating}</span>

                  <Link to={`/colleges/${item.id}`}>
                    <button>View Details</button>
                  </Link>
                </div>
              </div>
            ))}
        </div>
      </section>

      {/* BACK BUTTON */}
      <section className="details-section center-btn">
        <Link to="/colleges">
          <button className="back-btn">← Back to All Colleges</button>
        </Link>
      </section>

      <Footer />
    </div>
  );
}

export default CollegeDetails;