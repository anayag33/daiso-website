import React from 'react'
import { Link } from "react-router-dom";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import AboutInfoImage from '../assets/about-info.png';
import AboutUsImage from '../assets/about-us.png';
import '../styles/About.css';

function About() {
  return (
    <div>
      <div className='banner'>
            <p className='bannerText'>
                <div className='mainCard'>
                    <Link to='/'>
                        <button className='bannerButton'>Home</button> 
                    </Link>
                    <ArrowForwardIosIcon />
                  
                    <Link to='/about'>
                        <button className='bannerButton'>About</button> 
                    </Link>
                </div>
            </p>
        </div>

        <img src={AboutInfoImage} className="about-info" />

        <img src={AboutUsImage} className="about-us" />



    </div>
  )
}

export default About
