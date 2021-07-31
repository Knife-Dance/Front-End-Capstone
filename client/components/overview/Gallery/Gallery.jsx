import React, { useState, useEffect } from 'react';
import css from './Gallery.module.css';
import Image from '../Image/Image.jsx';

const Gallery = (props) => {
  let element = document.getElementById('highlighted');
  const handleLeft = () => {
    if (props.highlight > 0) {
      props.setHighlight(props.highlight - 1)
    }
    element.scrollIntoView({behavior: "smooth", block: "end"})
  }
  const handleRight = () => {
    if (props.highlight < props.max) {
      props.setHighlight(props.highlight + 1)
    }
    element.scrollIntoView({behavior: "smooth", block: "center"})
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
        <span className={css.left}><i onClick={() => handleLeft()}className="far fa-caret-square-left fa-2x"></i></span>
        <span className={css.right}><i onClick={() => handleRight()}className="far fa-caret-square-right fa-2x"></i></span>
      </div>
      <span>
        <img className={css.main} src={props.main.url} />
      </span>
    </div>
  )
}
export default Gallery;