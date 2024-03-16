import React, {useState} from 'react'
import '../styles/ItemCard.css';
// import { Link } from "react-router-dom";
import Rating from '../assets/Rating.png'
import { Favorite } from '@material-ui/icons';


function ItemCard({image, name,  price, inStock}) {

  const [fav, setFav] = useState(false);

  function clickHeart(){
    if (fav === false){
      setFav(true);
    }
    if (fav === true){
      setFav(false);
    }
  }

  return (
    <div className='itemCard'>
      { fav ? (
        <button className='heartButton' onClick={clickHeart}>
          <Favorite/>
        </button>
      ) : (
        <button className='emptyHeartButton' onClick={clickHeart}>
          <Favorite/>
        </button>
      )}
      <div  className='image' style={{ backgroundImage: `url(${image})` }}></div>
      {/* <Link>
        <img  className='image' src={BannerImage} ></img>
      </Link> */}
        <h4 className='text'>{name}</h4>
        <img className='rating' alt='ratingpic' src={Rating}></img>
        <p className='text'>${price}</p>
        {inStock ? (
          <p className='text'>In stock</p>
        ) : (
          <p className='text'>Out of stock</p>
        )}
        <button className='buttonAddtoCart'>
          Add to Cart
        </button>
    </div>
  )
}

export default ItemCard
