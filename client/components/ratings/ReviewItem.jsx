import React from 'react';
const moment = require('moment');

function ReviewItem(props) {
  return (
    <div>
      <div>Star rating: {props.rating}</div>
      <div>Date: {props.date}</div>
      <div><b>{props.summary}</b></div>
      <div>{props.body}</div>
      <div>{props.photos.map((photo) => <img key={photo.id} src={photo.url} height="100" width="100"/>)}</div>
      {props.recommend === true && <div>I recommend this product</div>}
      <div>-verified- {props.author}</div>
      {props.response !== null && <div>Response from seller: {props.response}</div>}
      <div>Was this review helpful? <span><a href="">Yes</a> ({props.helpful})</span> <span><a href="">No</a> -count-</span></div>
      <span>----------------------------------------------------------</span>
    </div>
  );
}


export default ReviewItem;