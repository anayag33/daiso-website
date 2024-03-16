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
import PlushiesCoverLong from '../assets/PlushiesCoverLong.jpg';
import DaisoOutside from '../assets/DaisoOutside.png';
import ItemCard from '../components/ItemCard'
import LobsterBearPlushie from '../assets/LobsterBearPlushie.png';
import HamburgerDogPlushie from '../assets/HamburgerDogPlushie.png';
import YellowBananaPlushie from '../assets/YellowBananaPlushie.png';
import GreenDinoPlushie from '../assets/GreenDinosaurPlushie.png';


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
                    <img className='ratingB' alt='ratingBpic' src={Rating}></img>
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
        <hr width="100%" size="2"></hr>
        <div className='main'>
            <p className='descriptionTextB'>Description</p>
            <p className='descriptionTextG'>Additional Information</p>
            <p className='descriptionTextG'>Reviews (5)</p>
        </div>
        <p className='descriptionBlurb'>Embodying the raw, wayward spirit of rock n roll, 
        the Kilburn portable active stereo speaker takes the unmistakable look 
        and sound of Marshall, unplugs the chords, and takes the show on the road.</p>
        <p  className='descriptionBlurb'>
        Weighing in under 7 pounds, the Kilburn is a lightweight piece of vintage 
        styled engineering. Setting the bar as one of the loudest speakers in its 
        class, the Kilburn is a compact, stout-hearted hero with a well-balanced 
        audio which boasts a clear midrange and extended highs for a sound that 
        is both articulate and pronounced. The analogue knobs allow you to fine 
        tune the controls to your personal preferences while the guitar-influenced 
        leather strap enables easy and stylish travel.
        </p>
        <div className='main'>
            <img src={PlushiesCoverLong} alt='plushiescoverpic' className='descriptionImage'></img>
            <img src={DaisoOutside}  alt='outsidepic' className='descriptionImage'></img>
        </div>
        <hr width="100%" size="2"></hr>
        <h1 className='relatedProductText'>Related Products</h1>
        <div className='relatedProductCards'>
            <ItemCard image={LobsterBearPlushie} name={"Lobster Bear Plushie"} price={3} inStock={false}/>
            <ItemCard image={HamburgerDogPlushie} name={"Hamburger Dog Plushie"} price={5} inStock={false}/>
            <ItemCard image={YellowBananaPlushie} name={"Yellow Banana Plushie"} price={1} inStock={true}/>
            <ItemCard image={GreenDinoPlushie} name={"Green Dinosaur Plushie"} price={5} inStock={true}/>
        </div>
    </div>
  )
}

export default BlueBearPlushieItem
