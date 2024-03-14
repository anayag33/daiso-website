import React from 'react'
import ChocolatePocky from '../assets/ChocolatePocky.png';
import BlueBearPlushie from '../assets/BlueBearPlushie.png';
import GreyOvenMitts from '../assets/GreyOvenMitts.jpg';
import RamuneSodaOrange from '../assets/RamuneSodaOrange.png';
import BlueBowls from '../assets/BlueBowls.png';
import RedAlarmClock from '../assets/RedAlarmClock.png';
import GreenDinoPlushie from '../assets/GreenDinosaurPlushie.png';
import ColoredMarkers from '../assets/ColoredMarkers.png';
import ItemCard from '../components/ItemCard';
import { Link } from "react-router-dom";
import '../styles/Favorites.css'



function Favorites() {
  return (
    <div>
      <h1 className='heading'>Favorites (8)</h1>
      <div className='containerBottom'>
            <Link to='/pockyitem'>
                <ItemCard image={ChocolatePocky} name={"Chocolate Pocky"} price={5} inStock={true} fav={true}/>
            </Link>
            <Link to='/bluebearplushieitem'>
                <ItemCard image={BlueBearPlushie} name={"Blue Bear Plushie"} price={3} inStock={false} fav={true}/>
            </Link>
            <ItemCard image={GreyOvenMitts} name={"Grey Oven Mitts"} price={5} inStock={true} fav={true}/>
            <Link to='/ramuneitem'>
                <ItemCard image={RamuneSodaOrange} name={"Ramune Orange Soda"} price={7} inStock={false} fav={true}/>
            </Link>
        </div>
        <div className='containerBottom'>
            <ItemCard image={BlueBowls} name={"Set of 4 Blue Bowls"} price={1} inStock={true} fav={true}/>
            <ItemCard image={RedAlarmClock} name={"Red Alarm Clock"} price={1} inStock={true} fav={true}/>
            <ItemCard image={GreenDinoPlushie} name={"Green Dinosaur Plushie"} price={3} inStock={true} fav={true}/>
            <ItemCard image={ColoredMarkers} name={"5 Colored Markers"} price={7} inStock={true} fav={true}/>
        </div>
    </div>
  )
}

export default Favorites
