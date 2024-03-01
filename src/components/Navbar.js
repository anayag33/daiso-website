import React from 'react'
import '../styles/Navbar.css';
import Logo from '../assets/DaisoLogo.png';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

function Navbar() {
  return (
    <div>
      <div className='navbarP'>
        <div className='arrow'>
          <ArrowDropDownIcon />
        </div>
        <p className='location'> Choose Location</p>
      </div>
      <div className='navbarW'>
        <img className='logo' src={Logo}/>
        <p className='location'>Home</p>
        <p className='location'>About</p>
        <input className='searchbar' type="text" placeholder="Search" />
      </div>
    </div>
  )
}

export default Navbar
