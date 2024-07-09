import React, { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Pages/Home/Home'
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import Comingsoon from './Components/Comingsoon/Comingsoon';
import AboutUs from './Pages/Legal_Pages/AboutUs/AboutUs';
import ContactUs from './Pages/Legal_Pages/ContactUs/ContactUs';
import TermsAndConditions from './Pages/Legal_Pages/Terms And Conditions/TermsAndConditions';
import PrivacyPolicy from './Pages/Legal_Pages/Privacy Policy/PrivacyPolicy';
import Disclaimer from './Pages/Legal_Pages/Disclaimer/Disclaimer';
import Explore from './Pages/Explore/Explore';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate data fetching
    const fetchData = async () => {
      await new Promise(resolve => setTimeout(resolve, 0)); // 2 second delay
      setIsLoading(false);
    };

    fetchData();
  }, []);

  return (
    <>
      {isLoading ? (
        <div className="loading-container">
          <div className="loading-spinner"></div>
          <p>Loading...</p>
        </div>
      ) : (
        <BrowserRouter>
          <div className="container">
            <div className="row">
              <div className="col">
                <Navbar />
              </div>
            </div>
            <hr className='hr-nav'></hr>
            <div className="row">
              <div className="col">
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/comingsoon/:pagename" element={<Comingsoon />} />
                  <Route path="/about_us" element={<AboutUs/>} />
                  <Route path="/contact_us" element={<ContactUs/>} />
                  <Route path="/terms_and_conditions" element={<TermsAndConditions/>} />
                  <Route path="/privacy_policy" element={<PrivacyPolicy/>} />
                  <Route path="/disclaimer" element={<Disclaimer/>} />
                  <Route path="/explore" element={<Explore/>} />
                </Routes>
              </div>
            </div>
          </div>
        </BrowserRouter>
      )}
    </>
  )
}

export default App