import React from 'react'
import './AboutUs.css'
import { Link } from 'react-router-dom'

function AboutUs() {
  return (
    <>
      <div className="coatiner-fuild">
        <div className="row">
          <div className="col">
            <h1 className='page-header'>About Us</h1>
          </div>
        </div>

        <div className="row">
          <div className="col">
            <h4 className='section-header'>About VerbiQ</h4>
            <p className='section-body'>
              Welcome to VerbiQ, where anonymous expression meets community. We believe in the power of words to connect, inspire, and uplift without the barriers of identity or judgment. VerbiQ is more than just a platform; it's a space where you can freely share your thoughts, stories, and ideas with the world.
            </p>
          </div>
        </div>

        <div className="row">
          <div className="col">
            <h4 className='section-header'>Our Mission</h4>
            <p className='section-body'>
              At VerbiQ, our mission is to create a secure and inclusive environment where every voice matters. We empower individuals to share their authentic selves through anonymous notes, fostering a community built on respect and empathy.
            </p>
          </div>
        </div>

        <div className="row">
          <div className="col">
            <h4 className='section-header'>Why VerbiQ?</h4>
            <p className='section-body'>
              <ul>
                <li><strong>Anonymous Sharing: </strong>Express yourself without the need for authentication or fear of exposure. VerbiQ allows you to post anonymously, ensuring your voice is heard without compromising your privacy.</li>
                <li><strong>Freedom of Expression: </strong>Whether you're sharing personal reflections, creative musings, or messages of encouragement, VerbiQ provides a platform where you can speak freely and authentically.</li>
                <li><strong>Community Engagement: </strong> Discover notes from others who share similar interests or experiences. Engage with diverse perspectives and contribute to a supportive community of anonymous storytellers.</li>
              </ul>
            </p>
          </div>
        </div>

        <div className="row">
          <div className="col">
            <h4 className='section-header'>Our Commitment</h4>
            <p className='section-body'>
              VerbiQ is committed to maintaining a safe and respectful environment for all users. We prioritize transparency, ethical use of data, and adherence to legal standards. Our platform is designed to uphold user privacy while promoting open dialogue and expression.
            </p>
          </div>
        </div>

        <div className="row">
          <div className="col">
            <h4 className='section-header'>Join Us</h4>
            <p className='section-body'>
              Join VerbiQ today and be part of a community where your voice matters. Experience the freedom to share, connect, and inspire without boundaries. Together, we can create a world where every voice finds its place.
            </p>
          </div>
        </div>
        <div className="row">
          <div className='col'>
          <p className='section-body'> <strong>Contact Us: </strong>For inquiries or feedback, please reach out to us at <Link to="/contact_us">Contact Us</Link></p>
          </div>
        </div>
      </div>




    </>
  )
}

export default AboutUs