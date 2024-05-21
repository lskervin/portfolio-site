import React from "react";
import logols from '/logols.jpg'
import {Link} from "react-router-dom";

function Header (){

    return (
        <div className="nav_container">
        <div className="logo">
          <img style={{width: 'auto', height: '50px'}}src={logols}/>
        </div>
        <div className="menu">
          <ul >
            <li><Link style={{fontSize:'medium'}} to="/">Home</Link></li>
            <li><Link style={{fontSize:'medium'}} to="/about">About</Link></li>
            <li><Link style={{fontSize:'medium'}} to="/contact">Contact</Link></li>
            <li><Link style={{fontSize:'medium'}} to="/portfolio">Portfolio</Link></li>
          </ul>
        </div>
      </div>
    )
}
export default Header;