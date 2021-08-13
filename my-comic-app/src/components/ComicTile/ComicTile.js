import React from 'react';
import './ComicTile.css';

const ComicTile = ({
  title,
  image,
  alt,
  num,
  date,
}) => {  
  return (
    <div className="block">
      <h2>{title}</h2>
      <img src={image} alt={alt} />
      <p>Comic#{num} Published:{date}</p>
    </div>
  );
};

export default ComicTile;