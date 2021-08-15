import React from 'react';
import { Loader } from 'react-feather';
import './Loading.css';

const Loading = () => {  
  return (
    <div className="loading">
      <Loader className="loader"/>
    </div>
  );
};

export default Loading;