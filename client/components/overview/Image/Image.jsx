import React from 'react';
import css from './Image.module.css';

const Image = (props) => {
  let data = props.photo;
  return (
    <div style={{float: 'left'}}>
      <img className={css.thumb} src={props.photo.thumbnail_url}
      onClick={(event) => {props.handlePhotoClick(event, data)}}/>

    </div>

  )
}


export default Image;