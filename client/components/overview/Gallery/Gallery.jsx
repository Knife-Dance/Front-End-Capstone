import React, { useState, useEffect } from 'react';
import css from './Gallery.module.css';
import Image from '../Image/Image.jsx';


const Gallery = (props) => {
  let element = document.getElementById('highlighted');
  const handleLeft = () => {
    console.log(props.highlight);
    if (props.highlight > 0) {
      props.setHighlight(props.highlight - 1)
    }
    element.scrollIntoView({ behavior: "smooth", block: "end" })
  }
  const handleRight = () => {
    // console.log(props.highlight);
    if (props.highlight < props.max) {
      props.setHighlight(props.highlight + 1)
    }
    element.scrollIntoView({ behavior: "smooth", block: "center" })
  }


  return (
    <div className={css.bigcontainer}>
      <div className={css.sidecontainer}>
        {props.style.photos.map((current, index) => {

          return (<Image key={index} index={index}
            highlight={props.highlight}
            photo={current} handlePhotoClick={props.handlePhotoClick} />)
        })}
      </div>
      <div className={css.arrow}>
        <span className={css.left}>
          <span onClick={() => handleLeft()}>
            <i className="far fa-caret-square-left fa-2x"></i>
          </span>
        </span>
        <span className={css.right}>
          <span onClick={() => handleRight()}>
            <i className="far fa-caret-square-right fa-2x"></i>
          </span>
        </span>
      </div>
      <span onClick={() => handleMainImage()}>
        <img id="mainImage" className={css.main} src={props.main.url} />
      </span>
    </div>
  )
}
export default Gallery;