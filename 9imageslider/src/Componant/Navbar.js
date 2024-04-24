import React from 'react';
import { NavLink} from 'react-router-dom';
import "./Navbar.css"

function Navbar() {
  return (
    <div className='navbarr'>
        <ul>
        </ul>
        <ul>
            <li><NavLink to="/" activeClassName="Activee" className="NavLink" >Home</NavLink></li>
            <li> <NavLink to="/Bmicl"   className="NavLink" >BMI Calculator</NavLink>   </li>
            <li> <NavLink to="/Gitsearch"   className="NavLink" >Github Search</NavLink>   </li>
            <li> <NavLink to="/Faq"   className="NavLink" >Faq</NavLink>   </li>
            <li> <NavLink to="/Quote"   className="NavLink" >Quote</NavLink>   </li>
            <li> <NavLink to="/Shoping"   className="NavLink" >Shoping</NavLink>   </li>
            <li> <NavLink to="/Slider"   className="NavLink" >Image Slider</NavLink>   </li>
            <li> <NavLink to="/Video"   className="NavLink" >Video Plyaer</NavLink>   </li>

        </ul>
        <ul>
            <li><button className='button'>Login / SignUp</button></li>
        </ul>
    </div>
  );
}

export default Navbar;
