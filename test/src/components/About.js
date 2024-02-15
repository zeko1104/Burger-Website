import React from 'react';
import Image from '../assets/burgerbanner.png';
import '../styles/About.css';

export const About = () => {
  return (
    <div className='about'>
      <div className='aboutTop' style={{ backgroundImage: `url(${Image})` }}></div>
      <div className='aboutBottom'>
        <h1>About</h1>
        <p>
          Burger Bar is a restaurant concept that offers customers the opportunity to enjoy a wide variety of burg
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non semper nibh. Class aptent taciti sociosqu ad litora
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
          volutpat nibh et erat lobortis, ac fermentum lect us mollis. Mauris
          sed ultricies velit. Vestibulum ante ipsum primis in  faucibus orci luctus et ultrices posuere cubilia Curae; Aenean e  
          sed diam ut velit tempus aliquam. Vestibulum ante ipsum primis in 
          faucibus orci luctus et ultrices posuere cubilia Curae; Quisque id  
          odio nec sem convallis sollicitudin. Nullam at dui eget urna dictum  
          feugiat. Nulla facilisi. Donec non sapien quis turpis pulvinar            
          viverra. Suspendisse potenti. Vivamus vestibulum
        </p>
      </div>
    </div>
  )
}
