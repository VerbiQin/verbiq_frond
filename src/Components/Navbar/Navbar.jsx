import React, { useState } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import AddNote from '../PostNote/AddNote';
import { RiMenuLine } from "react-icons/ri";
import { FaRegCompass } from "react-icons/fa";

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [exploreActive, setExploreActive] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const toggleExplore = () => {
        setExploreActive(!exploreActive);
    };

    const closeMenu = () => {
        setMenuOpen(false);
    };

    return (
        <div className="container-fluid">
            <div className="row mt-2">
                <div className="col navbar-container">
                    <Link className="navbar-logo text-center" to="/">VerbiQ</Link>
                    <div className="navbar-menu">
                        <div className="navbar-item">
                            <div className={`icon-wrapper ${exploreActive ? 'active' : ''}`} onClick={toggleExplore}>
                                <span className='explore-title'>EXPLORE</span> <FaRegCompass />
                            </div>
                            <AddNote />
                            <RiMenuLine className="icon" onClick={toggleMenu} />
                            <div className={`menu-items ${menuOpen ? 'show' : ''}`}>
                                <Link to="/about_us" onClick={closeMenu}>About Us</Link>
                                <Link to="/contact_us" onClick={closeMenu}>Contact Us</Link>
                                <Link to="/terms_and_conditions" onClick={closeMenu}>Terms and Conditions</Link>
                                <Link to="/privacy_policy" onClick={closeMenu}>Privacy Policy</Link>
                                <Link to="/disclaimer" onClick={closeMenu}>Disclaimer</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
