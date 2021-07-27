import React from 'react';
import css from './StyleImage.module.css';

const StyleImage = (props) => {
  let data2 = props.style;
  // console.log(props.handleStyleSelect)
  return (
    <img className={css.thumb} src={props.style.photos[0].thumbnail_url}
      style={{ height: 150, width: 100 }}
      onClick={(event) => { props.handleStyleSelect(event, data2) }} />



  )
}


export default StyleImage;