import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
       <nav aria-label="Main menu">
         <Link to="/">Home</Link>
         <Link to="/about">About</Link>
       </nav>
    </header>
  );
};

export default Header;
