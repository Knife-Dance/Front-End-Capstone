import React from 'react';
import css from './StyleImage.module.css';

const StyleImage = (props) => {
  let data2 = props.style;
  // console.log(props.handleStyleSelect)
  if (props.index === props.check) {
    return (
      <span className={css.container}>
        <img alt="current style" className={css.current} src={props.style.photos[0].thumbnail_url}
          style={{ height: 150, width: 100 }}
          onClick={(event) => { props.handleStyleSelect(event, data2, props.index) }} />
        <span className={css.checkMark}><i className="far fa-check-circle"></i></span>
      </span>
    )
  } else {
    return (
      <span>
        <img alt="other styles" className={css.thumb} src={props.style.photos[0].thumbnail_url}
          style={{ height: 150, width: 100 }}
          onClick={(event) => { props.handleStyleSelect(event, data2, props.index, props.highlight) }} />
      </span>
    )
  }
}


export default StyleImage;