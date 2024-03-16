import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import '../styles/SignIn.css';


function SignIn() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [keepSignedIn, setKeepSignedIn] = useState(false)

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleKeepSignedInChange = (e) => {
    setKeepSignedIn(e.target.checked);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Email:', email);
    console.log('Passowrd', password);
    console.log('Keep me signed in:', keepSignedIn);
  };

  return (
    <div>
      <div className='banner'>
            <p className='bannerText'>
                <div className='mainCard'>
                    <Link to='/'>
                        <button className='bannerButton'>Home</button> 
                    </Link>
                    <ArrowForwardIosIcon />
                  
                    <Link to='/signin'>
                        <button className='bannerButton'>Sign In</button> 
                    </Link>
                </div>
            </p>
      </div>
      <div className='main-cont'>
        <div className='signin-stuff'>
          <form className='inputs' onSubmit={handleSubmit}>
            <h2>Sign In</h2>
            <br />
            <div className='inputContainer'>
              <input className='inputContent'
                type='email'
                id='email'
                placeholder='Email'
                value={email}
                onChange={handleEmailChange}
                required
              />
            </div>
            <br />
            <div className='inputContainer'>
              <input className='inputContent'
                type='password'
                id='password'
                placeholder='Password'
                value={password}
                onChange={handlePasswordChange}
                required
              />
            </div>
            <br />
            <div className='checkBoxContent'>
              <input
                type='checkbox'
                id='keepSignedIn'
                checked={keepSignedIn}
                onChange={handleKeepSignedInChange}
              />
              <span htmlFor='keepSignedIn'> Keep me signed in</span>
            </div>
            <br />
          </form>
          <div className='sign-forget'>
            <Link to='/'>
              <button className='signin-btn' type="submit">Sign In</button>
            </Link>
            <br />
            <Link to='/signup'>
              <a href='/signup'>Forgot your account?</a>
            </Link>
          </div>
          <br />
        </div>
      </div>
      <div className='no-account'>
            {/* <div className='no-text'><h2>No account yet?</h2></div> */}
            <h2 className='no-text'>No account yet?</h2>
            <br />
            <div className='create-account'>
              <Link to='/signup'>
                <button className='create-btn'>Create account</button>
              </Link>
            </div>
        </div>
    </div>
  );
}


export default SignIn