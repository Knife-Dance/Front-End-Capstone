import React, { useState, useEffect } from 'react';
import css from './Gallery.module.css';
import Image from '../Image/Image.jsx';

const Gallery = (props) => {

  let key = -1;
  return (
    <div className={css.gallerybigcontainer}>
      <div className={css.container}>
        {props.style.photos.map((current) => {
          key++;
          return (<Image key={key} photo={current} handlePhotoClick={props.handlePhotoClick} />)
        })}
      </div>
      <i class="fas fa-chevron-left"></i>
      <span>
      <img className={css.main} src={props.main.url} />
      <i class="fas fa-chevron-right"></i>
      </span>
    </div>
  )
}
export default Gallery;