import React, { useState, useEffect } from 'react';
import css from './Gallery.module.css';
import Image from '../Image/Image.jsx';

const Gallery = (props) => {

  let key = -1;
  return (
    <div>
      <div className={css.container}>
        {props.style.photos.map((current) => {
          key++;
          return (<Image key={key} photo={current} handlePhotoClick={props.handlePhotoClick} />)
        })}
      </div>
      <span>
      <img src={props.main.url} style={{ width: 400, height: 600 }} />
      </span>
    </div>
  )
}
export default Gallery;