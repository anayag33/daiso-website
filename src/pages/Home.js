import React from 'react'
import BannerImage from '../assets/HomeBackground.png';
import ItemCard from '../components/ItemCard';

function Home() {
  return (
    <div>
      <div className='home' style={{ backgroundImage: `url(${BannerImage})` }}>
        <div className='bannerMessage'>
          <p>PUT CONTENT HERE</p>
        </div>
      </div>
      <ItemCard image={BannerImage} name={"Bowls"} price={23} inStock={true}/>
    </div>
  )
}

export default Home
