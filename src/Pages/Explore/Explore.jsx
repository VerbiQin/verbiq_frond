import React, { useState } from 'react';
import ParticleBackground from '../../Components/ParticleBackground/ParticleBackground';
import ExploreEventCards from '../../Components/Card/ExploreEventCards/ExploreEventCards';
import { GiAndromedaChain } from "react-icons/gi";
import { RiRobot3Line } from "react-icons/ri";

function Explore() {
    const [Events, setEvents] = useState([
        {
            event_title: "Chain Story",
            event_description: "Join us for an exciting collaborative storytelling experience where participants contribute to a shared narrative, creating a unique and engaging story together. This event is perfect for writers, creatives, and anyone who loves a good tale.",
            event_date: "7/2/2024, 11:28:55 PM",
            link:"Chain Story",
            event_icon: GiAndromedaChain,
        },
        {
            event_title: "The Future of AI",
            event_description: "Explore the latest advancements in artificial intelligence.",
            event_date: "8/15/2024, 3:00:00 PM",
            link:"Tech Talk: The Future of AI",
            event_icon: RiRobot3Line,
        },
    ]);

    return (
        <>
            <ParticleBackground />
            <div className="events-container">
                {Events.map((event, index) => (
                    <ExploreEventCards key={index} event={event} />
                ))}
            </div>
        </>
    );
}

export default Explore;
