import React from 'react';
import styles from './ReviewItem.module.css';
const moment = require('moment');

function ReviewItem(props) {
  return (
    <div>
      <div className={ styles.box }>
        <div className={ styles.rating }>Star rating: {props.rating}</div>
        <div className={ styles.author }>-verified- {props.author}, {props.date}</div>
      </div>
      <div className={ styles.boxCol }>
        <div className={ styles.summary }><b>{props.summary}</b></div>
        <div className={ styles.body }>{props.body}</div>
        <div className={ styles.photos }>{props.photos.map((photo) => <img key={photo.id} src={photo.url} height="100" width="100"/>)}</div>
        {props.recommend === true && <div className={ styles.recommend }><i className="fas fa-check"></i> I recommend this product</div>}
        {props.response !== null && <div className={ styles.response }><i>Response from seller:</i> <div>{props.response}</div></div>}
        <div className={ styles.helpful }>Was this review helpful? <span><a href="">Yes</a> ({props.helpful})</span> <span><a href="">No</a> -count-</span></div>
      </div>
    </div>
  );
}


export default ReviewItem;