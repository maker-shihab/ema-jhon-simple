import React from 'react';
import logo from '../images/Logo.svg';
import './Header.css';

const Header = () => {
  return (
    <div className='header'>
      <div className="container">
        <div className="header_content">
          <a href="/"><img src={logo} alt="logo" /></a>
          <nav>
            <ul>
              <li><a href="/shope">Shope</a></li>
              <li><a href="/order">Order</a></li>
              <li><a href="/inventory">Inventory</a></li>
              <li><a href="/about">About</a></li>
            </ul>
          </nav>  
        </div>
      </div>    
    </div>
  );
};

export default Header;