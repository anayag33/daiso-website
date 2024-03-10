import React, {useState} from 'react'
import '../styles/BlueBearPlushieItem.css';
import BlueBearPlushie from '../assets/BlueBearPlushie.png';
import LimeBearPlushie from '../assets/LimeBearPlushie.png';
import YellowBearPlushie  from '../assets/YellowBearPlushie.png'
import Rating from '../assets/Rating.png';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import MessageIcon from '@mui/icons-material/Message';
import { Link } from "react-router-dom";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';


function BlueBearPlushieItem() {

    const [color, setColor] = useState(BlueBearPlushie);
    const [name, setName] = useState("Blue Bear Plushie");

    function changeBlue(){
        setName("Blue Bear Plushie");
        setColor(BlueBearPlushie);
    }

    function changeLime(){
        setName("Lime Bear Plushie");
        setColor(LimeBearPlushie);
    }

    function changeYellow(){
        setName("Yellow Bear Plushie");
        setColor(YellowBearPlushie);
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
                    <Link to='/plushies'>
                        <button className='bannerButton'>Plushies</button> 
                    </Link>
                    <ArrowForwardIosIcon />
                    <Link to='/bluebearplushieitem'>
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
                <p className='priceText'>$15</p>
                <div className='mainCard'>
                    <img className='ratingB' src={Rating}></img>
                    <p className='ratingText'> 5 Customer Reviews</p>
                </div>
                <p className='textBear'>
                    A plush toy that has the squishiness of a comfortable body pillow. 
                    The bear shape is so cute and the quality is incredibly soft. 
                    Perfect for babies or adults! 
                </p>
                <p className='ratingText'>Colors:</p>
                <div>
                    <button className='colorBlue' onClick={changeBlue}>
                        
                    </button>
                    <button className='colorLime' onClick={changeLime}>
                        
                    </button>
                    <button className='colorYellow' onClick={changeYellow}>
                        
                    </button>
                </div>
                <div>
                    <button className='greyButton'>
                        <div className='mainCard'>
                            <RemoveIcon />
                            <p className='quantityText'>1</p>
                            <AddIcon/>
                        </div>
                         </button>
                        
                    <button className='pinkButton'>Add to cart</button>
                </div>
                <hr width="100%" size="2"></hr>
                <div>
                    <p className='ratingText'>SKU: SS001</p>
                    <p className='ratingText'>Category: Plushes</p>
                    <p className='ratingText'>Tags: Plushies, Bear, Cute, Shop</p>
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
    </div>
  )
}

export default BlueBearPlushieItem
