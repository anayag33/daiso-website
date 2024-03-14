import React from 'react';
import JumbotronImage from '../assets/home/Daiso-jumbotron.jpg';
import IntroImage from '../assets/home/Daiso-Intro.png';
import '../styles/Home.css';
import HomeGoods from '../assets/home/homegoods-home.png'
import Plushie from '../assets/home/plushie-home.png'
import Stationary from '../assets/home/stationary-home.png'
import { Link } from 'react-router-dom';
import Aisles from '../assets/home/aisles.png'
import ItemCard from '../components/ItemCard';
import ChocolatePocky from '../assets/ChocolatePocky.png';
import RedAlarmClock from '../assets/RedAlarmClock.png';
import GreenDinoPlushie from '../assets/GreenDinosaurPlushie.png';
import ColoredMarkers from '../assets/ColoredMarkers.png';
import BlueBearPlushie from '../assets/BlueBearPlushie.png';


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
      <div className="newsletter-rectangle" >
      <p>Register to get exclusive offers and the latest on our products!</p>
            <br></br>
            <h1>Subscribe For Latest Newsletter</h1>

            <div className="subscribe-form">
            <input type="email" placeholder="Enter your email" />
            <button>Subscribe</button>
        </div>
            </div>
      </div>



      <div className="category-container">
        <h2>BESTSELLER PRODUCTS</h2>
        <div className="pink-line"></div>
        <div className="bestseller-rectangles">
          <Link to='/pockyitem'>
                <ItemCard image={ChocolatePocky} name={"Chocolate Pocky"} price={5} inStock={true}/>
            </Link>
            <ItemCard image={RedAlarmClock} name={"Red Alarm Clock"} price={1} inStock={true}/>
            <ItemCard image={GreenDinoPlushie} name={"Green Dinosaur Plushie"} price={3} inStock={true}/>
            <ItemCard image={ColoredMarkers} name={"5 Colored Markers"} price={7} inStock={true}/>
            <Link to='/bluebearplushieitem'>
                <ItemCard image={BlueBearPlushie} name={"Blue Bear Plushie"} price={3} inStock={false}/>
          </Link>
        </div>
    </div>
    </div>
    
  );
}

export default Home;



