import React from 'react';
import PropTypes from 'prop-types';
import Logo from '../../components/pure/logo/Logo';
import SearchBar from '../../components/pure/searchbar/SearchBar';
// Import the styles for this component
import './nav.css';

import { SlSettings } from "react-icons/sl";
import { LuLayoutGrid } from "react-icons/lu";
import { generateAvatar } from '../../utils/avatarGenerator';
import { TbLayoutList } from "react-icons/tb";

import { NavLink } from 'react-router-dom';
// generate the avatar
const Nav = () => {
    return (
      <div className="t-navbar-container">
        {/* TODO: Here implement a badge to show the message to link to home */}
        <NavLink to="/home">
          <Logo />
        </NavLink>
        <div className="t-nav-searchbar">
          <SearchBar />
        </div>
        <div className="t-sidebar-right">
          <div className="t-config">
            <SlSettings />
          </div>
          <div className="t-view-mode">
            {/* TODO: switch with colum view mode & list mode, implements icons */}
            <LuLayoutGrid />
            {/* <TbLayoutList />  */}
          </div>
          <div className="t-avatar-box">
            <img src="" alt="avatar-icon" />
          </div>
        </div>
      </div>
    );
};


Nav.propTypes = {

};


export default Nav;
