import React from 'react'
import '../styles/Hero.css'
export default function Hero() {
  return (
<>
    <section className="hero">

      {/* Background Video */}
      <video
        className="hero-video"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src="/horse.mp4" type="video/mp4" />
      </video>

      {/* Overlay */}
      <div className="hero-overlay"></div>

      {/* Content */}
      <div className="hero-content">

        <h1>
          Find the Perfect Guide for<br/>Your Next Adventure
        </h1>

        <p>
Choose from hundreds of verified travel guides, compare packages, and enjoy personalized trips across India.        </p>

        <div className="hero-buttons">

          <button className="primary-btn">
           Find a Local Guide
          </button>

        </div>

      </div>

    </section>
  


</>

  )
}
