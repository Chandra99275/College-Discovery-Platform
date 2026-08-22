import "./CollegeCard.css";

function CollegeCard({
  name,
  location,
  rating,
  category,
  image,
}) {
  return (
    <div className="college-card">

      <div className="college-card-image">
        {image ? (
          <img src={image} alt={name} />
        ) : (
          <span>🎓</span>
        )}
      </div>

      <div className="college-card-content">

        <div className="college-card-rating">
          ★ {rating}
        </div>

        <h3>{name}</h3>

        <p className="college-location">
          📍 {location}
        </p>

        <div className="college-card-footer">
          <span className="college-category">
            {category}
          </span>

          <button className="college-view-button">
            View College
          </button>
        </div>

      </div>

    </div>
  );
}

export default CollegeCard;