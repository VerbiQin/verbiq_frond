import React from 'react';
import './ExploreEventCards.css';
import { Link } from 'react-router-dom';


function ExploreEventCards({ event }) {
    const IconComponent = event.event_icon;

    return (
        <div className='events'>
            <div className="container">
                <div className="row">
                    <div className="col mt-3">
                        <div className="card">
                            <div className="card-body">
                                <div className="top d-flex flex-row">
                                    <IconComponent className='Icon' size={32} />
                                    <h3 className='title'>{event.event_title}</h3>
                                </div>
                                <p className='event_discription'>{event.event_description}</p>
                                <p className='d-inline p-2 card-event-date'>{event.event_date}</p>
                                <div className="card-footer p-2">
                                    <Link to={`/comingsoon/${event.link}`}>
                                        <button className='event-btn'>Open Event</button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ExploreEventCards;
