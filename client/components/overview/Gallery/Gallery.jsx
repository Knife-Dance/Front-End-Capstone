import React, { useState, useEffect } from 'react';
import css from './Gallery.module.css';
import Image from '../Image/Image.jsx';


const Gallery = (props) => {
  let element = document.getElementById('highlighted');
  const handleLeft = (e) => {
    // console.log(props.highlight);
    e.preventDefault()
    if (props.highlight > 0) {
      props.setHighlight(props.highlight - 1)
    }
    element.scrollIntoView({ behavior: "smooth", block: "end" })
  }
  const handleRight = (e) => {
    console.log(e.currentTarget)
    e.preventDefault()
    // console.log(props.highlight);
    if (props.highlight < props.max) {
      props.setHighlight(props.highlight + 1)
    }
    element.scrollIntoView({ behavior: "smooth", block: "center" })
  }


  return (
    <div className={props.clicked === 0 ? css.bigcontainer : css.only}>
      <div className={css.sidecontainer}>
        {props.style.photos.map((current, index) => {

          return (<Image key={index} index={index}
            highlight={props.highlight}
            photo={current} handlePhotoClick={props.handlePhotoClick} />)
        })}
      </div>
      <div className={css.expand}></div>
      <div id="image" className={css.arrow}  onClick={(e) => props.handleClicked(e)}>
        <span className={css.left}>
          <span onClick={(e) => handleLeft(e)}>
            <i className="far fa-caret-square-left fa-2x"></i>
          </span>
        </span>
        <span className={css.right}>

          <span onClick={(e) => handleRight(e)}>
            <i className="far fa-caret-square-right fa-2x"></i>
          </span>
        </span>
      </div>
      <span >
        <img id="mainImage"
        className={props.clicked === 0 ? css.main : css.onlymain}
         src={props.main.url} />
      </span>
    </div>
  )
}
export default Gallery;