import React from 'react'
import ItemCard from '../components/ItemCard'
import PlushiesCover  from '../assets/PlushiesCover.png'
import StationaryCover  from '../assets/StationaryCover.png'
import SnacksCover  from '../assets/SnacksCover.png'
import BrandsCover  from '../assets/BrandsCover.png'
import HomeGoodsCover  from '../assets/HomeGoodsCover.jpg'
import CategoryCards from '../components/CategoryCards';
import GreyOvenMitts from '../assets/GreyOvenMitts.jpg';
import BlueBowls from '../assets/BlueBowls.png';
import BlackBasket from '../assets/BlackBasket.png';
import GreenDinoPlushie from '../assets/GreenDinosaurPlushie.png';
import BlueBearPlushie from '../assets/BlueBearPlushie.png';
import ColoredMarkers from '../assets/ColoredMarkers.png';
import RedAlarmClock from '../assets/RedAlarmClock.png';
import ChocolateHelloPanda from '../assets/ChocolateHelloPanda.png';
import LobsterBearPlushie from '../assets/LobsterBearPlushie.png';
import FruitHiChew from '../assets/FruitHiChew.png';
import ChocolatePocky from '../assets/ChocolatePocky.png';
import RamuneSodaPlain from '../assets/RamuneSodaPlain.png';
import '../styles/Explore.css';

function Explore() {
  return (
    <div>
        <div className='containerTop'>
            <CategoryCards text={"PLUSHIES"} image={PlushiesCover}/>
            <CategoryCards text={"STATIONARY"} image={StationaryCover}/>
            <CategoryCards text={"SNACKS"} image={SnacksCover}/>
            <CategoryCards text={"BRANDS"} image={BrandsCover}/>
            <CategoryCards text={"HOME GOODS"} image={HomeGoodsCover}/>
        </div>
        <div className='containerBottom'>
            <ItemCard image={BlueBowls} name={"Set of 4 Blue Bowls"} price={1} inStock={true}/>
            <ItemCard image={BlueBearPlushie} name={"Blue Bear Plushie"} price={3} inStock={false}/>
            <ItemCard image={GreyOvenMitts} name={"Grey Oven Mitts"} price={5} inStock={true}/>
            <ItemCard image={ColoredMarkers} name={"5 Colored Markers"} price={7} inStock={true}/>
        </div>
        <div className='containerBottom'>
            <ItemCard image={RedAlarmClock} name={"Red Alarm Clock"} price={1} inStock={true}/>
            <ItemCard image={GreenDinoPlushie} name={"Green Dinosaur Plushie"} price={3} inStock={true}/>
            <ItemCard image={ChocolateHelloPanda} name={"Chocolate Hello Panda"} price={5} inStock={false}/>
            <ItemCard image={LobsterBearPlushie} name={"Lobster Bear Plushie"} price={7} inStock={true}/>
        </div>
        <div className='containerBottom'>
            <ItemCard image={BlackBasket} name={"Black Basket"} price={1} inStock={true}/>
            <ItemCard image={FruitHiChew} name={"Fruit Hi-Chew"} price={3} inStock={true}/>
            <ItemCard image={ChocolatePocky} name={"Chocolate Pocky"} price={5} inStock={true}/>
            <ItemCard image={RamuneSodaPlain} name={"Ramune Plain Soda"} price={7} inStock={false}/>
        </div>
    </div>
  )
}

export default Explore
