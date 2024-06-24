import React, { useState, useEffect } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import AddNote from '../PostNote/AddNote';  // Adjust the path as per your project structure
import { RiMenuLine } from "react-icons/ri";

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const menu = document.querySelector('.menu-items');
        if (menuOpen) {
            menu.classList.add('show');
        } else {
            menu.classList.remove('show');
        }
    }, [menuOpen]);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
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
                            <AddNote />
                            <RiMenuLine className="icon" onClick={toggleMenu} />
                            <div className={`menu-items ${menuOpen ? 'show' : ''}`}>
                                <Link to="/about_us" onClick={closeMenu}>About Us</Link>
                                <Link to="/contact_us" onClick={closeMenu}>Contact Us</Link>
                                <Link to="/terms_and_conditions" onClick={closeMenu}>Terms and Conditions</Link>
                                <Link to="/privacy_policy" onClick={closeMenu}>Privacy Policy</Link>
                                <Link to="/disclaimer" onClick={closeMenu}>Disclaimer</Link>
                                {/* <Link to="/copyright_policy" onClick={closeMenu}>Copyright Policy</Link> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
