import React from 'react'
import '../styles/ItemCard.css';
import { Link } from "react-router-dom";
import Rating from '../assets/Rating.png'


function ItemCard({image, name,  price, inStock}) {
  return (
    <div className='itemCard'>
      <div  className='image' style={{ backgroundImage: `url(${image})` }}></div>
      {/* <Link>
        <img  className='image' src={BannerImage} ></img>
      </Link> */}
      {/* <div className='text'> */}
        <h3 className='text'>{name}</h3>
        <img className='rating' src={Rating}></img>
        <p className='text'>${price}</p>
        <p className='text'>In stock</p>
        <button className='buttonAddtoCart'>
          Add to Cart
        </button>
      {/* </div> */}
    </div>
  )
}

export default ItemCard
