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
import ViewModuleIcon from '@mui/icons-material/ViewModule';
import ReorderIcon from '@mui/icons-material/Reorder';
import '../styles/Explore.css';
import { Link } from "react-router-dom";

function Explore() {
  return (
    <div>
        <div className='containerTop'>
            <Link to='/plushies'>
                <CategoryCards text={"PLUSHIES"} image={PlushiesCover} to={'/plushies'}/>
            </Link>
            <CategoryCards text={"STATIONARY"} image={StationaryCover}/>
            <Link to='/snacks'>
                <CategoryCards text={"SNACKS"} image={SnacksCover} to={'/snacks'}/>
            </Link>
            <CategoryCards text={"BRANDS"} image={BrandsCover}/>
            <CategoryCards text={"HOME GOODS"} image={HomeGoodsCover}/>
        </div>
        <div className='horizontal'>
            <div className='L'>
                <p className='text'>Showing all 12 results</p>
            </div>
            <p className='text'>Views:</p>
            <button className='symbolButton'>
                <ViewModuleIcon />
            </button>
            <button className='symbolButton'>
                <ReorderIcon />
            </button>
            <div className='R'>
                <button className='greyButton'>Popularity</button>
                <button className='pinkButton'>Filter</button>
            </div>
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
