import React from 'react';
import { Link } from 'react-router-dom';
import "../Css/Header.css";

const Header = () => {
  return (
    <nav className='navbar'>
      <div className='namelogo'>
        <h1>GD Manufacturers</h1> 
      </div>
      <div className='nav'>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/products">Products </Link> </li>
          <li><Link to="/contact">ContactUs</Link></li>
        </ul>  
      </div>        
    </nav>
  );
};

export default Header;
