import React from 'react';

const Image = (props) => {
  let data = props.photo;
  return (
    <img src={props.photo.thumbnail_url}
    style={{height: 150, width: 100}}
    onClick={(event) => {props.handlePhotoClick(event, data)}}/>

  )
}


export default Image;