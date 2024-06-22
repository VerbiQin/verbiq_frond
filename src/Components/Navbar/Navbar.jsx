import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import AddNote from '../PostNote/AddNote';  // Adjust the path as per your project structure

function Navbar() {
    return (
        <>
            <div className="container">
                <div className="row mt-2">
                    <div className="col">
                        <Link className="navi text-center" to="/">VerbiQ</Link>
                    </div>
                    <div className="col text-center">
                        <AddNote />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Navbar;
