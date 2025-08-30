import React from 'react'
import "./Navbar.css"
import tmhLogo from '../../assets/TMH_LOGO.png'
import searchIcon from '../../assets/searchIcon.svg'
import bellIcon from '../../assets/bellIcon.svg'

import userIcon from '../../assets/userIcon.svg'
import dropDownIcon from '../../assets/dropDown.svg'


const Navbar = () => {
  return (
    <div className='navbar'>
      <div className="navbarLeft">
        <img src={tmhLogo} alt="logo" />
        <ul>
          <li>Home</li>
          <li>Movies</li>
          <li>TV shows</li>
          <li>Anime</li>
          <li>Mangas</li>
          <li>My List</li>
        </ul>
      </div>

      <div className="navbarRight">
        <img id='searchIcon' src={searchIcon} className='icons' alt="searchIcon" />
        {/* <p>Children</p> */}
        <img id='bellIcon' src={bellIcon} className='icons' alt="searchIcon" />

        <div className="navbarProfile">
          <img id='userIcon' src={userIcon} className='profile' alt="userImg" />

          <img id='dropdownIcon' src={dropDownIcon} alt="userDropdown" />

          <div className="dropdown">
            <p>Sign Out</p>
            
          </div>
        </div>
        
      </div>
    </div>
  )
}

export default Navbar