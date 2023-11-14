import React from 'react';
import PropTypes from 'prop-types';

import './searchbar.css';

const SearchBar = () => {
    return (
        <div className='t-searchbar-container'>
            <input type="text" placeholder='Search...'  />
        </div>
    );
};


SearchBar.propTypes = {

};


export default SearchBar;
