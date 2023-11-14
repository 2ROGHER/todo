import React from 'react';
import PropTypes from 'prop-types';
import Logo from '../../components/pure/logo/Logo';
import SearchBar from '../../components/pure/searchbar/SearchBar';
// Import the styles for this component
import './nav.css';
import { generateAvatar } from '../../utils/avatarGenerator';
// generate the avatar
const Nav = () => {
    return (
      <div className="t-navbar-container">
        <Logo />
        <div className="t-sidebar-2">
          {/* <SearchBar /> TODO: implements the search bar component*/}
          <div className="t-avatar-box"><img src="" alt="avatar-icon" /></div>
        </div>
      </div>
    );
};


Nav.propTypes = {

};


export default Nav;
