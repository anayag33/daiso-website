import React from 'react'
import '../styles/Navbar.css';
import Logo from '../assets/DaisoLogo.png';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { Link } from "react-router-dom";

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
        <Link to='/'>
          <img className='logo' src={Logo}/>
        </Link>
        <Link to='/'>
          <button className='about'>
            Home
          </button>
        </Link>
        <Link to='/explore'>
          <button className='about'>
            Shop
          </button>
        </Link>
        <button className='about'>
          About
        </button>
        <input className='searchbar' type="text" placeholder="Search" />
      </div>
    </div>
  )
}

export default Navbar
