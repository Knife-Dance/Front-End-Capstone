import React, { useState, useEffect } from "react";
import StyleImage from '../StyleImage/StyleImage.jsx';
import css from './StyleSelector.module.css';
const StyleSelector = (props) => {

  // console.log(props.handleStyleSelect)
  return (
    <div>
      <h4>{props.style.name}</h4>
      <div className={css.container}>
        {props.styles.map((style, index) => {
          // console.log(style)
          return <StyleImage key={index} check={props.check} index={index} style={style} handleStyleSelect={props.handleStyleSelect} />
        })}

      </div>

    </div>
  )
}

export default StyleSelector;