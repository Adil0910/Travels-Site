import React from 'react'
const Hero = React.lazy(() => import('../components/Hero'));
const Space = React.lazy(() => import('../components/Space'));
const About = React.lazy(() => import('../components/About'));
const Review = React.lazy(() => import('../components/Review'));
const ReviewsSection = React.lazy(() => import('../components/ReviewsSection'));
import '../styles/Home.css'
function Home() {
  return (
    <>
    <div>
        <Hero/>
         <Space/>
          <About/>
            <Review/>
            <ReviewsSection/>
    </div>
  
    </>
  )
}

export default Home