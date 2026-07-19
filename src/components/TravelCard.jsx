import "../styles/TravelCard.css";

export default function TravelCard({
  onViewDetails,

  city = "Rishikesh",
  place = "Ratchawararam Temple",
  image = "Rishikesh.jfif",
  hoverImage = "rishikeshtxt.png",

  city2 = "Himachal Pradesh",
  place2 = "Beautiful Mountains",
  image2 = "himachal2.jfif",
  hoverImage2 = "himachaltxt.png",

  city3 = "Manali",
  place3 = "Snow Valley",
  image3 = "Manali.jfif",
  hoverImage3 = "manalitxt.jpeg",
}) {
  const cards = [
    {
      city,
      place,
      image,
      hoverImage,
    },
    {
      city: city2,
      place: place2,
      image: image2,
      hoverImage: hoverImage2,
    },
    {
      city: city3,
      place: place3,
      image: image3,
      hoverImage: hoverImage3,
    },
  ];

  return (
    <div className="tc-wrap">
      {cards.map((card, index) => (
        <div className="tc-card" key={index}>
          <div className="tc-header">
            <span className="tc-pin">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <path
                  d="M12 22s7-7.58 7-13a7 7 0 1 0-14 0c0 5.42 7 13 7 13Z"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinejoin="round"
                />
                <circle
                  cx="12"
                  cy="9"
                  r="2.5"
                  stroke="white"
                  strokeWidth="2"
                />
              </svg>
            </span>

            <h3 className="tc-city">{card.city}</h3>
          </div>

          <div className="tc-image-wrap">
            <img
              src={card.image}
              alt={card.place}
              className="tc-image default-img"
            />

            <img
              src={card.hoverImage}
              alt={card.place}
              className="tc-image hover-img"
            />
          </div>

          <p className="tc-place">{card.place}</p>

          <button className="tc-btn" onClick={onViewDetails}>
            View Details
          </button>
        </div>
      ))}
    </div>
  );
}