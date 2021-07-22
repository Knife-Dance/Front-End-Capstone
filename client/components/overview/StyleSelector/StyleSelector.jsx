import React, {useState, useEffect} from "react";
import StyleImage from '../StyleImage/StyleImage.jsx';
const StyleSelector = (props) => {
  let key = 0;
  console.log(props.handleStyleSelect)
  return (
    <div>
      {props.styles.map((style) => {
        key++;
        // console.log(style)
       return <StyleImage key={key} style={style} handleStyleSelect={props.handleStyleSelect} />
})}

    </div>
  )
}

export default StyleSelector;