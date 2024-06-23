import React, { useState } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import AddNote from '../PostNote/AddNote';  // Adjust the path as per your project structure
import { RiMenuLine } from "react-icons/ri";

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
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
                            {menuOpen && (
                                <div className="menu-items">
                                    <Link to="/comingsoon/About Us">About Us</Link>
                                    <Link to="/comingsoon/Contact Us">Contact Us</Link>
                                    <Link to="/comingsoon/Terms And Conditions">Terms and Conditions</Link>
                                    <Link to="/comingsoon/Privacy Policy">Privacy Policy</Link>
                                    <Link to="/comingsoon/Disclaimer">Disclaimer</Link>
                                    <Link to="/comingsoon/Copyright Policy">Copyright Policy</Link>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
