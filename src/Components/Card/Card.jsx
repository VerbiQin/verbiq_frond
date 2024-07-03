import React, { useState } from 'react';
import { formatCreatedAt } from '../../constants/constants';
import './Card.css';
import Comments from '../Comments/Comments';

function Card({ notes }) {
    const [expandedIndex, setExpandedIndex] = useState(null);

    const toggleExpand = (index) => {
        setExpandedIndex(expandedIndex === index ? null : index);
    };
    
    return (
        <div className="container-fluid">
            {notes.map((note, index) => (
                <div key={index} className="col-12">
                    <div className="card mt-2">
                        <p className='postid'>Note ID: {note.id}</p>
                        <div className="card-body">
                            <pre className="note-text">
                                {expandedIndex === index ? note.content : note.content.slice(0, 100)}
                                {note.content.length > 100 && (
                                    <span className='readmore-btn' onClick={() => toggleExpand(index)}>
                                        {expandedIndex === index ? 'less' : '...more'}
                                    </span>
                                )}
                            </pre>
                            <div className="card-footer post-card">
                                <Comments noteId={note.id} />
                                <p className='d-inline p-2 card-post-date'>{formatCreatedAt(note.created_at)}</p>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Card;
