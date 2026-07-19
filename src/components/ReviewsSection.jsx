import React, { useState, useEffect, useRef, useCallback } from "react";
import "../styles/ReviewsSection.css";

const REVIEWS = [
  {
    name: "Priya Sharma",
    trip: "Manali - Kasol trip",
    place: "Manali, Himachal Pradesh",
    avatar: "girl5.jfif",
    photo: "girl6.jfif",
    rating: 5,
    quote:
      "Poora trip itni achhe se plan tha ki humein kuch bhi sochna nahi pada. Hotel, gaadi, guide - sab time pe. Manali ke views abhi tak yaad hain!",
  },
  {
    name: "Rohan Mehta",
    trip: "Goa beach getaway",
    place: "Goa",
    avatar: "bike3.jfif",
    photo: "bike4.jfif",
    rating: 5,
    quote:
      "Family ke saath Goa gaye the, bachchon ko bhi bohot maza aaya. Beach resort ka selection perfect tha aur team ne har choti baat ka khyal rakha.",
  },
  {
    name: "Ananya Iyer",
    trip: "Kerala backwaters",
    place: "Alleppey, Kerala",
    avatar: "girl3.jfif",
    photo: "girl4.jfif",
    rating: 4,
    quote:
      "Houseboat stay ek sapna sach hone jaisa tha. Thoda delay hua pehle din, lekin baaki poora experience itna smooth tha ki wo bhool gaye.",
  },
  {
    name: "Vikram Singh",
    trip: "Ladakh road trip",
    place: "Leh - Ladakh",
    avatar: "bike.jfif",
    photo: "bike2.jfif",
    rating: 5,
    quote:
      "Pehli baar Ladakh gaya aur bilkul akela mehsoos nahi hua. Har pass, har stop pe support mila. Best travel decision of my life!",
  },
  {
    name: "Sneha Reddy",
    trip: "Rajasthan heritage tour",
    place: "Jaipur, Rajasthan",
    avatar: "girl2.jfif",
    photo: "girl1.jfif",
    rating: 5,
    quote:
      "Jaipur, Udaipur, Jodhpur - teeno shehar cover kiye ek hafte mein aur har jagah stay bilkul royal tha. Highly recommend karungi sabko!",
  },
];

const DURATION = 5500;
const TICK = 60;

function Stars({ rating }) {
  return (
    <div className="rv-stars" aria-label={`${rating} out of 5 stars`}>
      {[1, 2, 3, 4, 5].map((i) => (
        <svg
          key={i}
          viewBox="0 0 24 24"
          className={i <= rating ? "rv-star-fill" : "rv-star-empty"}
        >
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01z" />
        </svg>
      ))}
    </div>
  );
}

export default function ReviewsSection({ reviews = REVIEWS }) {
  const [current, setCurrent] = useState(0);
  const [progress, setProgress] = useState(0);
  const [paused, setPaused] = useState(false);
  const elapsedRef = useRef(0);

  const goTo = useCallback(
    (index) => {
      const next = ((index % reviews.length) + reviews.length) % reviews.length;
      setCurrent(next);
      setProgress(0);
      elapsedRef.current = 0;
    },
    [reviews.length]
  );

  useEffect(() => {
    if (paused) return;
    const interval = setInterval(() => {
      elapsedRef.current += TICK;
      const pct = Math.min(100, (elapsedRef.current / DURATION) * 100);
      setProgress(pct);
      if (elapsedRef.current >= DURATION) {
        elapsedRef.current = 0;
        setCurrent((c) => (c + 1) % reviews.length);
      }
    }, TICK);
    return () => clearInterval(interval);
  }, [paused, reviews.length]);

  const r = reviews[current];

  return (
    <section
      className="rv-section"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="rv-wrap">
        <div className="rv-eyebrow">Traveller stories</div>
        <h2 className="rv-title">Hamare travellers kya kehte hain</h2>
        <p className="rv-sub">
          Real trips, real memories — inhone hamare saath safar kiya
        </p>

        <div className="rv-stage">
          <div className="rv-card is-active" key={current}>
            <div className="rv-photo-wrap">
              <img className="rv-photo" src={r.photo} alt={r.place} />
              <div className="rv-photo-tag">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 22s7-6.5 7-12a7 7 0 10-14 0c0 5.5 7 12 7 12z" />
                  <circle cx="12" cy="10" r="2.5" />
                </svg>
                {r.place}
              </div>
            </div>

            <div className="rv-body">
              <div className="rv-top">
                <div className="rv-person">
                  <img className="rv-avatar" src={r.avatar} alt={r.name} />
                  <div>
                    <p className="rv-name">{r.name}</p>
                    <p className="rv-trip">{r.trip}</p>
                  </div>
                </div>
                <div className="rv-stamp">
                  <div className="rv-stamp-inner">
                    <span className="rv-stamp-rating">{r.rating.toFixed(1)}</span>
                    <span className="rv-stamp-label">rated</span>
                  </div>
                </div>
              </div>

              <Stars rating={r.rating} />

              <p className="rv-quote">{r.quote}</p>

              <div className="rv-progress-track">
                <div
                  className="rv-progress-bar"
                  style={{ width: `${progress}%` }}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="rv-controls">
          <button
            className="rv-arrow"
            aria-label="Previous review"
            onClick={() => goTo(current - 1)}
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>

          <div className="rv-dots">
            {reviews.map((_, i) => (
              <button
                key={i}
                className={`rv-dot${i === current ? " is-active" : ""}`}
                aria-label={`Go to review ${i + 1}`}
                onClick={() => goTo(i)}
              />
            ))}
          </div>

          <button
            className="rv-arrow"
            aria-label="Next review"
            onClick={() => goTo(current + 1)}
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
