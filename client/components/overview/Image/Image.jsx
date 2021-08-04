import React from 'react';
import css from './Image.module.css';

const Image = (props) => {
  let data = props.photo;
  if (props.highlight === props.index) {
    return (
      <div style={{float: 'left'}}>
        <img id="highlighted" alt="highlighted"
        className={css.selected} src={props.photo.thumbnail_url}
        onClick={(event) => {props.handlePhotoClick(event, data, props.index)}}/>
      </div>
    )
  } else {
    return (
      <div style={{float: 'left'}}>
        <img className={css.thumb} alt="other pictures"
        src={props.photo.thumbnail_url}
        onClick={(event) => {props.handlePhotoClick(event, data, props.index)}}/>
      </div>
    )
  }
}


export default Image;