import React, { useState } from 'react';
import './AddNote.css';
import axios from 'axios';
import { Base_url, RelaodPage } from '../../constants/constants';

function AddNote() {
    const [newNote, setNewNote] = useState('');
    const [charCount, setCharCount] = useState(0);
    const [errorMessage, setErrorMessage] = useState('');
    const [countDisplayStyle, setCountDisplayStyle] = useState({ color: 'var(--text)' });

    const handleChange = (event) => {
        const { value } = event.target;
        setNewNote(value);
        setCharCount(value.length);
        if (value.length > 400) {
            setErrorMessage('Note length should be within 400 characters.');
            setCountDisplayStyle({ color: '#DC3545' });
        } else {
            setErrorMessage('');
            setCountDisplayStyle({ color: 'var(--text)' });
        }
    };

    const handleSubmit = () => {
        if (charCount > 400) {
            setErrorMessage('Note length should be within 400 characters.');
        } else {
            axios.post(`${Base_url}/postnote`, { content: newNote })
                .then(response => {
                    console.log('Note saved successfully:', response.data);
                    RelaodPage();
                })
                .catch(error => {
                    console.log('Error saving note:', error);
                });
        }
    };

    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    <div className="col">
                        <button type="button" className='btn textarea' placeholder='post note' data-toggle="modal" data-target="#exampleModal">POST NOTE</button>
                    </div>
                </div>
            </div>

            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered modal-lg">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Post Note</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <div className="col">
                                <p className="note-permanence-message">
                                    <strong>*Note:</strong> Once you upload content on VerbiQ, it cannot be edited, deleted, or tracked by the user who posted it. Please ensure that your posts comply with our guidelines before uploading.
                                </p>
                                <textarea value={newNote} onChange={handleChange} name="notes" className='Note-post-input' placeholder='Enter the content'></textarea>

                            </div>
                        </div>
                        <div className="modal-footer">
                            <div className="container-fluid">
                                <div className="row">
                                    <div className="col d-flex justify-content-start">
                                        <p style={countDisplayStyle}><b>{charCount}/400</b></p>
                                        {errorMessage && <p className="error-message ms-3">{errorMessage}</p>}
                                    </div>
                                    
                                    <div className="col d-flex justify-content-end">
                                        <button type="button" className="btn btn-card" onClick={handleSubmit}>Post</button>
                                    </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
        </>
    );
}

export default AddNote;
