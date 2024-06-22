import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Card from '../../Components/Card/Card';
import { Base_url } from '../../constants/constants'; // Corrected import path
import './Home.css'; // Make sure to create and import your CSS file for styling

function Home() {
    const [notes, setNotes] = useState([]);
    const [sortBy, setSortBy] = useState('recent');
    const [searchKey, setSearchKey] = useState('');

    useEffect(() => {
        fetchNotes(sortBy, searchKey);
    }, [sortBy, searchKey]);

    const fetchNotes = (sortBy, searchKey) => {
        let url = `${Base_url}/get_all`;

        // Construct query parameters based on sortBy and searchKey
        const params = {};
        if (sortBy) {
            params.sort = sortBy;
        }
        if (searchKey) {
            params.search = searchKey;
        }

        axios.get(url, { params })
            .then(response => {
                setNotes(response.data);
            })
            .catch(error => {
                console.error('Error fetching notes:', error);
            });
    };

    const handleSortChange = (type) => {
        setSortBy(type);
    };

    const handleSearchChange = (event) => {
        setSearchKey(event.target.value);
    };

    return (
        <div className='container'>
            <div className="row text-center">
                <div className="col">
                    <p className={`tab ${sortBy === 'random' ? 'active' : ''}`} onClick={() => handleSortChange('random')}>
                        RANDOM ORDER
                    </p>
                </div>
                <div className="col">
                    <p className={`tab ${sortBy === 'recent' ? 'active' : ''}`} onClick={() => handleSortChange('recent')}>
                        MOST RECENT
                    </p>
                </div>
                <div className="col">
                    <p className={`tab ${sortBy === 'oldest' ? 'active' : ''}`} onClick={() => handleSortChange('oldest')}>
                        OLDEST FIRST
                    </p>
                </div>

            </div>
            <div className="row">
                <div className="col">
                    <input
                        type="text"
                        className='form-control'
                        placeholder='Search key'
                        value={searchKey}
                        onChange={handleSearchChange}
                    />
                </div>
            </div>
            <div className='row'>
                <div className='col'>
                    <Card notes={notes} />
                </div>
            </div>
        </div>
    );
}

export default Home;
