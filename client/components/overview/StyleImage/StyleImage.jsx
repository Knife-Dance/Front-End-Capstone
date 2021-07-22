import React from 'react';

const StyleImage = (props) => {
  let data2 = props.style;
  // console.log(props.handleStyleSelect)
  return (
    <div style={{float: 'left'}}>
      <img src={props.style.photos[0].thumbnail_url}
      style={{height: 150, width: 100}}
      onClick={(event) => {props.handleStyleSelect(event, data2)}}/>

    </div>

  )
}


export default StyleImage;