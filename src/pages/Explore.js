import React from 'react'
import ItemCard from '../components/ItemCard'
import BannerImage from '../assets/HomeBackground.png';


function Explore() {
  return (
    <div>
      <ItemCard image={BannerImage} name={"Bowls"} price={23} inStock={true}/>
    </div>
  )
}

export default Explore
