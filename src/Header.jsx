import React from "react";
import logols from '/logols.jpg'

function Header (){

    return (
        <div className="nav_container">
        <div className="logo">
          <img style={{width: 'auto', height: '50px'}}src={logols}/>
        </div>
        <div className="menu">
          <ul >
            <li><a style={{fontSize:'medium'}} href="/">Home</a></li>
            <li><a style={{fontSize:'medium'}} href="/about">About</a></li>
            <li><a style={{fontSize:'medium'}} href="/contact">Contact</a></li>
            <li><a style={{fontSize:'medium'}} href="/portfolio">Portfolio</a></li>
          </ul>
        </div>
      </div>
    )
}
export default Header;