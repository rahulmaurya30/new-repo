import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import { FaTwitter } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";




export default function Graphic() {
  return (
  
 <>
 <div  id='header'>
<div className='container'>
<h1>
  <a href='/home'>Emily Jones</a>

</h1>
<h2>I'm a passionate <span>graphic designer </span>from New York</h2>
<nav className='navbar'>
  <ul>
    <li > <a href='#header'><Link to='/'  className=' active page-title'>Home</Link></a></li>
    <li> <a><Link to='/about' className='page-title '>About</Link></a></li>
    {/* <li> <a><Link to='' className='page-title'>Resume</Link></a></li> */}
    <li> <a><Link to='/service' className='page-title'>Serivces</Link></a></li>
    <li> <a><Link to='/port' className='page-title'>Portfolio</Link></a></li>
    <li> <a><Link to='/singup' className='page-title'>Profile</Link></a></li>
    <li> <a><Link to='/dash' className=' page-title'>Dashborad</Link></a></li>

  
    </ul>  

</nav>
<nav className='logo_nav'>
  <ul>
    <li><FaTwitter />    </li>
    <li><FaFacebook /></li>
    <li><FaInstagram /></li>
    <li><FaLinkedin />    </li>
  </ul>
</nav>
 


</div>


 </div>
 <Outlet/>
 </>
  )
}
