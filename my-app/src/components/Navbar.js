import "./Navbarstyles.css"

import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'

import { FaBars, FaTimes } from 'react-icons/fa'

const Navbar = () => {

    const[click,setClick] = useState(false);
    const handleClick = () => setClick(!click);

  return (
    <div className="header">
        <Link to="/">
        <h1>Portfolio</h1>
        </Link>
        <ul className="Navmenu">
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/About">About</Link>
            </li>
            <li>
                <Link to="/Project">Project</Link>
            </li>
            <li>
                <Link to="/Contact">Contact</Link>
            </li>
        </ul>
        <div className="hamburger">
            {click ? {<FaTimes size={20} style={{color: "white"}}}/>;
            <FaBars size={20} style={{color: "white"}}/>
            <FaTimes size={20} style={{color: "white"}}/>
        </div>
    </div>
    
  );
};

export default Navbar;