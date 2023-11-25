import React from 'react';

// import styles sheets for this component
import './searchbar.css';

const SearchBar = () => {
    return (
        <div className='t-searchbar-container'>
            <input type="text" placeholder='Search'  />
        </div>
    );
};

export default SearchBar;
