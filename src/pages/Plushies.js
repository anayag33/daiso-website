import React from 'react'
import ItemCard from '../components/ItemCard'
import PlushiesCoverLong  from '../assets/PlushiesCoverLong.jpg'
import YellowBananaPlushie  from '../assets/YellowBananaPlushie.png'
import YellowBearPlushie  from '../assets/YellowBearPlushie.png'
import SmallBearPlushie  from '../assets/SmallBearPlushie.png'
import GreyCatPlushie  from '../assets/GreyCatPlushie.png'
import HamburgerDogPlushie from '../assets/HamburgerDogPlushie.png';
import PinkPigPlushie from '../assets/PinkPigPlushie.png';
import CorgiPlushie from '../assets/CorgiPlushie.png';
import MonsterPlushie from '../assets/MonsterPlushie.png';
import GreenDinoPlushie from '../assets/GreenDinosaurPlushie.png';
import BlueBearPlushie from '../assets/BlueBearPlushie.png';
import LimeBearPlushie from '../assets/LimeBearPlushie.png';
import LobsterBearPlushie from '../assets/LobsterBearPlushie.png';
import '../styles/Explore.css';
import { Link } from "react-router-dom";
import ViewModuleIcon from '@mui/icons-material/ViewModule';
import ReorderIcon from '@mui/icons-material/Reorder';
import CategoryCardsLong from '../components/CategoryCardsLong'

function Plushies() {
  return (
    <div>
        <div className='containerTop'>
            <CategoryCardsLong image={PlushiesCoverLong} text={"PLUSHIES"}/>
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
            <Link to='/bluebearplushieitem'>
                <ItemCard image={BlueBearPlushie} name={"Blue Bear Plushie"} price={3} inStock={false}/>
            </Link>
            <ItemCard image={LobsterBearPlushie} name={"Lobster Bear Plushie"} price={3} inStock={false}/>
            <ItemCard image={GreenDinoPlushie} name={"Green Dinosaur Plushie"} price={5} inStock={true}/>
            <ItemCard image={GreyCatPlushie} name={"Grey Cat Plushie"} price={7} inStock={true}/>
        </div>
        <div className='containerBottom'>
            <ItemCard image={YellowBananaPlushie} name={"Yellow Banana Plushie"} price={1} inStock={true}/>
            <ItemCard image={YellowBearPlushie} name={"Yellow Bear Plushie"} price={3} inStock={true}/>
            <ItemCard image={HamburgerDogPlushie} name={"Hamburger Dog Plushie"} price={5} inStock={false}/>
            <ItemCard image={PinkPigPlushie} name={"Pink Pig Plushie"} price={7} inStock={true}/>
        </div>
        <div className='containerBottom'>
            <ItemCard image={CorgiPlushie} name={"Corgi Plushie"} price={1} inStock={true}/>
            <ItemCard image={SmallBearPlushie} name={"Small Bear Plushie"} price={3} inStock={true}/>
            <ItemCard image={MonsterPlushie} name={"Monster Plushie"} price={5} inStock={true}/>
            <ItemCard image={LimeBearPlushie} name={"Lime Bear Plushie"} price={7} inStock={false}/>
        </div>
    </div>
  )
}

export default Plushies
