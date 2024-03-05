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
        <h3 className='text'>{name}</h3>
        <img className='rating' src={Rating}></img>
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
