import React from 'react'
import '../styles/Navbar.css';
import Logo from '../assets/DaisoLogo.png';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { Link } from "react-router-dom";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FavoriteIcon from '@mui/icons-material/Favorite';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SearchIcon from '@mui/icons-material/Search';

function Navbar() {
  return (
    <div className='/navbar-container'>
      <div className='navbarP'>
        <div className='arrow'>
          <LocationOnIcon />
        </div>/
        <Link to='/storelocator'>
          <button className='location'>
            Choose Location
            </button>
        </Link>
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
        <Link to='/about'>
          <button className='about'>
            About
          </button>
        </Link>
        <SearchIcon />
        <input className='searchbar' type="text" placeholder="" />
        <Link to='/favorites'>
          <div className='cart'>
            <FavoriteIcon />
          </div>
        </Link>
        <Link to='/signin'>
          <div className='cart'>
            <AccountCircleIcon />
          </div>
        </Link>
        <Link to='/cart'>
          <div className='cart'>
            <ShoppingCartIcon />
          </div>
        </Link>
      </div>
    </div>
  )
}

export default Navbar
