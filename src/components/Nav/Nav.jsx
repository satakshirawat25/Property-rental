import './Nav.css'
import {TbSearch} from 'react-icons/tb'
import { GiHamburgerMenu } from 'react-icons/gi'
import {CgProfile} from 'react-icons/cg'
import logo from '../../assets/p.jpg'
import { useState } from 'react'
import { MdBedroomParent,MdOutlinePool, MdOutlineWhatshot } from "react-icons/md";
import { GiHouse } from "react-icons/gi";
import { MdCabin } from "react-icons/md";
import {PiFarm} from 'react-icons/pi'
import {SiHomeassistantcommunitystore} from 'react-icons/si'
import {LuTentTree} from 'react-icons/lu'
import {FaTreeCity} from 'react-icons/fa6'
import { Link, NavLink } from 'react-router-dom'




export default function Nav() {

      let [visible,setvisible]=useState(false)
  return (

     <div id='Nav' >
      {visible?<div className="hamburger">

      <Link to={"/Login"} ><div className="ham1">login</div></Link>
      <Link to={"/Signup"} ><div className="ham1">sign up</div></Link>
     <Link to={"/Listing"}><div className="ham1">list your home</div></Link>
     <Link to={"/Contact"}><div className="ham1">help center</div></Link>

    </div>:<div></div>}
      


      <div className="nav1">
        <Link to=""><div className="logo">
          <img src={logo} alt="" width='50px' />
          <h1>Private Property rental</h1>
        </div></Link>
        <div className="search">
          <input type='text'placeholder='Search Destination'/>
          <button><span>Search</span><TbSearch/></button>
        </div>
        <div className="ham">
          <Link to="/Listing"><button id='btn1'>List your home</button></Link>
          <button id='btn2' onClick={()=>setvisible(prev=>!prev)}><GiHamburgerMenu id='svg1'/><CgProfile id='svg2'/></button>

        </div>
      </div>
        <div className="nav2">
        <NavLink to={""}><div className="svg11"><MdOutlineWhatshot /><h3>Trending</h3></div></NavLink>
        <NavLink to={"/Houses"}><div className="svg11"><GiHouse/><h3>Houses</h3></div></NavLink>
        <div className="svg11"><MdBedroomParent/><h3>Rooms</h3></div>
        <div className="svg11"><PiFarm/><h3>Farm house</h3></div>
        <div className="svg11"><MdOutlinePool/><h3>Pool Houses</h3></div>
        <div className="svg11"><LuTentTree/><h3>Tent Houses</h3></div>
        <div className="svg11"><MdCabin/><h3>Cabins</h3></div>
        <div className="svg11"><SiHomeassistantcommunitystore/><h3>Shops</h3></div>
        <div className="svg11"><FaTreeCity/><h3>Forest Houses</h3></div>
    
        
      </div>
  
    </div>
  )
}
