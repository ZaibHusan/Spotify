import React from 'react'
import "./navbar.css"
import { assets } from '../../assets/assets'
import { useNavigate } from 'react-router-dom'
export default function Navbar() {
    const navigation = useNavigate();
  return (
   <div className="navbar">
    <div className="Navbar_part1">
        <div className="logo"><img onClick={()=>navigation("/")} src={assets.spotify_logo} alt="" /></div>
        <div className="Navbar_home"><img src={assets.home_icon} alt="" /></div>
        <div className="Navbar_search">
            <img src={assets.search_icon} alt="" />
            <input type="search" placeholder='What do you want to play?' />
            <p>|</p>
            <img className='invert' src={assets.shopping} alt="" />
        </div>
    </div>
    <div className="Navbar_part2">
        <ul>
            <li>Premium</li>
            <li>Support Download</li>
            <li id='white'>|</li>
            {/* <li><img src={assets.install} alt="" />Install App</li> */}
            <li>Sigin up</li>
            <li><button>Log in</button></li>
        </ul>
        
    </div>
     <li className='hide'><button>Log in</button></li>
   </div>
  )
}
