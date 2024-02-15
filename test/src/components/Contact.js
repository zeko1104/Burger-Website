import React from 'react';
import Image from '../assets/burger.png';
import '../styles/Contact.css';

export const Contact = () => {
  return (
    <div className='contact'>
      <div className='leftSide' style={{ backgroundImage: `url(${Image})` }}>

      </div>
      <div className='rightSide'>
        <h1> Contact Us</h1>
        <form>
          <label>FullName</label>
          <input type="text"  name="name" placeholder='Please Enter FullName'  />
          <label>Email Address</label>
          <input type="email"  name="email" placeholder='Please Enter Email'/>
          <label>Message</label>
          <textarea name="message" rows="6"  placeholder='Enter Your Message Here...'></textarea>
        </form>
      </div>
    </div>
  )
}
