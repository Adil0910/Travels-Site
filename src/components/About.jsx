import React from 'react'
import '../styles/About.css'

function About() {
  return (
    <section className="about">
      <div className="about-container">

        <div className="about-image">
          <img className='image1' src="bike.jfif" alt="Travel" />
          <img className='image2' src="room.jfif" alt="Travel" />
          <img className='image3' src="/window.jfif" alt="Travel" />

        </div>

        <div className="about-content">

          <span className="about-tag">
            ABOUT OUR JOURNEY
          </span>

          <h2>
            Explore The World With Trusted Local Guides
          </h2>

          <p>
            We help travelers discover amazing destinations with experienced
            local guides. Our mission is to make every journey comfortable,
            affordable, and unforgettable. Whether you're looking for a peaceful
            getaway or an adventurous trip, we've got the perfect travel package
            for you.
          </p>

          <div className="about-services">

            <div className="service">
              <h4> Hotel Accommodation</h4>
              <p>Comfortable and premium stays for every traveler.</p>
            </div>

            <div className="service">
              <h4> Private Transportation</h4>
              <p>Safe pickup, drop, and local sightseeing transport.</p>
            </div>

            <div className="service">
              <h4> Local Tour Guide</h4>
              <p>Experienced guides who know every hidden destination.</p>
            </div>

            <div className="service">
              <h4> Meals Included</h4>
              <p>Breakfast and dinner included in selected packages.</p>
            </div>

            <div className="service">
              <h4> Safe & Secure Travel</h4>
              <p>Verified guides and transparent pricing.</p>
            </div>

            <div className="service">
              <h4> 24/7 Support</h4>
              <p>Our support team is always ready to help you.</p>
            </div>

          </div>

        </div>

      </div>
      <div className="stats">

  <div className="stat-card">
    <h3>10K+</h3>
    <p>Happy Travelers</p>
  </div>

  <div className="stat-card">
    <h3>500+</h3>
    <p>Verified Guides</p>
  </div>

  <div className="stat-card">
    <h3>100+</h3>
    <p>Destinations</p>
  </div>

  <div className="stat-card">
    <h3>4.9★</h3>
    <p>Average Rating</p>
  </div>

</div>
    </section>
  );
}

export default About;
