import React, {useState} from 'react'
import '../styles/PockyItem.css';
import ChocolatePocky from '../assets/ChocolatePocky.png';
import MatchaPocky from '../assets/MatchaPocky.png';
import StrawberryPocky  from '../assets/StrawberryPocky.png'
import Rating from '../assets/Rating.png';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import MessageIcon from '@mui/icons-material/Message';
import { Link } from "react-router-dom";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import PlushiesCoverLong from '../assets/PlushiesCoverLong.jpg';
import DaisoOutside from '../assets/DaisoOutside.png';
import ItemCard from '../components/ItemCard'
import ChocolateHelloPanda from '../assets/ChocolateHelloPanda.png';
import PuchaoFruitGummies from '../assets/PuchaoFruitGummies.png';
import OriginalShrimpSnacks from '../assets/OriginalShrimpSnacks.png';
import BotanRiceCandy from '../assets/BotanRiceCandy.png';


function PockyItem() {

    const [color, setColor] = useState(ChocolatePocky);
    const [name, setName] = useState("Chocolate Pocky");

    function changeChocolate(){
        setName("Chocolate Pocky");
        setColor(ChocolatePocky);
    }

    function changeMatcha(){
        setName("Matcha Pocky");
        setColor(MatchaPocky);
    }

    function changeStrawberry(){
        setName("Strawberry Pocky");
        setColor(StrawberryPocky);
    }

  return (
    <div>
        <div className='banner'>
            <p className='bannerText'>
                <div className='mainCard'>
                    <Link to='/'>
                        <button className='bannerButton'>Home</button> 
                    </Link>
                    <ArrowForwardIosIcon />
                    <Link to='/explore'>
                        <button className='bannerButton'>Shop</button> 
                    </Link>
                    <ArrowForwardIosIcon />
                    <Link to='/snacks'>
                        <button className='bannerButton'>Snacks</button> 
                    </Link>
                    <ArrowForwardIosIcon />
                    <Link to='/pockyitem'>
                        <button className='bannerButton'>{name}</button> 
                    </Link>
                </div>
            </p>
        </div>
        <div className='main'>
            <div className='cardImage'>
                <div  className='imageItem' style={{ backgroundImage: `url(${color})` }}></div>
            </div>
            <div className='cardText'>
                <h1>{name}</h1>
                <p className='priceText'>$3</p>
                <div className='mainCard'>
                    <img className='ratingB' src={Rating}></img>
                    <p className='ratingText'> 5 Customer Reviews</p>
                </div>
                <p className='textBear'>
                    A delicious snack that comes in multiple flavors! 
                    the crunchy stick pairs beautofully with the chocolate covering it,
                    to create the perfect snack!
                </p>
                <p className='ratingText'>Flavors:</p>
                <div>
                    <button className='colorChocolate' onClick={changeChocolate}>
                        
                    </button>
                    <button className='colorMatcha' onClick={changeMatcha}>
                        
                    </button>
                    <button className='colorStrawberry' onClick={changeStrawberry}>
                        
                    </button>
                </div>
                <div>
                    <button className='greyButtonB'>
                        <div className='mainCard'>
                            <RemoveIcon />
                            <p className='quantityText'>1</p>
                            <AddIcon/>
                        </div>
                         </button>
                        
                    <button className='pinkButtonB'>Add to cart</button>
                </div>
                <hr width="100%" size="2"></hr>
                <div>
                    <p className='ratingText'>SKU: SS002</p>
                    <p className='ratingText'>Category: Snacks</p>
                    <p className='ratingText'>Tags: Snacks, Pocky, Food, Shop</p>
                    <div className='mainCard'>
                        <p className='ratingText'>Share:</p>
                        <div className='smallSocials'>
                            <FacebookIcon />
                            <InstagramIcon />
                            <MessageIcon />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <hr width="100%" size="2"></hr>
        <div className='main'>
            <p className='descriptionTextB'>Description</p>
            <p className='descriptionTextG'>Additional Information</p>
            <p className='descriptionTextG'>Reviews (5)</p>
        </div>
        <p className='textBear'>Text</p>
        <div className='main'>
            <img src={PlushiesCoverLong} className='descriptionImage'></img>
            <img src={DaisoOutside}  className='descriptionImage'></img>
        </div>
        <hr width="100%" size="2"></hr>
        <h1 className='relatedProductText'>Related Products</h1>
        <div className='relatedProductCards'>
            <ItemCard image={ChocolateHelloPanda} name={"Chocolate Hello Panda"} price={1} inStock={true}/>
            <ItemCard image={PuchaoFruitGummies} name={"Puchao Fruit Gummies"} price={3} inStock={true}/>
            <ItemCard image={OriginalShrimpSnacks} name={"Original Shrimp Snacks"} price={5} inStock={false}/>
            <ItemCard image={BotanRiceCandy} name={"Botan Rice Candy"} price={3} inStock={true}/>
        </div>
    </div>
  )
}

export default PockyItem
