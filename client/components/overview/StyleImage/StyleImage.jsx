import React from 'react';
import css from './StyleImage.module.css';

const StyleImage = (props) => {
  let data2 = props.style;
  // console.log(props.handleStyleSelect)
  if (props.index === props.check) {
    return (
      <span className={css.container}>
        <img className={css.current} src={props.style.photos[0].thumbnail_url}
          style={{ height: 150, width: 100 }}
          onClick={(event) => { props.handleStyleSelect(event, data2, props.index) }} />
        <span className={css.checkMark}><i className="fas fa-check"></i></span>
      </span>
    )
  } else {
    return (
      <span>
        <img className={css.thumb} src={props.style.photos[0].thumbnail_url}
          style={{ height: 150, width: 100 }}
          onClick={(event) => { props.handleStyleSelect(event, data2, props.index) }} />
      </span>
    )
  }
}


export default StyleImage;