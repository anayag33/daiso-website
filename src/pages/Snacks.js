import React from 'react'
import ItemCard from '../components/ItemCard'
import SnacksCoverLong  from '../assets/SnacksCoverLong.png'
import ChocolateHelloPanda from '../assets/ChocolateHelloPanda.png';
import FruitHiChew from '../assets/FruitHiChew.png';
import ChocolatePocky from '../assets/ChocolatePocky.png';
import RamuneSodaOrange from '../assets/RamuneSodaOrange.png';
import YeosSoymilk from '../assets/YeosSoymilk.png';
import OriginalShrimpSnacks from '../assets/OriginalShrimpSnacks.png';
import PuchaoFruitGummies from '../assets/PuchaoFruitGummies.png';
import AloeDrink from '../assets/AloeDrink.png';
import CalpicoDrinks from '../assets/CalpicoDrinks.png';
import BotanRiceCandy from '../assets/BotanRiceCandy.png';
import MoguMoguLycheeJuice from '../assets/MoguMoguLycheeJuice.png';
import LycheeGummyCandies from '../assets/LycheeGummyCandies.png';
import '../styles/Explore.css';
import { Link } from "react-router-dom";
import CategoryCardsLong from '../components/CategoryCardsLong'
import ViewModuleIcon from '@mui/icons-material/ViewModule';
import ReorderIcon from '@mui/icons-material/Reorder';

function Snacks() {
  return (
    <div>
        <div className='containerTop'>
            <CategoryCardsLong image={SnacksCoverLong} text={"SNACKS"}/>
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
            <ItemCard image={ChocolateHelloPanda} name={"Chocolate Hello Panda"} price={1} inStock={true}/>
            <ItemCard image={FruitHiChew} name={"Fruit Hi Chew"} price={3} inStock={false}/>
            <Link to='/ramuneitem'>
                <ItemCard image={RamuneSodaOrange} name={"Ramune Orange Soda"} price={7} inStock={false}/>
            </Link>
            <Link to='/pockyitem'>
                <ItemCard image={ChocolatePocky} name={"Chocolate Pocky"} price={5} inStock={true}/>
            </Link>
        </div>
        <div className='containerBottom'>
            <ItemCard image={OriginalShrimpSnacks} name={"Original Shrimp Snacks"} price={1} inStock={true}/>
            <ItemCard image={PuchaoFruitGummies} name={"Puchao Fruit Gummies"} price={3} inStock={true}/>
            <ItemCard image={AloeDrink} name={"Aloe Drink"} price={5} inStock={false}/>
            <ItemCard image={CalpicoDrinks} name={"5 Pack Calpico Drinks"} price={7} inStock={true}/>
        </div>
        <div className='containerBottom'>
            <ItemCard image={YeosSoymilk} name={"Yeo's Soymilk"} price={5} inStock={true}/>
            <ItemCard image={BotanRiceCandy} name={"Botan Rice Candy"} price={3} inStock={true}/>
            <ItemCard image={LycheeGummyCandies} name={"Lychee Gummy Candies"} price={5} inStock={true}/>
            <ItemCard image={MoguMoguLycheeJuice} name={"Mogu Mogu Lychee Juice"} price={7} inStock={false}/>
        </div>
    </div>
  )
}

export default Snacks
