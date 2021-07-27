import React, { useState, useEffect } from "react";
import StyleImage from '../StyleImage/StyleImage.jsx';
import css from './StyleSelector.module.css';
const StyleSelector = (props) => {
  let key = 0;
  // console.log(props.handleStyleSelect)
  return (
    <div>
      <div className={css.container}>
        <h4>{props.style.name}</h4>
        {props.styles.map((style) => {
          key++;
          // console.log(style)
          return <StyleImage key={key} style={style} handleStyleSelect={props.handleStyleSelect} />
        })}

      </div>

    </div>
  )
}

export default StyleSelector;