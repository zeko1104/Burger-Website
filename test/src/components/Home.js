import React from 'react';
import { Link } from 'react-router-dom';
import BannerImg from '../assets/newbanner.png'
import '../styles/Home.css';

export const Home = () => {
  return (
    <div className='mainPage' style={{ backgroundImage: `url(${BannerImg})` }}>
        <div className='order'>
            <Link to="/menu">
              <button>Order Now</button>
            </Link>
        </div>
    </div>
  )
}
