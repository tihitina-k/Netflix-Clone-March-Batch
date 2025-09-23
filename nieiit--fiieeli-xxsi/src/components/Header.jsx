


import React from 'react'
import './Header.css'
import netflix from '../asset/images/netflix1.jpg'
import SearchIcon from '@mui/icons-material/Search';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
const Header = () => {
  return (
    <>
<div className='outer-header-container'>
  <div className='inner-header-container'>
      <div className='header-left'>
        
        <ul className='header-ul'>
<li><a href="#"><img src={netflix} alt="netflix logo"  /></a></li>
<li>Home</li>
<li>TvShows</li>
<li>Movies</li>
<li>Games</li>
<li>New & Popular</li>
<li>My List</li>
<li>Browsed by Language</li>
        </ul>

      </div>
      <div className='header-right'>
        <ul className='icons-ul'>
           <li  ><SearchIcon fontSize="small"/>  </li>
         <li><NotificationsNoneIcon fontSize="small"/></li>
         <li><AccountBoxIcon fontSize="small"/></li>
          <li><ArrowDropDownIcon fontSize="medium"/></li>   
        </ul>
      </div>
    



    </div>
    </div>
  
    </>
  )
}

export default Header