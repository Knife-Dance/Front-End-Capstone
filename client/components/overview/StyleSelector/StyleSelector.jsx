import React, { useState, useEffect } from "react";
import StyleImage from '../StyleImage/StyleImage.jsx';
import css from './StyleSelector.module.css';
const StyleSelector = (props) => {
  let key = 0;
  // console.log(props.handleStyleSelect)
  return (
    <div>
      <h4>{props.style.name}</h4>
      <div className={css.container}>
        {props.styles.map((style, index) => {
          key++;
          // console.log(style)
          return <StyleImage key={index} index={index} style={style} handleStyleSelect={props.handleStyleSelect} />
        })}

      </div>

    </div>
  )
}

export default StyleSelector;