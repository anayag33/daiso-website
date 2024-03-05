import React from 'react'
import ItemCard from '../components/ItemCard'
import BannerImage from '../assets/HomeBackground.png';
import PlushiesCover  from '../assets/PlushiesCover.png'
import StationaryCover  from '../assets/StationaryCover.png'
import SnacksCover  from '../assets/SnacksCover.png'
import BrandsCover  from '../assets/BrandsCover.png'
import HomeGoodsCover  from '../assets/HomeGoodsCover.jpg'
import CategoryCards from '../components/CategoryCards';
import '../styles/Explore.css';


function Explore() {
  return (
    <div>
        <div className='containerTop'>
            <CategoryCards text={"PLUSHIES"} image={PlushiesCover}/>
            <CategoryCards text={"STATIONARY"} image={StationaryCover}/>
            <CategoryCards text={"SNACKS"} image={SnacksCover}/>
            <CategoryCards text={"BRANDS"} image={BrandsCover}/>
            <CategoryCards text={"HOME GOODS"} image={HomeGoodsCover}/>
        </div>
        <div className='containerBottom'>
            <ItemCard image={BannerImage} name={"Set of 4 Blue Bowls"} price={23} inStock={true}/>
            <ItemCard image={BannerImage} name={"Bowls"} price={23} inStock={true}/>
            <ItemCard image={BannerImage} name={"Bowls"} price={23} inStock={true}/>
            <ItemCard image={BannerImage} name={"Bowls"} price={23} inStock={true}/>
        </div>
        <div className='containerBottom'>
            <ItemCard image={BannerImage} name={"Bowls"} price={23} inStock={true}/>
            <ItemCard image={BannerImage} name={"Bowls"} price={23} inStock={true}/>
            <ItemCard image={BannerImage} name={"Bowls"} price={23} inStock={true}/>
            <ItemCard image={BannerImage} name={"Bowls"} price={23} inStock={true}/>
        </div>
        <div className='containerBottom'>
            <ItemCard image={BannerImage} name={"Bowls"} price={23} inStock={true}/>
            <ItemCard image={BannerImage} name={"Bowls"} price={23} inStock={true}/>
            <ItemCard image={BannerImage} name={"Bowls"} price={23} inStock={true}/>
            <ItemCard image={BannerImage} name={"Bowls"} price={23} inStock={true}/>
        </div>
    </div>
  )
}

export default Explore
