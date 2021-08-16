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
      <h1 tabIndex="0">{title}</h1>
      <img src={image} alt={alt} tabIndex="0" />
      <p aria-hidden={true}>{alt}</p>
      <p tabIndex="0">Published: {date}</p>
    </div>
  );
};

export default ComicTile;