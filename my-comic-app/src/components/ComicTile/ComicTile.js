import React from 'react';
import './ComicTile.css';

const ComicTile = ({
  title,
  image,
  alt,
  date,
}) => {  
  return (
    <div className="comicBlock">
      <h2>{title}</h2>
      <img src={image} alt={alt} />
      <p>Published:{date}</p>
    </div>
  );
};

export default ComicTile;