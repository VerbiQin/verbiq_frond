import React from 'react'
import Home from './Pages/Home/Home'
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Comingsoon from './Components/Comingsoon/Comingsoon';
import AboutUs from './Pages/Legal_Pages/AboutUs/AboutUs';
import ContactUs from './Pages/Legal_Pages/ContactUs/ContactUs';
import TermsAndConditions from './Pages/Legal_Pages/Terms And Conditions/TermsAndConditions';
import PrivacyPolicy from './Pages/Legal_Pages/Privacy Policy/PrivacyPolicy';
import Disclaimer from './Pages/Legal_Pages/Disclaimer/Disclaimer';
import CopyrightPolicy from './Pages/Legal_Pages/CopyrightPolicy/CopyrightPolicy';

function App() {

  return (

    <>
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
                {/* <Route path="/copyright_policy" element={<CopyrightPolicy/>} /> */}

                

              </Routes>
            </div>
          </div>
        </div>
      </BrowserRouter>
    </>
  )
}

export default App
