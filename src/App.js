import React from 'react'
import Home from './Pages/Home/Home'
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Comingsoon from './Components/Comingsoon/Comingsoon';

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
          <hr></hr>
          <div className="row">
            
            <div className="col">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/comingsoon/:pagename" element={<Comingsoon />} />
              </Routes>
            </div>
          </div>
        </div>
      </BrowserRouter>
    </>
  )
}

export default App
