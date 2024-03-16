import React from 'react'
import { Link } from 'react-router-dom';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import '../styles/Cart.css';

import BlueBearPlushie from '../assets/BlueBearPlushie.png';
import BlueBowls from '../assets/BlueBowls.png';

function Cart() {
 return (
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
                </div>
            </p>
      </div>
    <br />
    <h1>Your Shopping Cart</h1>
    <br />
    <hr></hr>
    <br />
      {/* first item in cart - item is a three-column grid*/}
      <div className='item'>
        <div className='columns'>
          <img className='BlueBear' src={BlueBearPlushie} alt='bluebear'></img>
        </div>
        <div className='columns'>
          <div className='description'>
            <h3>Blue Bear Plushie</h3>
            <br />
            <p>Color: Blue</p>
            <br />
            <p>Web ID: 324792395</p>
            <br />
            <div className='quantity'>
              <form id="quantity-btn" method='POST' className='quantity' action='#'>
                <p className='qntname'>Qnt:</p>
                <input type='button' value='-' className='qntminus minus' field='quantity'></input>
                <input type='text' name='quantity' value='1' className='qnt'></input>
                <input type='button' value='+' className='qntplus plus' field='quantity'></input>
              </form>
            </div>
          </div>
        </div>
        <div className='columns'>
          <div className='prices'>
            <h3>Total: $2</h3>
          </div>
        </div>
        <ul className='shipment'>
          <li className='ship-container'>
            <div className='row'><input type='radio' className='ship' value='ship'></input></div>
            <ul className='row'>
              <li><b>Ship to </b><u>95050</u></li>
              <br />
              <li>In Stock near you: Usually ships within 2 business days</li>
            </ul>
          </li>
          <br />
          <li className='ship-container'>
            <div className='row'><input type='radio' className='stock' value='stock'></input></div>
            <ul className='row'>
              <li><b>Pick up in 3-7 business days</b> at <u>Santa Clara Daiso</u></li>
              <li>For <b>Curbside</b> or <b>In Store Pickup</b></li>
            </ul>
          </li>
        </ul>
      </div>

    <hr></hr>

     {/* second item in cart */}
     <div className='item'>
        <div className='columns'>
          <img className='BlueBowls' src={BlueBowls} alt='bluebowls'></img>
        </div>
        <div className='columns'>
          <ul className='description'>
            <li><h3>Set of 4 Blue Bowls</h3></li>
            <br />
            <li><p>Color: Blue</p></li>
            <br />
            <li><p>Web ID: 128098230</p></li>
            <br />
            <li className='quantity'>
              <form id="quantity-btn" method='POST' className='quantity' action='#'>
                <p className='qntname'>Qnt:</p>
                <input type='button' value='-' className='qntminus minus' field='quantity'></input>
                <input type='text' name='quantity' value='1' className='qnt'></input>
                <input type='button' value='+' className='qntplus plus' field='quantity'></input>
              </form>
            </li>
          </ul>
        </div>
        <div className='columns'>
          <div className='prices'>
            <br />
            <h3>Total: $3</h3>
          </div>
        </div>
        <ul className='shipment'>
          <li className='ship-container'>
            <div className='row'><input type='radio' name='ship' value='ship'></input></div>
            <ul className='row'>
              <li><b>Ship to </b><u>95050</u></li>
              <br />
              <li>In Stock near you: Usually ships within 2 business days</li>
            </ul>
          </li>
          <br />
          <li className='ship-container'>
            <div className='row'><input type='radio' name='stock' value='stock'></input></div>
            <ul className='row'>
              <li><b>Pick up in 3-7 business days</b> at <u>Santa Clara Daiso</u></li>
              <li>For <b>Curbside</b> or <b>In Store Pickup</b></li>
            </ul>
          </li>
        </ul>
      </div>
      <hr></hr>
      {/* Promo code */}
      <h1 className='promo-title'>Enter Promo code</h1>
      <br />
      <div className='promo-container'>
        <div className='promo-input'>
          <input type='text' placeholder='Enter Promo Code' className='promo-text'></input>
        </div>
        <div className='promo-input'>
          <button className='promo-btn'>Apply</button>
        </div>
      </div>
      <br />
      <hr></hr>
      {/* Subtotal */}
      <div className='subtotal-container'>
        <ul className='subtotal-col'>
          <li>Subtotal</li>
          <br />
          <li>Shipping</li>
        </ul>
        <ul className='subtotal-price'>
          <li>$5</li>
          <br />
          <li className='free-txt'>FREE</li>
        </ul>
      </div>
      <hr></hr>
      {/* Pre-tax Total */}
      <div className='subtotal-container'>
        <ul className='subtotal-col'>
          <li><b>Pre-Tax Order Total</b></li>
        </ul>
        <ul className='subtotal-price'>
          <li>$5</li>
        </ul>
      </div>
      <hr></hr>
      <br />
      {/* Checkout Button */}
      <Link to='/checkout'>
          <button className='checkout-btn'>Proceed to Checkout</button>
      </Link>
      <br />
      {/* Continue Shopping */}
      <div className='continue-link'>
        <Link to='/explore'>
          <a href={ Link }>Continue Shopping?</a>
        </Link>
      </div>
      <div className='space'></div>
   </div>
 )
}


export default Cart