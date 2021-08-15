import React from 'react';
import Header from '../Header/Header';
import './NoMatch.css';

const NoMatch = () => {  
  return (
    <div>
      <Header />
      <p> Oops! This page does not exist. Please use Navigation.</p>
    </div>
  );
};

export default NoMatch;