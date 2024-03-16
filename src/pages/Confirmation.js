import React from 'react';
import { Link } from 'react-router-dom';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ConfBasket from '../assets/ConfImg1.png';
import ConfText from '../assets/ConfImg2.png'
import '../styles/Confirmation.css';

function Confirmation(){
    return(
        <div>
            <div className='banner'>
                <p className='bannerText'>
                    <div className='mainCard'>
                        <Link to='/'>
                            <button className='bannerButton'>Home</button> 
                        </Link>
                        <ArrowForwardIosIcon />
                    
                        <Link to='/cart'>
                            <button className='bannerButton'>Cart</button> 
                        </Link>
                        <ArrowForwardIosIcon />
                    
                        <Link to='/checkout'>
                            <button className='bannerButton'>Checkout</button> 
                        </Link>
                        <ArrowForwardIosIcon />
                    
                        <Link to='/confirmation'>
                            <button className='bannerButton'>Confirmation</button> 
                        </Link>
                    </div>
                </p>
            </div>
            <div className='conf-main'>
                <img src={ConfBasket} alt='bluebasket' className='basketimg'></img>
                <div className='conf-info'>
                    <img src={ConfText} alt='ordercomplete' className='checkimg'></img>
                    <Link to='/'>
                        <button className='home-pg'>Continue Shopping</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Confirmation;