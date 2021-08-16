import React from 'react';
import './ComicTile.css';

const ComicTile = ({
  title,
  image,
  alt,
  date,
}) => {  
  return (
    <div 
      className="comicBlock"
      tabIndex="0"
      aria-label="comic tile"
    >
      <h2 tabIndex="0">{title}</h2>
      <img src={image} alt={alt} tabIndex="0" />
      <p tabIndex="0">Published:{date}</p>
    </div>
  );
};

export default ComicTile;