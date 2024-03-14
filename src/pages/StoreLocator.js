import React from 'react';
import '../styles/StoreLocator.css';
import Map from '../assets/Map.jpeg';
import { Link } from "react-router-dom";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';


function StoreLocator() {

  function clearResults() {
    // This function clears the search results
    document.querySelectorAll('.store').forEach(function(store) {
        store.style.display = 'none';
    });
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
                    <Link to='/pockyitem'>
                        <button className='bannerButton'>Store Locator</button> 
                    </Link>
                </div>
            </p>
        </div>
  <div class="store-locator-container">
    <div class="search-container">
        <h1 className='heading'>Find My Store</h1>
        <div>
            <input className="form" type="text" id="zipcode" placeholder="Zipcode" />
            <input className="form" type="text" id="city" placeholder="City" />
            <input className="form" type="text" id="state" placeholder="State" />
        </div>
        <button className='pinkButton'>Find Store</button>
        <button className='greyButton'>Clear</button>
        <div className='containerBottom'>
          <div>
          <div className='storeCard'>
                <p className='storeLocation'>San Jose</p>
                <p>588 Saratoga Ave Unit 20</p>
                <p>San Jose, CA 95129</p>
                <p>2 miles away from you</p>
            </div>
            <div className='storeCard'>
              <p className='storeLocation'>Cupertino</p>
                <p>19750 Stevens Creek Blvd</p>
                <p>Cupertino, CA 95014</p>
                <p>5 miles away from you</p>
            </div>
            <div className='storeCard'>
                <p className='storeLocation'>San Jose</p>
                <p>588 Saratoga Ave Unit 20</p>
                <p>San Jose, CA 95129</p>
                <p>2 miles away from you</p>
            </div>
            <div className='storeCard'>
            <p className='storeLocation'>Cupertino</p>
                <p>19750 Stevens Creek Blvd</p>
                <p>Cupertino, CA 95014</p>
                <p>10 miles away from you</p>
            </div>
          </div>
          <img src={Map} alt="Map Placeholder" className='map'/> 
        </div>
    </div>
</div>
    </div>
  )
}

export default StoreLocator
