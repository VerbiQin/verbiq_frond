import React from 'react';
import { useParams } from 'react-router-dom';
import './Comingsoon.css'; // Create Comingsoon.css file for styling

function Comingsoon() {
    let { pagename } = useParams();

    return (
        <div className="comingsoon-container">
            <div className="content">
                <center>
                    <h1>{pagename}</h1>
                    <h3>Coming Soon!</h3>
                    <p>We are working on this page. Please check back later.</p>
                </center>
            </div>
        </div>
    );
}

export default Comingsoon;
