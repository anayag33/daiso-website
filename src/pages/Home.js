import React from 'react';
import ItemCard from '../components/ItemCard';
import JumbotronImage from '../assets/home/Daiso-jumbotron.jpg';
import IntroImage from '../assets/home/Daiso-Intro.png';
import '../styles/Home.css';
import HomeGoods from '../assets/home/homegoods-home.png'
import Plushie from '../assets/home/plushie-home.png'
import Stationary from '../assets/home/stationary-home.png'
import { Link } from 'react-router-dom';
import Aisles from '../assets/home/aisles.png'



function Home() {
  return (
    <div className='home-container'>
      <img src={JumbotronImage} alt="jumbotron" className="jumbotron" />
      <img src={IntroImage} alt="intro" className="intro" />
      <div className="category-container">
        <h2>SHOP BY CONTAINER</h2>
        <div className="pink-line"></div>
        <div className="category-rectangles">
          <Link to="/explore" className="category-rectangle" >
            <img src={HomeGoods} className="goods" />
          </Link>
          <Link to="/plushies" className="category-rectangle">
          <img src={Plushie} className="goods" />
          </Link>
          <Link to="/explore" className="category-rectangle">
          <img src={Stationary} className="goods" />
          </Link>
        </div>
      </div>


      <div className="newsletter-container">
      <img src={Aisles} alt="intro" className="aisles" />
      </div>
    </div>
  );
}

export default Home;



