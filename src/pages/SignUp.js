import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import '../styles/SignIn.css';


function SignUp() {
  const [firstname, setFirstName] = useState('')
  const [lastname, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleFirstNameChange = (e) => {
    setFirstName(e.target.value);
  };

  const handleLastNameChange = (e) => {
    setLastName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('First name:', firstname);
    console.log('Last name:', lastname);
    console.log('Email:', email);
    console.log('Password', password);
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
                    
                      <Link to='/signup'>
                          <button className='bannerButton'>Sign Up</button> 
                      </Link>
                  </div>
              </p>
      </div>
      <div className='main-cont2'>
        <div className='signin-stuff'>
          <form className='inputs' onSubmit={handleSubmit}>
            <h2>Sign Up</h2>
            <br />
            <div className='inputContainer'>
              <label htmlFor="firstname"><b>First Name</b></label>
              <input className='inputContent'
                type='firstname'
                id='firstname'
                placeholder='Enter your first name'
                value={firstname}
                onChange={handleFirstNameChange}
                required
              />
            </div>
            <div className='inputContainer'>
              <label htmlFor="lastname"><b>Last Name</b></label>
              <input className='inputContent'
                type='lastname'
                id='lastname'
                placeholder='Enter your last name'
                value={lastname}
                onChange={handleLastNameChange}
                required
              />
            </div>
            <div className='inputContainer'>
              <label htmlFor="email"><b>Email Address</b></label>
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
              <label htmlFor="password"><b>Set Password</b></label>
              <p className='tip'>Tip: Use uppercase, lowercase, and numbers for a stronger password.</p>
              <br />
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
          </form>
          <div className='create-c'>
              <Link to='/'>
                <button className='signin-btn' type="submit">Create Account</button>
              </Link>
          </div>
        </div>
      </div>
    </div>
 )
}


export default SignUp