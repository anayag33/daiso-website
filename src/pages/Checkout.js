import React from 'react'
import { Link } from 'react-router-dom';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import '../styles/CheckOut.css';

function Checkout() {
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
                    <ArrowForwardIosIcon />
                  
                    <Link to='/checkout'>
                        <button className='bannerButton'>Checkout</button> 
                    </Link>
                </div>
            </p>
    </div>

     {/* Shipping Address section */}
     <div className='addressContainer'>
       <h1>Shipping Address</h1>
       <p>*Required field</p>
       <div className='column'>
          <div className='names'>
            {/* Left column that has First name and Last name inputs */}
            <div className='firstname'>
              <input type="text" placeholder="First Name*" className="firstname" required></input>
            </div>
            <div className='lastname'>
              <input type="text" placeholder="Last Name*" className="lastname" required></input>
            </div>
          </div>
          {/* Right column that has Address inputs */}
          <div className='address'>
            <div className='address1'>
              <input type="text" placeholder="Address line 1*" className="address1" required></input>
            </div>
            <div className='address2'>
              <input type="text" placeholder="Address line 2 (Optional)" className="address2"></input>
            </div>
            <div className='areacode'>
              <div className='zipcode'>
                <input type="text" placeholder="Zip code*" className="zipcode" required></input>
              </div>
              <div className='state-btn'>
                <select className='state' id='state'>
                  <option value='m'>And more...</option>
                  <option value='ca'>California</option>
                  <option value='hi'>Hawaii</option>
                  <option value='wa'>Washington</option>
                  <option value='or'>Oregon</option>
                  <option value='tx'>Texas</option>
                  <option value='ny'>New York</option>
                  <option value='st' selected>State*</option>
                </select>
              </div>
            </div>
            <div className='city'>
              <input type="text" placeholder="City*" className="city" required></input>
            </div>
            <div className='phone'>
              <input type="text" placeholder="Phone number*" className="phone" required></input>
            </div>
          </div>
       </div>

     </div>

    <hr></hr>

    {/* Payment Method section */}
    <div className='payContainer'>
      <h1>Payment Method</h1>
      <p>*Required field</p>
      <div className='creditcard'>
        <input type="text" placeholder="Credit card number*" className="creditcard" required></input>
      </div>
      <div className='credit-info'>
        <div className='creditInfo'>
          <div className='month-btn'>
            <select className='month' id='month'>
              <option value='ja'>Janurary</option>
              <option value='fe'>February</option>
              <option value='mar'>March</option>
              <option value='ap'>April</option>
              <option value='may'>May</option>
              <option value='jun'>June</option>
              <option value='jul'>July</option>
              <option value='au'>August</option>
              <option value='se'>September</option>
              <option value='oc'>October</option>
              <option value='no'>November</option>
              <option value='de'>December</option>
              <option value='mnt' selected>Month*</option>
            </select>
          </div>
        </div>
        <div className='yearInfo'>
          <div className='year-btn'>
            <select className='year' id='month'>
              <option value='m'>And more</option>
              <option value='t0'>2000</option>
              <option value='t1'>2001</option>
              <option value='t2'>2002</option>
              <option value='t3'>2003</option>
              <option value='yr' selected>Year*</option>
            </select>
          </div>
        </div>
        <div className='cvv'>
          <input type="text" placeholder="CVV*" className="cvv" required></input>
        </div>
      </div>
    </div>

    {/* Billing Address section */}
    <div className='addressContainer'>
      <h1>Billing Address</h1>
      <p>*Required field</p>
      <div className='column'>
          <div className='names'>
            {/* Left column that has First name and Last name inputs */}
            <div className='firstname'>
              <input type="text" placeholder="First Name*" className="firstname" required></input>
            </div>
            <div className='lastname'>
              <input type="text" placeholder="Last Name*" className="lastname" required></input>
            </div>
          </div>
          {/* Right column that has Address inputs */}
          <div className='address'>
            <div className='address1'>
              <input type="text" placeholder="Address line 1*" className="address1" required></input>
            </div>
            <div className='address2'>
              <input type="text" placeholder="Address line 2 (Optional)" className="address2"></input>
            </div>
            <div className='areacode'>
              <div className='zipcode'>
                <input type="text" placeholder="Zip code*" className="zipcode" required></input>
              </div>
              <div className='state-btn'>
                <select className='state' id='state'>
                  <option value='ca'>California</option>
                  <option value='hi'>Hawaii</option>
                  <option value='wa'>Washington</option>
                  <option value='or'>Oregon</option>
                  <option value='tx'>Texas</option>
                  <option value='ny'>New York</option>
                  <option value='st' selected>State*</option>
                </select>
              </div>
            </div>
            <div className='city'>
              <input type="text" placeholder="City*" className="city" required></input>
            </div>
            <div className='phone'>
              <input type="text" placeholder="Email*" className="phone" required></input>
            </div>
          </div>
       </div>
    </div>
    <hr></hr>

    {/* Subtotal and Taxes */}
    <div className='subtotal'>
      <div className='subtotal-txt'>
        <ul>
          <li>Subtotal</li>
          <br />
          <li>Shipping</li>
          <br />
          <li>Estimated Taxes</li>
        </ul>
      </div>
      <div className='subtotal-price'>
        <ul>
          <li>$5</li>
          <br />
          <li className='free'>FREE</li>
          <br />
          <li>$2</li>
        </ul>
      </div>
    </div>
    <hr></hr>

    {/* Final Total */}
    <div className='finalTotal'>
      <div className='finalTotal-txt'>
        <ul><li>Order Total</li></ul>
      </div>
      <div className='finalTotal-price'>
        <ul><li>$7</li></ul>
      </div>
    </div>

    <br />

    {/* Place Order button */}
    <div>
      <Link to='/confirmation'>
        <button className='btn2'>Place order</button>
      </Link>
    </div>
    <div className='space'></div>
   </div>
 )
}


export default Checkout