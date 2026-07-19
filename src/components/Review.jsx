import React from 'react'
import '../styles/Review.css'
import TravelCard from '../components/TravelCard'
function Review() {
  return (<>
    <div className="review">
      <div className="review-header">
      <h2 className="review-title">Popular Destinations</h2>
      <p className="review-text">Here are some reviews from our satisfied customers!</p>
       <div className="travel-cards">
      <TravelCard/>
    </div></div>
    </div>
   
</>  )
}

export default Review