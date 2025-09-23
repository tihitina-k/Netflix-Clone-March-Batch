

import React from 'react'
import './Footer.css'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram'
import YouTubeIcon from '@mui/icons-material/YouTube';
const Footer = () => {
  return (
   <div className='footer-outer-container'>
    <div className=' footer-inner-container'>
      <div className='footer-icon'> 
        <FacebookIcon/>
        <InstagramIcon/>
        <YouTubeIcon/>
      </div>
      <div className='footer-data'>  
     <div className='firstdata'>
          <ul>
            <li>Audioy Description</li>
            <li>Investors Relations</li>
            <li>Legal Notes</li>
            <li className='serviceCode'>Service Code</li>
        </ul>
     </div>
      <div className='secondaData'>
          <ul>
            <li>Help Center</li>
            <li>Jobs</li>
            <li>Cookie Performances</li>
        </ul>
     </div>
     
      <div className='thirdData'>
          <ul>
            <li>Gift Cards</li>
            <li>Terms of Use</li>
            <li>Corporate Information</li>
        </ul>
     </div>
      <div className='fourthData'>
          <ul>
            <li>Media Center</li>
            <li>Privacy</li>
            <li>Contact Us</li>
        </ul>
     </div>
        
      </div>

     <div className='copy-right'>
      &copy; 1997-2025 Netflix,Inc.

     </div>
    </div>

   </div>
  )
}

export default Footer