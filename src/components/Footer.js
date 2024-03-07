import React from 'react';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import TwitterIcon from '@mui/icons-material/Twitter';
import PinterestIcon from '@mui/icons-material/Pinterest';
import '../styles/Footer.css';

function Footer() {
  return (
    <div className='footer'>
      <div className='horizontal'>
        <div className='largeText'>
          <h4>Quick Links</h4>
          <div className='normalText'>
            <a href="https://daiso.rec.pro.ukg.net/DAI1003DAIS/JobBoard/42da7f44-22fb-4245-8e53-e4c36c4e2133/?q=&o=postedDateDesc&w=&wc=&we=&wpst=" className='link'>Careers</a>
            <a href="https://daisous.com/blogs/daiso-updates" className='link'>Daiso News</a>
            <a href="https://daisous.com/pages/faq" className='link'>FAQ</a>
            <a href="/storelocator" className='link'>Store Locator</a>
            <a href="https://daisous.com/collections/ingredients" className='link'>Safety Datasheet</a>

          </div>
        </div>
        <div className='largeText'>
          <h4>Info</h4>
          <div className='normalText'>
            <a href="https://daisous.com/pages/website-and-technology-accessibility" className='link'>Accessibility</a>
            <a href="https://daisous.com/pages/cp65" className='link'>California Proposition 65</a>
            <a href="https://daisous.com/pages/privacy-policy" className='link'>Privacy Policy</a>
            <a href="https://daisous.com/pages/terms-and-conditions" className='link'>Terms & Conditions</a>
          </div>
        </div>
        <div className='largeText'>
          <h4>Customer Service</h4>
          <div className='normalText'>
            <a href="https://daisous.com/pages/contact" className='link'>Contact Us</a>
            <a href="https://daisous.com/policies/terms-of-service" className='link'>Terms of Service</a>
            <a href="https://daisous.com/pages/return-policy" className='link'>Return Policy</a>
            
          </div>
        </div>
      </div>
      <div className='socialMedia'>
        <FacebookIcon />
        <InstagramIcon />
        <YouTubeIcon />
        <TwitterIcon />
        <PinterestIcon />
      </div>
    </div>
  )
}

export default Footer
